
import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import { MetadataProjectProps, WorkInterface } from "@/Interfaces/Interfaces";
import ResponsiveFixedImageWrapper from "@/components/ResponsiveFixedImagesWrapper";
import CtaTeaser from "@/components/cta-teaser/CtaTeaser";
import styles from "./Project.module.scss";
import { Metadata } from "next";

const getProjectData = (project: string) => {
  return JSON.parse(
    fs.readFileSync(
      path.join("data/projectsData", project + ".json")
    ).toString()
  );
}

export async function generateStaticParams() {
  const projects = await fs.readdirSync("data/projectsData");

  return projects.map((projectName: string) => ({
    slug: projectName,
  }))
}

export async function generateMetadata({ params }: MetadataProjectProps): Promise<Metadata> {
  const { project } = params;
  const projectData: WorkInterface = getProjectData(project);

  return {
    title: `${projectData.title} | Web Evolution`,
    description: projectData.headDescription,
    openGraph: {
      description: projectData.headDescription,
      images: ['https://web-evolution.co/images/other/share.jpg'],
      type: 'website'
    }
  }
}

const Project = ({ params }: { params: { project: string } }) => {
  const { project } = params;

  const projectData = getProjectData(project);

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
            <ResponsiveFixedImageWrapper slug={project} />
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