import IntroHeader from "@/components/intro-header/IntroHeader";
import TextSectionWithCta from "@/components/text-section-with-cta/TextSectionWithCta";
import CtaTeaser from "@/components/cta-teaser/CtaTeaser";
import WorkTeasers from "@/components/work-teasers/WorkTeasers";
import { readData } from "@/utils/utils";

const generateStaticParams = () => {
  const projectsData = readData("data/projectsData");

  return {
    projectsData,
  };

};

export const Home = () => {
  const { projectsData } = generateStaticParams();

  return (
    <>
      <IntroHeader
        headline="We help others evolve in the digital world"
        imageUrl="olga-portfolio-project/home-hand-wide.jpg"
        imageAlt="A hand holding up a mobile phone displaying one of the pages of our client's work on a faded green background."
        paragraph="While guiding you through the digital customer world we build amazing customer experiences and maintain a high quality standard."
        ctaButtonText="View our services"
      />
      <main id="main">
        <TextSectionWithCta
          headline="Solving your customer's problems is what brings you in front"
          paragraphs={[
            "If you are looking to level up your digital game now is the time to do so. Lets make your business more effective and robust than ever before.",
            "If your game is on point and your business is thriving, now is the time to make the next big step and deliver more value to your customers through long-term technical decisions.",
          ]}
          ctaButtonText="View our services"
          ctaButtonLocation="/our-services"
        />
        <CtaTeaser
          headline="Let’s check your digital effectiveness"
          paragraph="No matter the size of the business there is allways room to improve. Looking at your business data we can highlighting potential opportunities to grow."
          ctaButtonText="Request a survey"
        />
        <WorkTeasers data={projectsData} headline="Our work" />
      </main>
    </>
  );
};

export default Home;
