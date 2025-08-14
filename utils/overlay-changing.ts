import {Locator} from "@playwright/test";
import {AdminPage} from "../pages/admin/admin.page";

export const toMeasureOverlayChanging = async <T extends AdminPage>(page: T, locator: Locator, selector: string) => {
    await locator.hover()
    const element = locator.evaluate((_,selector ) => {
        const arrayOfElements = document.getElementsByClassName(selector) //[0];
        return parseFloat(getComputedStyle(arrayOfElements[0]).opacity)
    }, selector)
    console.log(`Время opacity равно: ${await element}`)
    return await element;
}