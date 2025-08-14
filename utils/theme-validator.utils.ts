import {expect} from "@playwright/test";
import {AppThemes, ValidatedElement} from "../config/app-themes";
import {BasePage} from "../pages/base.page";
export async function themeValidator(validatedElement: ValidatedElement, expectedTheme: AppThemes, page: BasePage){
    const loc = page.locator(validatedElement).first()
    await expect(loc).toHaveClass(new RegExp(`(^|\\s)${expectedTheme}(\\s|$)`));
}