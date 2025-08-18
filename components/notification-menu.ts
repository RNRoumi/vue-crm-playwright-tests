import {Page} from "@playwright/test";

export class NotificationMenu{
    protected readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }

    get notificationMenuPage() {
        return this.page.locator('#v-menu-v-4 > div')
    }
    get notificationsAmout() {
        return this.page.locator('span').filter({ hasText: /^(?:0[1-9]|[1-9]\d|100)$/})
    }
    get notificationMenuSelector(){
        return this.page.locator('#v-menu-v-4').getByRole('combobox').locator('div').filter({ hasText: 'All Notifications' }).nth(1)
    }
     async openNotificationMenuSelector() {
         await this.notificationMenuSelector.click()
    }

}