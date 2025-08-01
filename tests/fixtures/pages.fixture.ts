import {test as base} from '@playwright/test';
import {MyFixtures} from "../types/fixtures";
import {AdminPage} from "../../pages/admin/AdminPage";
import {UserPage} from "../../pages/user/UserPage";


export const test = base.extend<MyFixtures>({
     adminPage: async ({browser}, use ) => {
         const context = await browser.newContext() //{storageState: 'vue-crm-playwright-tests/.auth/admin.json'}
         const page = await context.newPage()
         const adminPage = new AdminPage(page)
         await use(adminPage);
         await context.close();
     },
    userPage: async ({browser}, use) => {
         const context = await browser.newContext(); //{storageState: 'vue-crm-playwright-tests/.auth/user.json'}
         const page = await context.newPage();
         const userPage =   new UserPage(page);
         await use(userPage);
         await context.close();
    }
})





