import Head from "next/head";
import IntroHeader from "../components/intro-header/IntroHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>About us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroHeader
        headlineSmall="Digital Agency"
        imageUrl="/images/other/ivo-mugshot.jpg"
        imageAlt="A hand holding up a mobile phone displaying one of the pages of our client's work on a faded green background."
        logoUrl="/logo/we-logo.svg"
        paragraph="Web Evolution was esatblished 2021 by Ivaylo Stoyanov - Link to LinkedIn. Witha Bchelor of Science - BS, Web Development and a couple of years of experience in the industry behind his back, Ivaylo decides to branch out and create a digital agency that cares."
      ></IntroHeader>
      <main></main>
    </>
  );
}
