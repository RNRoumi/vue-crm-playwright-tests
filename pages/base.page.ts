import {Page} from "@playwright/test";
import {AppRoutes} from "../config/app-routes";
import appConfig from "../config/app-config";


export abstract class BasePage {
    protected readonly page: Page;
     locator: Page["locator"];
     evaluate: Page["evaluate"]


    protected constructor(page: Page) {
        this.page = page;
            //Забираем сигнатуру стандартногор Локатора и проксируем, для переиспользования
        this.locator = (...args) => this.page.locator(...args);
            //Забираем сигнатуру стандартногор Evaluate и проксируем, для переиспользования
        this.evaluate = this.page.evaluate.bind(this.page)
    }


    async gotoMainPage() {
        await this.page.goto(`${appConfig.TEST_TARGET}`)
        await this.page.waitForURL(`${appConfig.TEST_TARGET}`)
    }

    async gotoLoginPage() {
        await this.page.goto(`/${AppRoutes.login}`);
    }

    async gotoDashboardPage() {
        await this.page.goto(`${AppRoutes.dashboard}`)
        //${AppRoutes.dashboard}
    }

    async getSessionState() {
        await this.page.context().storageState();
    }
}