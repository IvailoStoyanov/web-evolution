import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import CtaTeaser from "../../components/cta-teaser/CtaTeaser";
import styles from "./Project.module.scss";

const Post = ({ contents }) => {
  const data = JSON.parse(contents);

  return (
    <>
      <Head>
        <title>{data.projectPageInfo.longTitle} | Web Evolution</title>
        <meta content={`${data.title} | Web Evolution`} property="og:title" />
        <meta name="description" content={data.headDescription} />
        <meta property="og:description" content={data.headDescription} />
        <meta
          content="https://web-evolution.co/images/other/share.jpg"
          property="og:image"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo/we-logo.svg" />
      </Head>

      <header className={styles.header}>
        <p>
          {data.services} - {data.projectPageInfo.date}
        </p>
        <h1>{data.projectPageInfo.longTitle}</h1>
        <p className={styles.header_question}>
          {data.projectPageInfo.solvingQuestion}
        </p>

        <div className={styles.header_imageWrapper}>
          <picture>
            <source
              srcSet={require(`../../public/images/our-work-images/${data.img}?webp`)}
              type="image/webp"
            />
            <source
              srcSet={require(`../../public/images/our-work-images/${data.img}`)}
              type="image/jpg"
            />
            <img
              src={require(`../../public/images/our-work-images/${data.img}`)}
              alt={data.alt}
            />
          </picture>
          <div className={styles.heroTextWrapper}>
            <div>
              <h3>Client</h3>
              <p>{data.projectPageInfo.client}</p>
            </div>
            <div>
              <h3>Services</h3>
              <p>{data.services}</p>
            </div>
            <a
              className="button button___transparent button___small"
              href={data.projectPageInfo.projectUrl}
            >
              <span className="button_text">Visit the site</span>
              <span className="button_circle" />
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.testimonialWrapper}>
          <div className={styles.testimonialWrapper_heading}>
            <h2>Testimonial</h2>
            <div className={styles.testimonialWrapper_imageWrapper}>
              <picture>
                <source
                  srcSet={require(`../../public/images/olga-project/${data.projectPageInfo.clientImage}?webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`../../public/images/olga-project/${data.projectPageInfo.clientImage}`)}
                  type="image/jpg"
                />
                <img
                  src={require(`../../public/images/olga-project/${data.projectPageInfo.clientImage}`)}
                  alt={data.alt}
                  width="40px"
                  height="50px"
                />
              </picture>
            </div>
          </div>
          <p>{data.projectPageInfo.clientTestimonial}</p>
        </div>
        <div className={styles.contentWrapper}>
          <h2>The brief</h2>
          {data.projectPageInfo.projectBrief.map((post, index) => {
            return <p key={index}>{post}</p>;
          })}
          <h2>The approach</h2>
          {data.projectPageInfo.projectApproach.map((post, index) => {
            return <p key={index}>{post}</p>;
          })}
          <div className={styles.projectScreens}>
            {data.projectPageInfo.projectIamgesUrls.map((image, index) => {
              return (
                <picture key={index}>
                  <source
                    srcSet={require(`../../public/images/olga-project/${image}?webp`)}
                    type="image/webp"
                  />
                  <source
                    srcSet={require(`../../public/images/olga-project/${image}`)}
                    type="image/jpg"
                  />
                  <img
                    src={require(`../../public/images/olga-project/${image}`)}
                    alt={data.alt}
                  />
                </picture>
              );
            })}
          </div>
        </div>
        <CtaTeaser
          headline="Focus on creating the right product for the right user."
          paragraph="It is not just about developing the website. It is about finding the right solution to the problem and solving it with the most optimal amount of resourcess and effort. "
          ctaButtonText="View our services"
          ctaUrl="/our-services"
          grayBackground
        />
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

// export const getStaticProps = async ({ params: { slug } }) => {
//   const contents = fs
//     .readFileSync(path.join("data/projectsData", slug + ".json"))
//     .toString();

//   return {
//     props: {
//       contents,
//     },
//   };
// };

export default Post;
