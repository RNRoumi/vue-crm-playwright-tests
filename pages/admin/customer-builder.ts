import {Page} from "@playwright/test";
import {IUserStructure, MembershipType} from "../types/pages-types";


const toMembershipType = (str: string): MembershipType  => {
   if (str === 'vip' || str === 'standard') return str
    throw new Error(`Ошибка в типе принимаемого значения в функцию Тайп-Гард${str}, возможно добавился новый селектор`)
}
export async function userBuilder(page: Page): Promise<IUserStructure>{
    const rawSelector = await page.locator('.v-select__selection span').innerText()
    console.log(JSON.stringify(rawSelector))
    const rawToValidatedSel = rawSelector.trim()
    const field =  async (index: number): Promise<string> => {
        const rawVal = await page.locator('.v-field__field input').nth(index).inputValue()
        return rawVal.trim();
    }
    const [userName, lastName, eMail, phone, mobile, rewards] = await Promise.all([
        field(0),
        field(1),
        field(2),
        field(3),
        field(4),
        field(5),
    ])
    return {
        userName,
        lastName,
        eMail,
        phone,
        mobile,
        rewards,
        membership: toMembershipType(rawToValidatedSel)
    }
}