import { test as setup } from '../fixtures/pages.fixture';
import { chromium } from "@playwright/test";
import { fileExists } from "../../utils/exist.utils";
import {AppConfig} from "../../config/app-config";

setup('Получение Storage у AdminPage', async () => {
    // await adminPage.gotoLoginPage();
    // await adminPage.login();

    const appConfig = new AppConfig();

    //const adminSessionPath = process.env.ADMIN_SESSION_FILE_PATH

    if (!await fileExists(appConfig.ADMIN_SESSION_FILE_PATH)) return;

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage();

    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Email Address / Username' }).fill('admin@test.com');
    await page.getByRole('textbox', { name: 'Password Password' }).fill('password');
    await page.getByRole('checkbox').click()
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.waitForURL('http://localhost:5173/dashboard')

    await page.context().storageState({path: appConfig.ADMIN_SESSION_FILE_PATH})

    console.log('Мы залогинились')
});