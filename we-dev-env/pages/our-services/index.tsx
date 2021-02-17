import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import ServiceTeasers from "../../components/service-teasers/ServiceTeasers";
import WorkTeasers from "../../components/work-teasers/WorkTeasers";
// import WorkPageProps from "../../interfaces/interfaces";
import styles from "./ServicesPage.module.scss";

export default function Projects(props: any) {
  const { projectsData } = props;

  return (
    <>
      <Head>
        <title>WRITE A GOOD TITLE</title>
        <meta name="description" content="WRITE A GOOD DESCRIPTION" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header_textContainer}>
          <p>Our services</p>
          <h1>What can we offer to help you evolve your business?</h1>
        </div>
      </header>

      <main className={styles.content}>
        <ServiceTeasers
          data={props.servicesData}
        />
        <WorkTeasers data={projectsData} headline="Our work" />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync("data/projectsData");
  const projectsData = fileNames.map((fileName) => {
    return fs.readFileSync("data/projectsData/" + fileName, "utf-8");
  });

  const servicesFileNames = fs.readdirSync("data/servicesData");
  const servicesData = servicesFileNames.map((fileName) => {
    return fs.readFileSync("data/servicesData/" + fileName, "utf-8");
  });

  return {
    props: {
      projectsData,
      servicesData
    },
  };
};
