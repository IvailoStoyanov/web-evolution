import { Metadata } from "next";;
import TextSectionWithCta from "@/components/text-section-with-cta/TextSectionWithCta";
import WorkTeasers from "@/components/work-teasers/WorkTeasers";
import styles from "./ProjectPage.module.scss";
import { readData } from "@/utils/utils";

export const metadata: Metadata = {
  title: 'Clients & Projects: see future-proof solutions for our past clients',
  description: 'Need to tell us about your chalanges? We would love to hear from you. Find all relevant contact information here or fill out a form.',
  openGraph: {
    title: 'Clients & Projects: see future-proof solutions for our past clients',
    description: 'Need to tell us about your chalanges? We would love to hear from you. Find all relevant contact information here or fill out a form.',
  },
};

const generateStaticParams = () => {
  const projectsData = readData("data/projectsData");

  return {
    projectsData,
  };
};

export default function Projects() {
  const { projectsData } = generateStaticParams();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_textContainer}>
          <p>Our work</p>
          <h1>Helping businesses fulfill their full potential</h1>
        </div>
      </header>

      <main className={styles.content}>
        <WorkTeasers data={projectsData} />
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
