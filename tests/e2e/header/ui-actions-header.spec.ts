import {test} from "../../fixtures/pages.fixture";
import {expect} from "@playwright/test";
import {themeValidator} from "../../../utils/theme-validator.utils";
import {AppThemes, ValidatedElement} from "../../../config/app-themes";
import {toMeasureOverlayChanging} from "../../../utils/overlay-changing";


test.describe('@header UI-actions', async () => {
    test.beforeEach(async ({adminPage}) => {
        await adminPage.gotoMainPage();
    })
    test('Кнопки хедера на своих местах', async ({adminPage}) => {
        await expect(adminPage.header.vueDemoMainLogo).toBeVisible()
        await expect(adminPage.header.burgerButton).toBeVisible()
        await expect(adminPage.header.gitHubButton).toBeVisible()
        await expect(adminPage.header.notificationsButton).toBeVisible()
        await expect(adminPage.header.profileButton).toBeVisible()
    })
    test('Цвет темы белый', async ({adminPage}) => {
        await themeValidator(ValidatedElement.header, AppThemes.classic, adminPage)
    })

    test('Клик по Бургер-меню сворачивает/разворачивает сайдбар', async ({adminPage}) => {
        await test.step('Бургер виден', async () => {
            await expect(adminPage.header.burgerButton).toBeVisible()
        })
        await test.step('Кликаем по бургеру', async () => {
            await adminPage.header.burgerButton.click()
        })
        await test.step('Проверяем, что сайдбар свернулся', async () => {
            const res = await adminPage.evaluate(() => {
                return document.querySelector('#app > div > div > div > nav > div').getBoundingClientRect().width
                //Number(getComputedStyle(sel).width.split('px')[0])
            })
            expect(res).toBeCloseTo(75); //await expect(locNav).toHaveCSS('width', '75px'); // авто-поллинг до таймаута
        })
    })

    test('Бургер-меню при наведении меняет подсветку', async ({adminPage}) => {
        const result = await toMeasureOverlayChanging(adminPage,adminPage.header.burgerButton,"v-btn__overlay" )
        expect(result).toBeGreaterThan(0);

        //await adminPage.header.burgerButton.hover()
        //     const element = adminPage.header.burgerButton.evaluate( () => {
        //         const arrayOfElements = document.getElementsByClassName("v-btn__overlay") //[0];
        //         return parseFloat(getComputedStyle(arrayOfElements[0]).opacity)
        //     })
        //     const overlayMeasure = await element;
        //     expect(overlayMeasure).toBeGreaterThan(0);
    })

    test('Иконка нотификаций при наведении меняет подсветку', async () => {
    })

    test('Профиль-меню при наведении меняет подсветку', async () => {
    })

})
