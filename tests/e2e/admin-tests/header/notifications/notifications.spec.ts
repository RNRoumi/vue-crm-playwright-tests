import {test} from "../../../../fixtures/pages.fixture";
import {expect} from "@playwright/test";
import {DashboardPage} from "../../../../../pages/admin/dashboard/dashboard.page";


test.describe('@notification-menu suite', async () => {
    let dashboardPage: DashboardPage
    test.beforeEach(async ({adminContext}) => {
        dashboardPage = new DashboardPage(adminContext);
        await dashboardPage.gotoMainPage();
        await dashboardPage.header.openNotificationsButton();
    })
    test('Меню нотификаций отображается', async () => {
        await expect(dashboardPage.header.notificationMenu.notificationMenuPage).toBeVisible()
    })
    test('Отображается общее число всех нотфиикаций', async () => {
        await expect(dashboardPage.header.notificationMenu.notificationsAmout).toHaveText('01')
    })
    test('Прокликивание значений селектора', async () => {
        await dashboardPage.header.notificationMenu.openNotificationMenuSelector()
        await dashboardPage.locator('#v-menu-v-4').getByRole('combobox').locator('div').filter({hasText: 'All Notifications'}).nth(1).click();
    })
    test('Взаимодействие с кнопкой "Отметить все прочитанными"', async () => {
         await test.step('Кнопка отображается', async () => {
             await expect(dashboardPage.getByRole('link', {name: 'Mark as all read'})).toBeVisible()
         })
        await test.step('Кликаем по кнопке', async () => {
            await dashboardPage.getByRole('link', {name: 'Mark as all read'}).click();
        })
    })
    test('Взаимодействие с кнопкой "Показать все элементы"', async () => {
        await test.step('Кнопка отображается', async () => {
            await dashboardPage.header.notificationMenu.openNotificationMenuSelector()
            await expect(dashboardPage.locator('#v-menu-v-4').getByRole('button', {name: 'View All'})).toBeVisible();
        })
        await test.step('Кликаем по кнопке', async () => {
            await dashboardPage.header.notificationMenu.openNotificationMenuSelector()
            await dashboardPage.locator('#v-menu-v-4').getByRole('button', {name: 'View All'}).click();
        })
    })
    test('Взаимодействие с кнопкой "Просмотреть все нотификации"', async () => {
        await test.step('Кнопка отображается', async () => {
            await dashboardPage.header.notificationMenu.openNotificationMenuSelector()
            await expect(dashboardPage.header.notificationMenu.viewAllButton).toBeVisible()
        })
        await test.step('Клик по кнопке "Просмотреть все нотификации"', async () => {
            await dashboardPage.header.notificationMenu.openNotificationMenuSelector()
            await dashboardPage.header.notificationMenu.viewAllButton.click()
        })
    })
})