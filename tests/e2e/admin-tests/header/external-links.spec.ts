import {test} from "../../../fixtures/pages.fixture";
import {expect} from "@playwright/test";
import {DashboardPage} from "../../../../pages/admin/dashboard/dashboard.page";
import appConfig from "../../../../config/app-config";


test.describe('@header external links', () => {
    let dashboardPage: DashboardPage;
    test.beforeEach(async ({adminContext}) => {
        const dashboardPage = new DashboardPage(adminContext)
        await dashboardPage.gotoMainPage();
    })
    test('Проверка Лого кнопки', async ({adminContext}) => {
        await test.step('Кликаем по логотипу', async () => {
            await dashboardPage.header.openVueDemoMainLogo()
        })
        await test.step('Проверяем, что после клика URL ведет на главную страницу', async () => {
            await expect(adminContext).toHaveURL(`${appConfig.TEST_TARGET}`)
        })
    })
    test('GitHub открывается в новой вкладке', async ({}) => {
            const popUpPage = await dashboardPage.header.openGitHubPopUp();
            await popUpPage.waitForLoadState()
            await expect(popUpPage).toHaveURL(/github\.com/)
    })
})