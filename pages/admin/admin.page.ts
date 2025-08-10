import {expect, Page} from "@playwright/test";
import {BasePage} from "../base.page";
import appConfig, {AppConfig} from "../../config/app-config";
import {AppRoutes} from "../../config/app-routes";
import {Sidebar} from "../../components/sidebar";
import {Header} from "../../components/header";

export class AdminPage extends BasePage{
    public readonly sidebar: Sidebar
    public readonly header: Header
    constructor(page: Page) {
        super(page);
        this.sidebar = new Sidebar(page)
        this.header = new Header(page)
    }

    // async gotoLoginPage() {
    //     await this.page.goto(`/${AppRoutes.login}`);
    // }

    async login(){
        await this.page.getByRole('textbox', { name: 'Email Address / Username' }).fill('admin@test.com');
        await this.page.getByRole('textbox', { name: 'Password Password' }).fill('password');
        await this.page.getByRole('checkbox').click()
        await this.page.getByRole('button', { name: 'Sign In', exact: true }).click();

        await this.page.waitForURL(`${appConfig.TEST_TARGET}/${AppRoutes.dashboard}`)
    }
}