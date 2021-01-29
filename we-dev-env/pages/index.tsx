import Head from "next/head";
import IntroHeader from "../components/intro-header/IntroHeader";
import Intro from "../components/intro-header/IntroHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* button back cta */}
      <IntroHeader
        headline="We help others evolve in the digital world"
        imageUrl="/images/olga-project/home-hand-wide.jpg"
        imageAlt="A hand holding up a mobile phone displaying one of the pages of our client's work on a faded green background."
        paragraph="While guiding you through the digital customer world we build amazng customer experiences and maintain a high quality standard."
        ctaButtonText="View our services"
      ></IntroHeader>
      <main></main>
    </div>
  );
}
