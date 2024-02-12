import fs from "fs";

export const readData = (directory: string, slug?: string) => {
    const fileNames = fs.readdirSync(directory);

    if (slug) {
        const data = fs.readFileSync(`${directory}/` + `${slug}.json`, "utf-8");
        return JSON.parse(data);
    }
    const data = fileNames.map((fileName) => JSON.parse(fs.readFileSync(`${directory}/` + fileName, "utf-8")));

    return data;
};