
import React from "react";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { SlugPageProps, WorkInterface } from "@/Interfaces/Interfaces";
import ResponsiveFixedImageWrapper from "@/components/ResponsiveFixedImagesWrapper";
import CtaTeaser from "@/components/cta-teaser/CtaTeaser";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/footer/Footer";
import styles from "./Project.module.scss";

const Project = ({ contents }: { contents: WorkInterface }) => {
  const projectData = JSON.parse(contents.toString());
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${projectData.projectPageInfo.longTitle} | Web Evolution`}</title>
        <meta content={`${projectData.title} | Web Evolution`} property="og:title" />
        <meta name="description" content={projectData.headDescription} />
        <meta property="og:description" content={projectData.headDescription} />
        <meta
          content="https://web-evolution.co/images/other/share.jpg"
          property="og:image"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo/we-logo.svg" />
      </Head>
      <header className={styles.header}>
        <p>
          {projectData.services} - {projectData.projectPageInfo.date}
        </p>
        <h1>{projectData.projectPageInfo.longTitle}</h1>
        <p className={styles.header_question}>
          {projectData.projectPageInfo.solvingQuestion}
        </p>
        <div className={styles.header_ctaImageWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={`/images/our-work-images/${projectData.img}`}
              alt={projectData.alt}
              fill
            />
          </div>
          <div className={styles.heroTextWrapper}>
            <div>
              <h3>Client</h3>
              <p>{projectData.projectPageInfo.client}</p>
            </div>
            <div>
              <h3>Services</h3>
              <p>{projectData.services}</p>
            </div>
            <a
              className="button button___transparent button___small"
              href={projectData.projectPageInfo.projectUrl}
            >
              <span className="button_text">Visit the site</span>
              <span className="button_circle" />
            </a>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {projectData.projectPageInfo.clientTestimonial &&
          <>
            <div className={styles.testimonialWrapper}>
              <div className={styles.testimonialWrapper_heading}>
                <h2>Testimonial</h2>
                <div className={styles.testimonialWrapper_imageWrapper}>
                  <Image
                    src={`/images/olga-portfolio-project/${projectData.projectPageInfo.clientImage}`}
                    alt={projectData.alt}
                    width={40}
                    height={50}
                  />
                </div>
              </div>
              <p>{projectData.projectPageInfo.clientTestimonial}</p>
            </div>
          </>
        }
        <div className={styles.contentWrapper}>
          <h2>The brief</h2>
          {projectData.projectPageInfo.projectBrief.map((post: string, index: number) => {
            return <p key={index}>{post}</p>;
          })}
          <h2>The approach</h2>
          {projectData.projectPageInfo.projectApproach.map((post: string, index: number) => {
            return <p key={index}>{post}</p>;
          })}
          <div className={styles.projectScreens}>
            <ResponsiveFixedImageWrapper slug={router.query.slug} />
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

export const getStaticProps = async ({ params: { slug } }: SlugPageProps) => {
  const contents = fs.readFileSync(path.join("data/projectsData", slug + ".json")).toString();

  return {
    props: {
      contents,
    },
  };
};

export default Project;