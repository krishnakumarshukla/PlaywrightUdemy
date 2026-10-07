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


test("Demo for config file", async({page}, testInfo) => {

  console.log(testInfo.title);
  console.log(testInfo.project.name);
  console.log(testInfo.project.use.viewport);
  console.log(testInfo.project.use.baseURL);
  console.log(testInfo.project.use.navigationTimeout);
  console.log(`Test runs on config ====> ${JSON.stringify(testInfo.config)}`);


})


test("Demo for Fixtures", async({page, browserName}, testInfo) => {
  console.log(`Demo for fuxtures ==> ${browserName}`);
  
})

test("Recording validation on failed test", async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await page.getByLabel("Username").click();

    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    //await page.getByRole("button", { name: "Login" }).click();
    await page.locator("body").click();
    await expect(page.locator("h2")).toContainText("Make Appointment");

    await page.waitForTimeout(5000);
    await page.close();
});


