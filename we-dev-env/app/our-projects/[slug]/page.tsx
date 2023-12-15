import { Metadata } from "next";
import React from "react";
import fs from "fs";
import CtaTeaser from "@/components/cta-teaser/CtaTeaser";
import styles from "./Project.module.scss";
import Image from "next/image";
import { SlugPageProps } from "@/Interfaces/Interfaces";

// MIGRATE
const readData = (directory: string, slug: string) => {
  const fileNames = fs.readdirSync(directory);

  return slug ? fs.readFileSync(`${directory}/` + `${slug}.json`, "utf-8")
    : fileNames.map((fileName) => fs.readFileSync(`${directory}/` + fileName, "utf-8"));
};

// ToDo: Migrate to helper function
// readStaticParams instead of generateStaticParams ?
const generateStaticParams = (slug: string) => {
  //keep in mind this is single becauase it wants ony the slug
  const projectData = readData("data/projectsData", slug);

  return JSON.parse(projectData as string);
};

// Migrate to helper get Metadata
export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  try {
    const { slug } = params;
    const project = generateStaticParams(slug);
    const projectMetaTitle = project.title;
    const projectMetaDescription = project.headDescription;

    !project && {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
    return {
      title: projectMetaTitle,
      description: projectMetaDescription,
    }
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist."
    }
  }
}

const Project = async ({ params: { slug } }: SlugPageProps) => {
  const projectData = generateStaticParams(slug as string);

  return (
    <>
      <header className={styles.header}>
        <p>
          {projectData.services} - {projectData.projectPageInfo.date}
        </p>
        <h1>{projectData.projectPageInfo.longTitle}</h1>
        <p className={styles.header_question}>
          {projectData.projectPageInfo.solvingQuestion}
        </p>

        <div className={styles.header_imageWrapper}>
          <picture>
            {/* <source
              srcSet={require(`../../public/images/our-work-images/${projectData.img}?webp`)}
              type="image/webp"
            />
            <source
              srcSet={require(`../../public/images/our-work-images/${projectData.img}`)}
              type="image/jpg"
            /> */}
            <Image
              src={`/images/our-work-images/${projectData.img}`}
              alt={projectData.alt}
              width={30}
              height={30}
            />
          </picture>
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
                  <picture>
                    {/* <source
                  srcSet={require(`../../public/images/olga-project/${data.projectPageInfo.clientImage}?webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`../../public/images/olga-project/${data.projectPageInfo.clientImage}`)}
                  type="image/jpg"
                /> */}
                    <Image
                      src={`/images/olga-project/${projectData.projectPageInfo.clientImage}`}
                      alt={projectData.alt}
                      width={40}
                      height={50}
                    />
                  </picture>
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
            {projectData.projectPageInfo.projectIamgesUrls.map((image: string, index: number) => {
              return (
                <picture key={index}>
                  {/* <source
                    srcSet={require(`../../public/images/olga-project/${image}?webp`)}
                    type="image/webp"
                  />
                  <source
                    srcSet={require(`../../public/images/olga-project/${image}`)}
                    type="image/jpg"
                  /> */}
                  <Image
                    src={`/images/${slug}/${image}`}
                    alt={projectData.alt}
                    width={700}
                    height={800}
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

export default Project;
