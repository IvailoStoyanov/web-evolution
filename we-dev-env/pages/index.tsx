import Head from "next/head";
import IntroHeader from "../components/intro-header/IntroHeader";
import TextSectionWithCta from "../components/text-section-with-cta/TextSectionWithCta";
import CtaTeaser from "../components/cta-teaser/CtaTeaser";
import WorkTeasers from "../components/work-teasers/WorkTeasers";
import fs from "fs";

export default function Home(props: any) {
  // console.log(public/images/other/share.jpg);
  
  return (
    <div id="content">
      <Head>
        <title>Web Evolution: A digital agency that cares</title>
        <meta
          content="Web Evolution: A digital agency that cares"
          property="og:title"
        />
        <meta
          name="description"
          content="Web Evolution is a digital agency that creates web solutions to solve user and client problems."
        />
        <meta
          property="og:description"
          content="Web Evolution is a digital agency that creates web solutions to solve user and client problems."
        />
        <meta content="https://tender-kepler-b39340.netlify.app/images/other/share.jpg" property="og:image" />
        <meta property="og:type" content="website" />
        {/* <meta
          name="google-site-verification"
          content="B2D8GVkpmVGhpcm5ebmk7kwWaDSZj8CNEhp7ZgU0kt0"
        /> 
        <link rel="canonical" href="https://web-evolution.co"></link> */}
        <link rel="icon" href="/logo/we-logo.svg" />
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
        <CtaTeaser
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
