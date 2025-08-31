import {Page} from "@playwright/test";
import {happy} from "./scenarios/happy-path";
import {errors} from "./scenarios/errors-path";
import {disconnect} from "./scenarios/disconnect-path";
import {slow} from "./scenarios/slow-path";
import {notFound} from "./scenarios/not-found-path";

//export type Context = { role: "user" | "admin" }
export type Scenarios = "happy" | "error" | "disconnect" | "slow" | "notFound"

// export async function installScenarioForMock(page: Page, scenario: Scenarios, context: Context) {}
export async function installScenarioForMock(page: Page, scenario: Scenarios) {
    if (scenario === "happy") {
        await happy(page);
    }
    if (scenario === 'error') {
        await errors(page)
    }
    if (scenario === "disconnect") {
        await disconnect(page)
    }
    if (scenario === "slow") {
        await slow(page)
    }
    if (scenario === "notFound") {
        await notFound(page)
    }
}

