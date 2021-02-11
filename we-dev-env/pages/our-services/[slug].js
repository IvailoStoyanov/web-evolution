import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";

import styles from "../../styles/projects/HeaderProjects.module.scss";

const Post = ({ contents }) => {
  const data = JSON.parse(contents);

  return (
    <>
      <Head>
        <title>{data.longTitle}</title>
        <meta name="description" content={data.titleDescription} />
      </Head>

      <header className={styles.Header}>
        <h1>{data.longTitle}</h1>
        <p>
          A small introduction to the project itself. Aenean vel scelerisque ex.
        </p>
      </header>

      <main>

        {/* <ProjectImagesGrid {...data}></ProjectImagesGrid> */}
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("data/projectsData");

  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".json", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const contents = fs
    .readFileSync(path.join("data/projectsData", slug + ".json"))
    .toString();

  return {
    props: {
      contents,
    },
  };
};

export default Post;
