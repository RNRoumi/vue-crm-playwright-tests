import {Page} from "@playwright/test";
import {reqCreateUserUrl} from "../api/customer.mock-api";


export async function disconnect(page: Page): Promise<void>{
    await page.route(reqCreateUserUrl, async route =>
        await route.fulfill({
            status: 503,
            contentType: 'text/plain; charset=utf-8',
            body: 'offline'
        }))
}