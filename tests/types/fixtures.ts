import {Scenarios} from "../mocks";
import {Page} from "@playwright/test";


export type MyFixtures = {
    userContext: Page;
    adminContext: Page;
    mockProfile: Scenarios
}