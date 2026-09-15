import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations in baseline CSR', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.click('text=Full Asset Catalog Table');
    await page.click('text=Inventory Intake Wizard');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    console.log(`Found ${accessibilityScanResults.violations.length} violations.`);
    expect(accessibilityScanResults.violations).toEqual([]);
});