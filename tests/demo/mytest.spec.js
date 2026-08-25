import { test, expect } from "@playwright/test";

test("My first test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test("My Test2", { tag: "@smoke" }, async ({ page }, TestInfo) => {
  const body = await page.$("body");
  const text = await body?.innerText();
  console.log(text);
  //    console.log(TestInfo.title);
});
