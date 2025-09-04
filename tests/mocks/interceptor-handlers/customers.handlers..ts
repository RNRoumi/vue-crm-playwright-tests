import {Page, Route} from "@playwright/test";
import {reqCreateUserUrl} from "../api/customer.mock-api";

//Функция перехвата фейковой ручки
export async function registerCustomerHandlers(page: Page): Promise<void> {
    await page.route(reqCreateUserUrl, (route: Route) => {
        route.fulfill({
            status: 201,
            contentType: "application/json",
            body: `Пользователь создан!`,
        })
    } )
}