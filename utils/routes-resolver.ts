import {appRoutes} from "../config/app-routes";
import {AppConfig} from "../config/app-config";

const appConfig = new AppConfig()

interface Urls {
    login: string,
    dashboard: string
}

const urls: Urls = {
    login: `${appConfig.TEST_TARGET}${appRoutes.login}`,
    dashboard: `${appConfig.TEST_TARGET}${appRoutes.dashboard}`
}