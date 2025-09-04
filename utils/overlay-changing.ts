import {Locator} from "@playwright/test";
import {DashboardPage} from "../pages/admin/dashboard/dashboard.page";

export const toMeasureOverlayChanging = async <T extends DashboardPage>(page: T, locator: Locator) => {
    await locator.hover()
     const result = await locator.evaluate((element) => {
        return parseFloat(getComputedStyle(element).opacity)
    });
    console.log(`Время opacity у элемента равно: ${result}`)
    return result

    // await locator.hover()
    // const result = await locator.locator('.v-btn__overlay').evaluate((element) => {
    //     return parseFloat(getComputedStyle(element).opacity)
    // });
    // console.log(`Время opacity у элемента равно: ${result}`)
    // return result
}

export const toMeasureSelectorOverlayChanging = async <T extends DashboardPage>(page: T, locator: Locator) => {
    await locator.hover()
    const result = await locator.evaluate((element) => {
        return parseFloat(getComputedStyle(element).opacity)
    });
    console.log(`Время opacity у элемента равно: ${result}`)
    return result
}




