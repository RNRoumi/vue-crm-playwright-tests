import {test} from "../../../fixtures/pages.fixture";
import {DashboardPage} from "../../../../pages/admin/dashboard/dashboard.page";
import {CustomerPage} from "../../../../pages/admin/customer.page";
import {reqCreateUser} from "../../../mocks/api/customer.mock-api";


test.describe('@mock @happy-path Создание пользователя (УСПЕШНОЕ)', async (): Promise<void> => {
    let adminPage: DashboardPage;
    let customerPage: CustomerPage;
    test.beforeEach(async ({adminContext}): Promise<void> => {
        adminPage = new DashboardPage(adminContext)
        customerPage = await adminPage.openCustomerPage();
        await customerPage.clickNewCustomerButton();
    })
    test('Создаем пользователя', async ({adminContext}): Promise<void> => {
        await test.step('Заполняем форму пользователя', async (): Promise<void> => {
            await customerPage.fillNewCustomerForm({
                userName: "Роман",
                lastName: "Иванов",
                eMail: "test@mail.ru",
                phone: "123",
                mobile: "123",
                rewards: '1'
            }, "vip")
        })
        await test.step('Отправляем запрос', async (): Promise<void> => {
            await Promise.all([customerPage.clickSubmitButton(),
                reqCreateUser(adminContext)
            ])
        })
    })
})

test.describe('@mock @errors-path Создание пользователя (ОШИБКА)', async (): Promise<void> => {
    test.use({mockProfile: "error"})
    let adminPage: DashboardPage;
    let customerPage: CustomerPage;
    test.beforeEach(async ({adminContext}): Promise<void> => {
        adminPage = new DashboardPage(adminContext)
        customerPage = await adminPage.openCustomerPage();
        await customerPage.clickNewCustomerButton();
    })
    test('Создаем пользователя', async ({adminContext}): Promise<void> => {
        await test.step('Заполняем форму пользователя', async (): Promise<void> => {
            await customerPage.fillNewCustomerForm({
                userName: "Роман",
                lastName: "Иванов",
                eMail: "test@mail.ru",
                phone: "123",
                mobile: "123",
                rewards: '1'
            }, "vip")
        })
        await test.step('Отправляем запрос', async (): Promise<void> => {
            await Promise.all([customerPage.clickSubmitButton(),
                reqCreateUser(adminContext)
            ])
        })
    })
})


test.describe('@mock @disconnect Создание пользователя (ДИСКОННЕКТ)', async (): Promise<void> => {
    test.use({mockProfile: "disconnect"})
    let adminPage: DashboardPage;
    let customerPage: CustomerPage;
    test.beforeEach(async ({adminContext}): Promise<void> => {
        adminPage = new DashboardPage(adminContext)
        customerPage = await adminPage.openCustomerPage();
        await customerPage.clickNewCustomerButton();
    })
    test('Создаем пользователя', async ({adminContext}): Promise<void> => {
        await test.step('Заполняем форму пользователя', async (): Promise<void> => {
            await customerPage.fillNewCustomerForm({
                userName: "Роман",
                lastName: "Иванов",
                eMail: "test@mail.ru",
                phone: "123",
                mobile: "123",
                rewards: '1'
            }, "vip")
        })
        await test.step('Отправляем запрос', async (): Promise<void> => {
            await Promise.all([customerPage.clickSubmitButton(),
                reqCreateUser(adminContext)
            ])
        })
    })
})


test.describe('@mock @slow Создание пользователя (ТРОТЛИНГ)', async (): Promise<void> => {
    test.use({mockProfile: "slow"})
    let adminPage: DashboardPage;
    let customerPage: CustomerPage;
    test.beforeEach(async ({adminContext}): Promise<void> => {
        adminPage = new DashboardPage(adminContext)
        customerPage = await adminPage.openCustomerPage();
        await customerPage.clickNewCustomerButton();
    })
    test('Создаем пользователя', async ({adminContext}): Promise<void> => {
        await test.step('Заполняем форму пользователя', async (): Promise<void> => {
            await customerPage.fillNewCustomerForm({
                userName: "Роман",
                lastName: "Иванов",
                eMail: "test@mail.ru",
                phone: "123",
                mobile: "123",
                rewards: '1'
            }, "vip")
        })
        await test.step('Отправляем запрос', async (): Promise<void> => {
            await Promise.all([customerPage.clickSubmitButton(),
                reqCreateUser(adminContext)
            ])
        })
    })
})


test.describe('@mock @notFound Создание пользователя (НЕ-НАЙДЕН)', async (): Promise<void> => {
    test.use({mockProfile: "notFound"})
    let adminPage: DashboardPage;
    let customerPage: CustomerPage;
    test.beforeEach(async ({adminContext}): Promise<void> => {
        adminPage = new DashboardPage(adminContext)
        customerPage = await adminPage.openCustomerPage();
        await customerPage.clickNewCustomerButton();
    })
    test('Создаем пользователя', async ({adminContext}): Promise<void> => {
        await test.step('Заполняем форму пользователя', async (): Promise<void> => {
            await customerPage.fillNewCustomerForm({
                userName: "Роман",
                lastName: "Иванов",
                eMail: "test@mail.ru",
                phone: "123",
                mobile: "123",
                rewards: '1'
            }, "vip")
        })
        await test.step('Отправляем запрос', async (): Promise<void> => {
            await Promise.all([customerPage.clickSubmitButton(),
                reqCreateUser(adminContext)
            ])
        })
    })
})