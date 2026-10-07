import { test, expect } from "@playwright/test";

test.describe("Read all the table data elements and validate data", () => {
  test.beforeEach(
    "Navigate to the applicationto validate table data elements",
    async ({ page }) => {
      await page.goto("https://demoqa.com/");
      await page.getByText("Book Store Application").click();
      await page.waitForTimeout(5000);
    },
  );

  test("Validate table row data elements", async ({ page }) => {
    await page.getByText("Book Store Application").click();
    await page.waitForTimeout(5000);

    const tableRows = page.locator("//*[@id='root']//table/tbody/tr");
    const rowCount = await tableRows.count();
    console.log("Total Rows in the table: ", rowCount);


    const rows = await tableRows.all();
    console.log("Total Rows in the table: ", rows.length);

    for (const row of rows) {
      const rowText = await row.allInnerTexts();
      console.log("Row Data:", rowText);

      const cells = await row.locator("td").allInnerTexts();
      console.log("Cell Data:", cells);
    }

    await page.waitForTimeout(5000);
  });
});
