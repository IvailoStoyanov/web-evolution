import Head from "next/head";
import Link from "next/link";
import fs from "fs";
// import WorkDisplayItem from "../../components/work-display-item/WorkDisplayItem";
// import WorkPageProps from "../../interfaces/interfaces";
import styles from "./OurWork.module.scss";

import TextSectionWithCta from "../../components/text-section-with-cta/TextSectionWithCta";

// export default function Projects(props: WorkPageProps) {
export default function Projects(props: any) {
  const { projectsData } = props;

  return (
    <>
      <Head>
        <title>Work</title>
        <meta
          name="description"
          content="Olga Golant Work - Condenced view upon my Business building, Residential building and Sports center projects with a brief description to each including illustrations"
        />
      </Head>

      <header className={styles.Header}>
        <div className={styles.Header_TextContainer}>
          <h1>Our Work</h1>
        </div>
      </header>

      <main className={styles.Content}>
        {projectsData.map((post: string) => {
          const data = JSON.parse(post);

          return <div key={post}>{post}</div>;
        })}

        <TextSectionWithCta
          headline="Do you have a projecy in mind?"
          paragraphs={[
            "You can guide us through your problems and desired goals while we focus on the solution and create the best client experience.",
          ]}
          ctaButtonText="CTA BUTTon"
          ctaButtonLocation="/"
          grayBackground
        ></TextSectionWithCta>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync("our-work-data");
  const projectsData = fileNames.map((fileName) => {
    return fs.readFileSync("our-work-data/" + fileName, "utf-8");
  });

  return {
    props: {
      projectsData,
    },
  };
};
