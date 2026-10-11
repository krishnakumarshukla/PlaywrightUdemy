import { test, expect, devices } from "@playwright/test";

test("My first test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);

  console.log(`print supporting device information ${Object.keys(devices)}`);
});

test("Test validation for with mobile devices iPhone 12 Pro", async ({ page,}, testInfo) => {

  console.log(`Test runs on config ====> ${JSON.stringify(testInfo.config)}`);

  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await page.getByRole("link", { name: "Make Appointment" }).click();
  await page.getByLabel("Username").click();

  await page.getByLabel("Username").fill("John Doe");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();
  await page.locator("body").click();
  await expect(page.locator("h2")).toContainText("Make Appointment");

  await page.waitForTimeout(5000);
  await page.close();
});

test.only(
  "Test demo for parallel validation",  { tag: "@demoParallel, @parallel" },  async ({ page }) => {
    console.log("Test demo for parallel validation");
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
  },
);
