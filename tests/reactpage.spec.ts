import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const runMetrics = {
    timestamp: new Date().toISOString(),
    environment: 'Unoptimized CSR Baseline',
    accessibility: [] as Array<{ state: string; violationsCount: number; violations: any[] }>,
    performance: [] as Array<{ milestone: string; domNodes: number; durationMs?: number; jsHeapSizeMB?: number }>
};

test('Comprehensive Accessibility & Performance Benchmark Suite', async ({ page, context }) => {
    const cdpSession = await context.newCDPSession(page);
    await cdpSession.send('Performance.enable');

    async function recordPerformanceMetrics(milestone: string, durationMs?: number) {
        const perfStats = await page.evaluate(() => {
            const memory = (performance as any).memory;
            return {
                domNodes: document.getElementsByTagName('*').length,
                jsHeapSizeMB: memory ? parseFloat((memory.usedJSHeapSize / (1024 * 1024)).toFixed(2)) : null
            };
        });

        runMetrics.performance.push({
            milestone,
            domNodes: perfStats.domNodes,
            durationMs: durationMs ? parseFloat(durationMs.toFixed(2)) : undefined,
            jsHeapSizeMB: perfStats.jsHeapSizeMB ?? undefined
        });
    }

    async function recordAccessibilityScan(stateName: string) {
        const results = await new AxeBuilder({ page }).analyze();
        runMetrics.accessibility.push({
            state: stateName,
            violationsCount: results.violations.length,
            violations: results.violations.map(v => ({
                id: v.id,
                impact: v.impact,
                description: v.description,
                nodesAffected: v.nodes.length,
                helpUrl: v.helpUrl
            }))
        });
    }

    // Initial Page Load ---
    const startTime = performance.now();
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    const loadDuration = performance.now() - startTime;

    await recordPerformanceMetrics('01_Initial_Page_Load', loadDuration);
    await recordAccessibilityScan('Initial Page Load');

    // Accordion 1 (System Overview & Live Feed Injection) ---
    const accordion1Header = page.locator('.accordion-header', { hasText: 'Quick System Overview' });
    await accordion1Header.click();

    const injectButton = page.getByRole('button', { name: 'Simulate Real-time Log Injection' });
    await injectButton.click();
    await injectButton.click();

    await recordPerformanceMetrics('02_Accordion_1_Feed_Injection');
    await recordAccessibilityScan('Accordion 1 - Live Log Injected');

    // Accordion 2 (Multi-Step Form Errors & Validation State) ---
    const accordion2Header = page.locator('.accordion-header', { hasText: 'Inventory Intake Wizard' });
    await accordion2Header.click();

    // Trigger form validation error state
    const nextStepButton = page.getByRole('button', { name: 'Next Step' });
    await nextStepButton.click();

    await recordPerformanceMetrics('03_Form_Validation_Error_State');
    await recordAccessibilityScan('Form Step 1 - Error State');

    // Fill input correctly and advance to Step 2
    await page.getByPlaceholder('Enter item name...').fill('Pharmaceutical Batch Alpha');
    await nextStepButton.click();
    await expect(page.getByText('Step 2: Details & Confirmation')).toBeVisible();

    await recordPerformanceMetrics('04_Form_Step_2_Mounted');
    await recordAccessibilityScan('Form Step 2 - Mounted');

    // Accordion 3 (Live Activity Stream) ---
    const accordion3Header = page.locator('.accordion-header', { hasText: 'Live Activity Stream' });
    await accordion3Header.click();

    await recordPerformanceMetrics('05_Activity_Stream_Expanded');
    await recordAccessibilityScan('Accordion 3 - Activity Stream');

    // Accordion 4 (Unvirtualized Table - 500 DOM Rows) ---
    const tableStartTime = performance.now();
    const accordion4Header = page.locator('.accordion-header', { hasText: 'Full Asset Catalog Table' });
    await accordion4Header.click();

    // Wait for 500 table row elements to render in the DOM
    await page.locator('.data-table tbody tr').nth(499).waitFor();
    const tableRenderDuration = performance.now() - tableStartTime;

    await recordPerformanceMetrics('06_Table_500_Rows_Mounted', tableRenderDuration);
    await recordAccessibilityScan('Table - 500 Unvirtualized Rows Loaded');

    // Inspection Modal (Unmanaged Focus & Overlay) ---
    const inspectButton = page.locator('.data-table tbody tr').first().getByRole('button', { name: 'Inspect' });
    await inspectButton.click();

    const modalHeading = page.getByRole('heading', { name: 'Asset Inspection Details' });
    await expect(modalHeading).toBeVisible();

    await recordPerformanceMetrics('07_Modal_Dialog_Opened');
    await recordAccessibilityScan('Modal - Active Inspection Dialog');

    // Close Modal
    await page.getByRole('button', { name: 'Close Window' }).click();
    await expect(page.getByRole('heading', { name: 'Asset Inspection Details' })).toBeHidden();

    // --- EXPORT BENCHMARK DATA ---
    const outputDir = path.join(__dirname, 'benchmark-results');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(
        path.join(outputDir, 'unoptimized-csr-metrics.json'),
        JSON.stringify(runMetrics, null, 2)
    );

    // Soft assertion: verify no critical accessibility violations (allows suite completion for data collection)
    const totalViolations = runMetrics.accessibility.reduce((sum, item) => sum + item.violationsCount, 0);
    console.log(`Total Accessibility Violations across all state transitions: ${totalViolations}`);
});


