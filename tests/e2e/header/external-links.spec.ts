import {test} from "../../fixtures/pages.fixture";
import {expect} from "@playwright/test";


test.describe('@header external links', () => {
    test.beforeEach(async ({adminPage}) => {
        await adminPage.gotoMainPage();
    })
    test('GitHub открывается в новой вкладке', async ({adminPage}) => {
        const popUpPage  = await adminPage.header.openGitHubPopUp();
        await popUpPage.waitForLoadState()
        await expect(popUpPage).toHaveURL(/github\.com/)
    })
})