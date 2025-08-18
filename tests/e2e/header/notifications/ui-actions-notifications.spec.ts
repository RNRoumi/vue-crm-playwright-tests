
import {test} from "../../../fixtures/pages.fixture";
import {expect} from "@playwright/test";


test.describe('@ui-notification-menu suite', async () => {
    test.beforeEach(async ({adminPage}) => {
        await adminPage.gotoMainPage();
    })
    test('Ховер на селекторе изменяет подсветку', async ({adminPage}) => {
    })
    test('Ховер на элементе селектора изменяет подсветку', async ({adminPage}) => {
    })
    test('Ховер на результирующей выборке нотификаций изменяет подсветку', async ({adminPage}) => {
    })
    test('Ховер на View All изменяет подсветку', async ({adminPage}) => {
    })
})
