import { test, expect } from "@playwright/test";

test.describe("Login Tests Functionality", () => {
  test.beforeEach(
    "Navigate to application and click on Make Appointment",
    async ({ page }) => {
      await page.goto("https://katalon-demo-cura.herokuapp.com/" );
      await page.getByRole("link", { name: "Make Appointment" }).click();
      await page.getByLabel("Username").click();
    },
  );

  test("test with wrong credentials", async ({ page }) => {
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("ThisisNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
    await page.waitForTimeout(5000);
    await page.close();
  });

  test("test with correct credentials", async ({ page }) => {
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    //await page.getByText('Login failed! Please ensure').click();
    await page.locator("body").click();
    await expect(page.locator("h2")).toContainText("Make Appointment");

    await page.waitForTimeout(5000);
    await page.close();
  });



});
