import { test, expect } from "@playwright/test";

test.describe("Make Appointment Tests Functionality", () => {
  test.beforeEach(
    "Navigate to application and Login for Make Appointment",
    async ({ page }) => {
      await page.goto("https://katalon-demo-cura.herokuapp.com/");
      await page.getByRole("link", { name: "Make Appointment" }).click();
      await page.getByLabel("Username").click();

      await page.getByLabel("Username").fill("John Doe");
      await page.getByLabel("Password").click();
      await page.getByLabel("Password").fill("ThisIsNotAPassword");
      await page.getByRole("button", { name: "Login" }).click();
      await page.locator("body").click();
      await expect(page.locator("h2")).toContainText("Make Appointment");
    },
  );

  test("test", async ({ page }) => {
    await expect(page.locator("h2")).toContainText("Make Appointment");
    await page
      .getByLabel("Facility")
      .selectOption("Seoul CURA Healthcare Center");
    await page
      .getByRole("checkbox", { name: "Apply for hospital readmission" })
      .check();
    await page.getByRole("radio", { name: "Medicaid" }).check();
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    await page
      .getByRole("textbox", { name: "Visit Date (Required)" })
      .fill("05/08/2027");
    await page
      .getByRole("textbox", { name: "Visit Date (Required)" })
      .press("Enter");
    await page.getByRole("textbox", { name: "Comment" }).click();
    await page
      .getByRole("textbox", { name: "Comment" })
      .fill(
        "Validate test playwright for multiline\ncomments, that properly working",
      );
    await expect(
      page.getByRole("button", { name: "Book Appointment" }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
    await expect(
      page.getByRole("link", { name: "Go to Homepage" }),
    ).toBeVisible();
  });
});
