import {Page} from "@playwright/test";

export class Header {
    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

///////
    get vueDemoMainPage() {
        return this.page.getByRole('link', {name: 'Vue Demo V3'})
    }

    openVueDemoMainPage = async () => await this.vueDemoMainPage.click()

//////
    get burgerButton() {
        return this.page.getByRole('button').first()
    }

    async openBurgerButton() {
        await this.burgerButton.click()
    }

//////
    get gitHubButton() {
        return this.page.getByRole('button').filter({has: this.page.locator('.v-icon__svg')})
    }

    async openGitHubButton() {
        await this.gitHubButton.click();
    }

//////
    get notificationsButton() {
        return this.page.getByRole('button').filter({has: this.page.locator('.icon-tabler.icon-tabler-bell')})
    }

    async openNotificationsButton() {
        await this.notificationsButton.click();
    }

//////
    get profileButton() {
        return this.page.getByRole('button').filter({has: this.page.locator('.icon-tabler.icon-tabler-settings')})
    }

    async clickProfileButton() {
        await this.profileButton.click();
    }

    get profileGreeting() {
        return this.page.getByText(/Good (Morning|Evening),\s*John Doe/);
    }

    get profileProjectCurrentRole() {
        return this.page.getByText(/Project (admin|user)/)
    }

    get profileSearch() {
        return this.page.getByPlaceholder('Search')
    }

/////
    get profileDndModeLabel() {
        return this.page.getByText('Start DND Mode')
    }

    get profileDndModeCheckbox() {
        return this.page.locator('#switch-v-162')
    }

    async checkDndModeCheckbox() {
        await this.profileDndModeCheckbox.click()
    }

    get profileAllowNotificationsLabel() {
        return this.page.getByText('Allow Notifications')
    }

    get profileAllowNotificationsCheckbox() {
        return this.page.locator('#switch-v-165')
    }

    async checkAllowNotificationsCheckbox() {
        await this.profileAllowNotificationsLabel.click()
    }

    get profileLogoutButton() {
        return this.page.getByText('Logout')
    }

    async profileLogoutClick(){
        await this.profileLogoutButton.click()
    }

/////
}