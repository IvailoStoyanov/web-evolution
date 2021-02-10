import Head from "next/head";
import IntroHeader from "../components/intro-header/IntroHeader";
import TextSectionWithCta from "../components/text-section-with-cta/TextSectionWithCta";
import SurveyTeaser from "../components/survey-teaser/SurveyTeaser";
import WorkTeasers from "../components/work-teasers/WorkTeasers";
import fs from "fs";

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>WRITE A GOOD TITLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroHeader
        headline="We help others evolve in the digital world"
        imageUrl="olga-project/home-hand-wide.jpg"
        imageAlt="A hand holding up a mobile phone displaying one of the pages of our client's work on a faded green background."
        paragraph="While guiding you through the digital customer world we build amazng customer experiences and maintain a high quality standard."
        ctaButtonText="View our services"
      ></IntroHeader>
      <main>
        <TextSectionWithCta
          headline="Solving your customer's problems is what brings you in front"
          paragraphs={[
            "If you are looking to level up your digital game now is the time to do so. Lets make your business more effective and robust than ever before.",
            "If your game is on point and your business is thriving, now is the time to make the next big step and deliver more value to your customers through long-term technical decisions.",
          ]}
          ctaButtonText="View our services"
          ctaButtonLocation="/our-services"
        />
        <SurveyTeaser
          headline="Let’s check your digital effectiveness"
          paragraph="No matter the size of the business there is allways room to improve. Looking at your business data we can highlighting potential opportunities to grow."
          ctaButtonText="Request a survey"
        />
        <WorkTeasers data={props.projectsData} headline="Our work" />
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  const fileNames = fs.readdirSync("data/projectsData");
  const projectsData = fileNames.map((fileName) => {
    return fs.readFileSync("data/projectsData/" + fileName, "utf-8");
  });

  return {
    props: {
      projectsData,
    },
  };
};
