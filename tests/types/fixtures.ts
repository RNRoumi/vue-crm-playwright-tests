import {Page} from "@playwright/test";
import {AdminPage} from "../../pages/admin/AdminPage";
import {UserPage} from "../../pages/user/UserPage";


export type MyFixtures = {
    userPage: UserPage;
    adminPage: AdminPage;
}