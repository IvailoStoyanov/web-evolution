import Head from "next/head";
import fs from "fs";
import TextSectionWithCta from "../../components/text-section-with-cta/TextSectionWithCta";
import WorkTeasers from "../../components/work-teasers/WorkTeasers";
import slugsInterface from "../../Interfaces/Interfaces";
import styles from "./ProjectPage.module.scss";

export default function Projects(props: slugsInterface) {
  const { projectsData } = props;

  return (
    <>
      <Head>
        <title>
          Clients & Projects: see future-proof solutions for our past clients
        </title>
        <meta
          content="Clients & Projects: see future-proof solutions for our past clients"
          property="og:title"
        />
        <meta
          name="description"
          content="We work with clients from diverse markets - check out the solutions for their problems"
        />
        <meta
          property="og:description"
          content="We work with clients from diverse markets - check out the solutions for their problems"
        />
        <meta
          content="https://web-evolution.co/images/other/share.jpg"
          property="og:image"
        />
        <meta property="og:type" content="website" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header_textContainer}>
          <p>Our work</p>
          <h1>Helping businesseses fulfill their full potential</h1>
        </div>
      </header>

      <main className={styles.content}>
        <WorkTeasers data={projectsData} showAll />
        <TextSectionWithCta
          grayBackground
          headline="Do you have a project in mind?"
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

// export const getStaticProps = async () => {
//   const fileNames = fs.readdirSync("data/projectsData");
//   const projectsData = fileNames.map((fileName) => {
//     return fs.readFileSync("data/projectsData/" + fileName, "utf-8");
//   });

//   return {
//     props: {
//       projectsData,
//     },
//   };
// };
