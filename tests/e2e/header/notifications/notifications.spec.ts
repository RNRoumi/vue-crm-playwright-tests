import {test} from "../../../fixtures/pages.fixture";
import {expect} from "@playwright/test";


test.describe('@notification-menu suite', async () => {
    test.beforeEach(async ({adminPage}) => {
        await adminPage.gotoMainPage();
        await adminPage.header.openNotificationsButton();
    })
    test('Меню нотификаций отображается', async ({adminPage}) => {
        await expect(adminPage.header.notificationMenu.notificationMenuPage).toBeVisible()
    })
    test('Отображается общее число всех нотфиикаций', async ({adminPage}) => {
        await expect(adminPage.header.notificationMenu.notificationsAmout).toHaveText('01')
    })
    test('Прокликивание значений селектора', async ({adminPage}) => {
        await adminPage.header.notificationMenu.openNotificationMenuSelector()
        await adminPage.locator('#v-menu-v-4').getByRole('combobox').locator('div').filter({ hasText: 'All Notifications' }).nth(1).click();
    })
    test('Отметить все прочитанными', async ({adminPage}) => {
        await adminPage.header.notificationMenu.openNotificationMenuSelector()
        await adminPage.getByRole('link', { name: 'Mark as all read' }).click();
    })
    test('Показать все элементы', async ({adminPage}) => {
        await adminPage.header.notificationMenu.openNotificationMenuSelector()
        await adminPage.locator('#v-menu-v-4').getByRole('button', { name: 'View All' }).click();
    })
})