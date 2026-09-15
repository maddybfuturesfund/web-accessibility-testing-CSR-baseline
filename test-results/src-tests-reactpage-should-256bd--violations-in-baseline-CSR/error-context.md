# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src/tests/reactpage.spec.ts >> should not have accessibility violations in baseline CSR
- Location: src/tests/reactpage.spec.ts:4:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 271

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#007bff",
+               "contrastRatio": 3.97,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "10.0pt (13.3333px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.97 (foreground color: #ffffff, background color: #007bff, font size: 10.0pt (13.3333px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button>Next Step</button>",
+                 "target": Array [
+                   "button",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.97 (foreground color: #ffffff, background color: #007bff, font size: 10.0pt (13.3333px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<button>Next Step</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure the order of headings is semantically correct",
+     "help": "Heading levels should only increase by one",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/heading-order?application=playwright",
+     "id": "heading-order",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "heading-order",
+             "impact": "moderate",
+             "message": "Heading order invalid",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Heading order invalid",
+         "html": "<h3>Step 1: Basic Info</h3>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "h3",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure the document has a main landmark",
+     "help": "Document should have one main landmark",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/landmark-one-main?application=playwright",
+     "id": "landmark-one-main",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-main",
+             "impact": "moderate",
+             "message": "Document does not have a main landmark",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Document does not have a main landmark",
+         "html": "<html lang=\"en\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+   Object {
+     "description": "Ensure all page content is contained by landmarks",
+     "help": "All page content should be contained by landmarks",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/region?application=playwright",
+     "id": "region",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"accordion-section\"><div class=\"accordion-header\">► Quick System Overview &amp; Telemetry (Click to Toggle)</div></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".accordion-section:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"accordion-header\">► Inventory Intake Wizard (Multi-Step Form)</div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".accordion-section:nth-child(3) > .accordion-header",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<h3>Step 1: Basic Info</h3>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "h3",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"form-group\"><label>Item Name</label><input placeholder=\"Enter item name...\" type=\"text\" value=\"\"></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".form-group",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"accordion-section\"><div class=\"accordion-header\">► Live Activity Stream (Infinite Feed)</div></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".accordion-section:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "isIframe": false,
+             },
+             "id": "region",
+             "impact": "moderate",
+             "message": "Some page content is not contained by landmarks",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Some page content is not contained by landmarks",
+         "html": "<div class=\"accordion-section\"><div class=\"accordion-header\">► Full Asset Catalog Table (500 Unvirtualized Rows)</div></div>",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           ".accordion-section:nth-child(5)",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.keyboard",
+       "best-practice",
+       "RGAAv4",
+       "RGAA-9.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Supply Chain Baseline Dashboard (Unoptimized CSR)" [level=1] [ref=e5]
    - paragraph [ref=e6]: Testing baseline DOM performance and accessibility metrics.
  - generic [ref=e7]: ► Quick System Overview & Telemetry (Click to Toggle)
  - generic [ref=e9]:
    - generic [ref=e10] [cursor=pointer]: ► Inventory Intake Wizard (Multi-Step Form)
    - generic [ref=e12]:
      - 'heading "Step 1: Basic Info" [level=3] [ref=e13]'
      - generic [ref=e14]:
        - generic [ref=e15]: Item Name
        - textbox "Enter item name..." [ref=e16]
      - button "Next Step" [ref=e17] [cursor=pointer]
  - generic [ref=e18]: ► Live Activity Stream (Infinite Feed)
  - generic [ref=e20]: ► Full Asset Catalog Table (500 Unvirtualized Rows)
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test('should not have accessibility violations in baseline CSR', async ({ page }) => {
  5  |     await page.goto('http://localhost:5173');
  6  | 
  7  |     await page.click('text=Full Asset Catalog Table');
  8  |     await page.click('text=Inventory Intake Wizard');
  9  | 
  10 |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  11 | 
  12 |     console.log(`Found ${accessibilityScanResults.violations.length} violations.`);
> 13 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  14 | });
```