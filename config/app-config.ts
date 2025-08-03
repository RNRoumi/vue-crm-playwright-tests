interface ApplicationConfig {
    TEST_TARGET: string;
    ADMIN_SESSION_FILE_PATH: string;
}

export class AppConfig implements ApplicationConfig {
    TEST_TARGET: string;
    ADMIN_SESSION_FILE_PATH: string;
    constructor() {
        const adminSessionFilePath = <unknown>process.env.ADMIN_SESSION_FILE_PATH
        const testTarget = <unknown>process.env.TEST_TARGET

        if (!adminSessionFilePath || typeof adminSessionFilePath !== "string") {
            throw new Error('')
        }
        if (!testTarget || typeof testTarget !== "string") {
            throw new Error('')
        }

        this.TEST_TARGET = testTarget;
        this.ADMIN_SESSION_FILE_PATH = adminSessionFilePath;
    }


}