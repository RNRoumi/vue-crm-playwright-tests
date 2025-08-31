import {Page} from "@playwright/test";
import {reqCreateUserUrl} from "../api/customer.mock-api";
import {delayRandom} from "../../../utils/delay";


export async function slow(page: Page): Promise<void> {
    await delayRandom()
    await page.route(reqCreateUserUrl, async route =>
        /// Здесь должны быть задержка
        await route.fulfill({
            status: 201,
            contentType: 'text/plain; charset=utf-8',
            body: 'Server error'
        }))
}