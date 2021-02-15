import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";


const Post = ({ contents }) => {
  const data = JSON.parse(contents);

  return (
    <>
     {contents}
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
