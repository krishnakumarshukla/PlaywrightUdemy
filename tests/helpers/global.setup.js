import { defineConfig } from "@playwright/test";
import path from "path";
import fs from "fs";

export default async function globalSetup(config) {
    console.log("Global setup started.");
  if (process.env.RUNNER === "local") {
    // Perform any global setup tasks here, such as initializing databases, setting environment variables, etc.    
    const allureResultsDir = path.resolve(process.cwd(), "allure-results");

    console.log(`Allure results directory2: ${allureResultsDir}`);

    if (fs.existsSync(allureResultsDir)) {
      console.log("Allure results directory exists. Deleting...");
      fs.rmSync(allureResultsDir, { recursive: true, force: true });
      console.log("Allure results directory deleted.");
    }
  }
  console.log("Global setup completed.");
}
