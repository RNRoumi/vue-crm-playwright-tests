import {expect, Page} from "@playwright/test";


export class AdminPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoLoginPage() {
        await this.page.goto('/login');
    }

    async login(){

        //await expect(this.page.locator('.icon-tabler.icon-tabler-settings')).toBeVisible()
        //await this.page.locator('.icon-tabler.icon-tabler-settings').click()
        //await this.page.getByText('Logout').click();

        await this.page.getByRole('textbox', { name: 'Email Address / Username' }).fill('admin@test.com');
        await this.page.getByRole('textbox', { name: 'Password Password' }).fill('password');
        await this.page.getByRole('checkbox').click()
        await this.page.getByRole('button', { name: 'Sign In', exact: true }).click();
        await this.page.waitForURL('http://localhost:5173/dashboard')
    }



}