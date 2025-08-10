import { test as setup } from '../fixtures/pages.fixture';
import { chromium } from "@playwright/test";
import { fileExists } from "../../utils/exist.utils";
import appConfig from "../../config/app-config";
import {AppRoutes} from "../../config/app-routes";

setup('Получение Storage у AdminPage', async () => {

    if (!await fileExists(appConfig.ADMIN_SESSION_FILE_PATH)) return;

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage();

    await page.goto(`${appConfig.TEST_TARGET}/${AppRoutes.login}`)
    await page.getByRole('textbox', { name: 'Email Address / Username' }).fill('admin@test.com');
    await page.getByRole('textbox', { name: 'Password Password' }).fill('password');
    await page.getByRole('checkbox').click()
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();


    await page.waitForURL( `${appConfig.TEST_TARGET}/${AppRoutes.dashboard}`)

    await page.context().storageState({path: appConfig.ADMIN_SESSION_FILE_PATH})

    console.log('Мы залогинились')
});