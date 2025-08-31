import {test} from "../../../fixtures/pages.fixture";
import {expect} from "@playwright/test";
import {themeValidator} from "../../../../utils/theme-validator.utils";
import {AppThemes, ValidatedElement} from "../../../../config/app-themes";
import {toMeasureOverlayChanging} from "../../../../utils/overlay-changing";
import {DashboardPage} from "../../../../pages/admin/dashboard/dashboard.page";


test.describe('@header UI-actions', async () => {
    let dashboardPage: DashboardPage;
    test.beforeEach(async ({adminContext}) => {
        dashboardPage = new DashboardPage(adminContext)
        await dashboardPage.gotoMainPage();
    })
    test('Кнопки хедера на своих местах', async ({adminContext}) => {
        await expect(dashboardPage.header.vueDemoMainLogo).toBeVisible()
        await expect(dashboardPage.header.burgerButton).toBeVisible()
        await expect(dashboardPage.header.gitHubButton).toBeVisible()
        await expect(dashboardPage.header.notificationsButton).toBeVisible()
        await expect(dashboardPage.header.profileButton).toBeVisible()
    })
    test('Цвет темы белый', async ({adminContext}) => {
        await themeValidator(ValidatedElement.header, AppThemes.classic, dashboardPage)
    })

    test('Клик по Бургер-меню сворачивает/разворачивает сайдбар', async ({adminContext}) => {
        await test.step('Бургер виден', async () => {
            await expect(dashboardPage.header.burgerButton).toBeVisible()
        })
        await test.step('Кликаем по бургеру', async () => {
            await dashboardPage.header.burgerButton.click()
        })
        await test.step('Проверяем, что сайдбар свернулся', async () => {
            const res = await dashboardPage.evaluate(() => {
                return document.querySelector('#app > div > div > div > nav > div').getBoundingClientRect().width
                //Number(getComputedStyle(sel).width.split('px')[0])
            })
            expect(res).toBeCloseTo(75); //await expect(locNav).toHaveCSS('width', '75px'); // авто-поллинг до таймаута
        })
    })

    test('Бургер-меню при наведении меняет подсветку', async ({adminContext}) => {
        const result = await toMeasureOverlayChanging(dashboardPage,dashboardPage.header.burgerButton )
        expect(result).toBeGreaterThan(0);

        //await adminContext.header.burgerButton.hover()
        //     const element = adminContext.header.burgerButton.evaluate( () => {
        //         const arrayOfElements = document.getElementsByClassName("v-btn__overlay") //[0];
        //         return parseFloat(getComputedStyle(arrayOfElements[0]).opacity)
        //     })
        //     const overlayMeasure = await element;
        //     expect(overlayMeasure).toBeGreaterThan(0);
    })

    test('Иконка нотификаций при наведении меняет подсветку', async ({adminContext}) => {
        const result = await toMeasureOverlayChanging(dashboardPage,dashboardPage.header.notificationsButton)
        expect(result).toBeGreaterThan(0);
    })

    test('Профиль-меню при наведении меняет подсветку', async ({adminContext}) => {
        const result = await toMeasureOverlayChanging(dashboardPage,dashboardPage.header.profileButton)
        expect(result).toBeGreaterThan(0);
    })

})
