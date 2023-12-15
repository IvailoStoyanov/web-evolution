import fs from "fs";

const readData = (directory: string, slug: string) => {
    const fileNames = fs.readdirSync(directory);

    return slug ? fs.readFileSync(`${directory}/` + `${slug}.json`, "utf-8")
        : fileNames.map((fileName) => fs.readFileSync(`${directory}/` + fileName, "utf-8"));
};

const generateStaticParams = (slug: string) => {
    //keep in mind this is single becauase it wants ony the slug
    const projectData = readData("data/projectsData", slug);
  
    return JSON.parse(projectData as string);
  };

  // ToDo: Migrate to helper functiond
const generateStaticParamsV2 = () => {
    const projectsData = readData("data/projectsData");
    const servicesData = readData("data/servicesData");
  
    return {
        projectsData,
        servicesData,
    };
  };

  const generateStaticParamsV3 = (slug: string) => {
    //keep in mind this is single becauase it wants ony the slug
    const projectData = readData("data/projectsData", slug);
  
    return JSON.parse(projectData as string);
  };