import {Page} from "@playwright/test";

export class Sidebar {
    protected readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
///////
    get sidebarLocator(){
        return this.page.locator('#app > div > div > div > nav')
    }
    get dashboardLink(){
        return this.page.getByRole('link', { name: 'Dashboard' });
    }
    async openDashboardLink(){
        await this.dashboardLink.click()
    }
///////
    get customerLink(){
        return this.page.getByRole('link', { name: 'Customer' });
    }
    async openCustomerLink(){
        await this.customerLink.click();
    }
///////
    get productsLink() {
        return this.page.getByRole('link', { name: 'Product' })
    }
    async openProductsLink(){
        await this.productsLink.click();
    }

///////
    get blogLink(){
        return this.page.getByRole('link', { name: 'Blog' })
    }
    async gotoBlogLink(){
        await this.blogLink.click();
    }
///////
    get orderLink(){
        return this.page.getByRole('link', { name: 'Order' })
    }

    async gotoOrderLink(){
        await this.orderLink.click();
    }

}