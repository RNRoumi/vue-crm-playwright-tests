import {test} from "../../../../fixtures/pages.fixture";
import {DashboardPage} from "../../../../../pages/admin/dashboard/dashboard.page";

test.describe('@header Тест набор для пользователя с ролью Админ ', () => {
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({adminContext}) => {
        await test.step('Идем на главную страницу', async () => {
            const dashboardPage = new DashboardPage(adminContext)
            await dashboardPage.gotoMainPage();
        })
    })
    test('Проверка кнопки открытия Меню-Профиля', async () => {
        await dashboardPage.header.clickProfileButton()
    })
})