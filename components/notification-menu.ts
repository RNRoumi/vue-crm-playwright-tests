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

    get allNotificationsInMenu(){
        return this.page.locator('#v-menu-v-4').getByRole('listbox').locator('.v-list-item.v-list-item--link.v-theme--PurpleTheme.v-list-item--density-default.v-list-item--three-line.rounded-0.v-list-item--variant-text.no-spacer')
    }


    get viewAllButton () {
        return this.page.locator('.pa-2.text-center .v-btn.v-theme--PurpleTheme.text-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-text')
    }

    async openViewAllButton (){
        await this.viewAllButton.click()
    }


     async openNotificationMenuSelector() {
         await this.notificationMenuSelector.click()
    }


}