import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations in baseline CSR', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.click('text=Inventory Intake Wizard');
    await page.click('text=Full Asset Catalog Table');
    const modal = page.getByRole('row', { name: '1 Asset Item #1 Hardware' }).getByRole('button');
    await modal.click();
    const closeButton = page.getByRole('button', { name: 'Close Window' });
    await closeButton.click();



    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    console.log(`Found ${accessibilityScanResults.violations.length} violations.`);
    expect(accessibilityScanResults.violations).toEqual([]);
});

