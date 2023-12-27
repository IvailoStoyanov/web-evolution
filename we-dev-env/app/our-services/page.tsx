import { Metadata } from "next";
import ServiceTeasers from "@/components/service-teasers/ServiceTeasers";
import WorkTeasers from "@/components/work-teasers/WorkTeasers";
import styles from "./ServicesPage.module.scss";
import { readData } from "@/utils/utils";

export const metadata: Metadata = {
  title: 'Services: See how we can evolve your business in the digital world',
  description: 'Through a thorough evaluation and future-poroof solutions approach we help businesses solve problems they are aware of and find and fix the rest.',
  openGraph: {
    title: 'Services: See how we can evolve your business in the digital world',
    description: 'Through a thorough evaluation and future-poroof solutions approach we help businesses solve problems they are aware of and find and fix the rest.',
  },
};

const generateStaticParams = () => {
  const projectsData = readData("data/projectsData");
  const servicesData = readData("data/servicesData");

  return {
      projectsData,
      servicesData,
  };
};

const Projects = () => {

  const {projectsData, servicesData} = generateStaticParams();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_textContainer}>
          <p>Our services</p>
          <h1>What can we offer to help you evolve your business?</h1>
        </div>
      </header>
      <main className={styles.content}>
        <ServiceTeasers data={servicesData} />
        <WorkTeasers data={projectsData} headline="Our work"/>
      </main>
    </>
  );
}

export default Projects;


