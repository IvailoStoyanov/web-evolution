import Head from "next/head";
import fs from "fs";
import ServiceTeasers from "../../components/service-teasers/ServiceTeasers";
import WorkTeasers from "../../components/work-teasers/WorkTeasers";
import slugsInterface from "../../Interfaces/Interfaces";
import styles from "./ServicesPage.module.scss";


//Migrate to helpr function
const readData = (directory: string) => {
  const fileNames = fs.readdirSync(directory);

  return fileNames.map((fileName: string) =>  fs.readFileSync(`${directory}/` + fileName, "utf-8"))
};

// ToDo: Migrate to helper function
const generateStaticParams = () => {
  const projectsData = readData("data/projectsData");
  const servicesData = readData("data/servicesData");

  return {
      projectsData,
      servicesData,
  };
};

const Projects = () => {

  const {projectsData, servicesData} = generateStaticParams();

  return (
    <>
      {/* <Head>
        <title>
          Services: See how we can evolve your business in the digital world
        </title>
        <meta
          content="Services: See how we can evolve your business in the digital world"
          property="og:title"
        />
        <meta
          name="description"
          content="Through a thorough evaluation and future-poroof solutions approach we help businesses solve problems they are aware of and find and fix the rest."
        />
        <meta
          property="og:description"
          content="Through a thorough evaluation and future-poroof solutions approach we help businesses solve problems they are aware of and find and fix the rest."
        />
        <meta
          content="https://web-evolution.co/images/other/share.jpg"
          property="og:image"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo/we-logo.svg" />
      </Head> */}

      <header className={styles.header}>
        <div className={styles.header_textContainer}>
          <p>Our services</p>
          <h1>What can we offer to help you evolve your business?</h1>
        </div>
      </header>

      <main className={styles.content}>
        <ServiceTeasers data={servicesData} />
        <WorkTeasers data={projectsData} headline="Our work"/>
      </main>
    </>
  );
}

export default Projects;


