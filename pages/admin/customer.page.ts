import {BasePage} from "../base.page";
import {Page} from "@playwright/test";
import appConfig from "../../config/app-config";
import {AppRoutes} from "../../config/app-routes";
import {FillNewCustomerForm, IUserStructure, MembershipType} from "../types/pages-types";


export class CustomerPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async openNewCustomerPage (){
        await this.page.goto(`${appConfig.TEST_TARGET}/${AppRoutes.customer}/${AppRoutes.newCustomer}`)
        await this.page.waitForURL(`${appConfig.TEST_TARGET}/${AppRoutes.customer}/${AppRoutes.newCustomer}`)
    }
    get newCustomerButton() {
        return this.page.getByRole('button', { name: 'New' })
    }

    async clickNewCustomerButton() {
        await this.newCustomerButton.click();
    }

    get firstNameField() {
        return this.page.getByRole('textbox', {name: 'First name First name'})
    }

    async fillNameField(value: string) {
        await this.firstNameField.fill(value)
    }

    get lastNameField() {
        return this.page.getByRole('textbox', {name: 'Last name Last name'})
    }

    get emailField() {
        return this.page.getByRole('textbox', {name: 'E-mail E-mail'})
    }

    async fillLastNameField(value: string) {
        await this.lastNameField.fill(value)
    }

    async fillEmailField(value: string) {
        await this.emailField.fill(value)
    }

    get phoneField() {
        return this.page.getByRole('textbox', {name: 'Phone Phone'})
    }

    async fillPhoneField(value: string) {
        await this.phoneField.fill(value)
    }

    get mobileField() {
        return this.page.getByRole('textbox', {name: 'Mobile Mobile'})
    }

    async fillMobileField(value: string) {
        await this.mobileField.fill(value)
    }

    get rewardsField() {
        return this.page.getByRole('spinbutton', {name: 'Rewards Rewards'})
    }

    async fillRewardsField(value: string) {
        await this.rewardsField.fill(value)
    }

    get membershipField() {
        return this.page.getByRole('combobox')
    }


    clickMembershipField = async (value: MembershipType) => {
         await this.membershipField.click();
         await this.page.getByText(value).click()
         // await new Promise(()=> {
         //     if (value === 'standard') {
         //         return this.page.getByText('standard').click()
         //     }
         //     if (value === 'vip') {
         //         return this.page.getByText('vip').click()
         //     }
         // })
    }

    get submitButton() {
        return this.page.getByRole('button', {name: 'Submit'})
    }

    async clickSubmitButton() {
        await this.submitButton.click()
    }
    fillNewCustomerForm: FillNewCustomerForm = async (user: Omit<IUserStructure, 'membership'>, memberType: MembershipType ) => {
        await this.fillNameField(user.userName);
        await this.fillLastNameField(user.lastName);
        await this.fillEmailField(user.eMail);
        await this.fillPhoneField(user.phone);
        await this.fillMobileField(user.mobile);
        await this.fillRewardsField(user.rewards);
        await this.clickMembershipField(memberType)
    }
}