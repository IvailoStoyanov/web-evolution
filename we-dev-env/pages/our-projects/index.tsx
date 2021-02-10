import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import TextSectionWithCta from "../../components/text-section-with-cta/TextSectionWithCta";
import WorkTeasers from "../../components/work-teasers/WorkTeasers";
// import WorkPageProps from "../../interfaces/interfaces";
import styles from "./ProjectPage.module.scss";

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
          <p>Our Work</p>
          <h1>Helping businesseses fulfill their full potential</h1>
        </div>
      </header>

      <main className={styles.content}>
        <WorkTeasers data={props.projectsData} showAll />
        <TextSectionWithCta
          grayBackground
          headline="Do you have a projecy in mind?"
          paragraphs={[
            "You can guide us through your problems and desired goals while we focus on the solution and create the best client experience.",
          ]}
          ctaButtonText="Contact us"
          ctaButtonLocation="/contact"
        />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync("data/projectsData");
  const projectsData = fileNames.map((fileName) => {
    return fs.readFileSync("data/projectsData/" + fileName, "utf-8");
  });

  return {
    props: {
      projectsData,
    },
  };
};
