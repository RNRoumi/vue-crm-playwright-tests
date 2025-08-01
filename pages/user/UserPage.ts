import {Page} from "@playwright/test"

export class UserPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }
}