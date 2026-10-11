import { config } from "@playwright/test";
import { exec } from "node:child_process";

export default async function globalTeardown(config) {

    if (process.env.RUNNER === "local") {

        console.log("Global teardown started.");
        exec("allure serve", (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing allure serve: ${error}`);
                return;
            }
    })
}
}