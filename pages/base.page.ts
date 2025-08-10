import {Page} from "@playwright/test";
import { AppRoutes } from "../config/app-routes";
import appConfig from "../config/app-config";
import {json} from "stream/consumers";

export abstract class BasePage {
    protected readonly page: Page;
    protected constructor(page: Page) {
        this.page = page;
    }

    async gotoMainPage () {
        await this.page.goto(`${appConfig.TEST_TARGET}`)
        await this.page.waitForURL(`${appConfig.TEST_TARGET}`)
    }
    async gotoLoginPage () {
        await this.page.goto(`/${AppRoutes.login}`);
    }

    async gotoDashboardPage (){
        await this.page.goto(`${AppRoutes.dashboard}`)
        //${AppRoutes.dashboard}
    }

    async getSessionState(){
        await this.page.context().storageState();
    }
}