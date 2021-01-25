import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";

const Post = ({ contents }) => {
  const data = JSON.parse(contents);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.titleDescription} />
      </Head>

      <header>
        <h1>{data.title}</h1>
        <p>
          A small introduction to the project itself. Aenean vel scelerisque ex.
        </p>
        <Image src={data.img} alt="Picture of the author" layout="fill"></Image>
      </header>

      <main>
        <TextSection>
          <h2>Description</h2>
          <p>{data.longDescription}</p>
        </TextSection>

        {/* <ProjectImagesGrid {...data}></ProjectImagesGrid> */}
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("projectsData");

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
    .readFileSync(path.join("projectsData", slug + ".json"))
    .toString();

  return {
    props: {
      contents,
    },
  };
};

export default Post;
