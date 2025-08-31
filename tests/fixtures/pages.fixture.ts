import {test as base} from '@playwright/test';
import {MyFixtures} from "../types/fixtures";
import {installScenarioForMock} from "../mocks";


export const test = base.extend<MyFixtures>({
    mockProfile: ["happy", {option: true}],
    adminContext: async ({browser, mockProfile}, use) => {
        const context = await browser.newContext() //{storageState: 'vue-crm-playwright-tests/.auth/admin.json'}
        const page = await context.newPage()
        await installScenarioForMock(page, mockProfile)
        await use(page);
        await context.close();
    },
    userContext: async ({browser, mockProfile}, use) => {
        const context = await browser.newContext(); //{storageState: 'vue-crm-playwright-tests/.auth/user.json'}
        const page = await context.newPage();
        await installScenarioForMock(page, mockProfile)
        await use(page);
        await context.close();
    }
})





