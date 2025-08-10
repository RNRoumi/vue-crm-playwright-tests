import {test} from "../../fixtures/pages.fixture";

test.describe('Тест набор для пользователя с ролью Админ ', () => {
    test.beforeEach(async ({adminPage}) => {
        await test.step('Идем на главную страницу', async () => {
            await adminPage.gotoMainPage();
        })
        await test.step('Получаем состояние текущей сесии', async () => {
            await adminPage.getSessionState();
        })
    })

    test('Проверка Лого кнопки', async ({adminPage}) => {
        await adminPage.header.openVueDemoMainPage()
    })

    test('Проверка Бургера кнопки', async () => {

    })

    test('Проверка Гитхаб кнопки', async () => {

    })

    test('Проверка кнопки Нотификаций', async () => {

    })

    test('Проверка кнопки открытия Меню-Профиля', async () => {

    })
})