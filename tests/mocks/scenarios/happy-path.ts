import {Page} from "@playwright/test";
import {registerCustomerHandlers} from "../interceptor-handlers/customers.handlers.";

// export async function happy(page: Page, context: Context){
// }
export async function happy(page: Page){
    await registerCustomerHandlers(page);
    // registerProductHandlers(page, ctx.role);
    // registerOrderHandlers(page, ctx.role);
    // registerDashboardHandlers(page);
    // registerNotificationHandlers(page);
}

