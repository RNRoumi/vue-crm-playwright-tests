import {test} from "../../../../fixtures/pages.fixture";
import {expect} from "@playwright/test";
import {DashboardPage} from "../../../../../pages/admin/dashboard/dashboard.page";
import {toMeasureOverlayChanging, toMeasureSelectorOverlayChanging} from "../../../../../utils/overlay-changing";


test.describe('@ui-notification-menu suite', async () => {
    let dashboardPage: DashboardPage
    test.beforeEach(async ({adminContext}) => {
        dashboardPage = new DashboardPage(adminContext)
        await dashboardPage.gotoMainPage();
        await dashboardPage.header.openNotificationsButton()
    })
    test('Ховер на селекторе изменяет подсветку', async () => {
        const result = await toMeasureSelectorOverlayChanging(dashboardPage, dashboardPage.header.notificationMenu.notificationMenuSelector)
        expect(result).toBeGreaterThan(0);
    })
    test('Ховер на View All изменяет подсветку', async () => {
        await dashboardPage.header.notificationMenu.viewAllButton.click()
        const result = await toMeasureOverlayChanging(dashboardPage, dashboardPage.header.notificationMenu.viewAllButton)
        expect(result).toBeGreaterThan(0);
    })
    test('Ховер на Нотификации изменяет подсветку', async () => {
        const firstEl = dashboardPage.header.notificationMenu.allNotificationsInMenu.nth(1)
        const result = await toMeasureOverlayChanging(dashboardPage, firstEl)
        expect(result).toBeGreaterThan(0);
    })
})
