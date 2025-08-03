import * as fs from "fs";

export const fileExists = async (path: string) => {
    try {
        await fs.promises.stat(path)
        return true
    } catch {
        return false
    }
};
