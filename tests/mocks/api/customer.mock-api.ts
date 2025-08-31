import {Page} from "@playwright/test";
import appConfig from "../../../config/app-config";
import {AppRoutes} from "../../../config/app-routes";
import {userBuilder} from "../../../pages/admin/customer-builder";

//Фейковый URL на который тригеримся для перехвата
export const reqCreateUserUrl = `${appConfig.TEST_TARGET}/${AppRoutes.customer}/__mock__/seed`


//Создаем запрос на фейковую ручку
export async function reqCreateUser(page: Page) {

    //Подключаем функцию userBuilder, для сбора данных со страницы перед отправкой fetch запроса
    const currentUser = await userBuilder(page)
    
    //Отправляем фетч запрос
    await page.evaluate(async ({reqCreateUserUrl, currentUser}) => {
        await fetch(reqCreateUserUrl,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        } )
    }, {reqCreateUserUrl, currentUser})
}

