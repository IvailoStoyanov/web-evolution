import Head from "next/head";
import IntroHeader from "../../components/intro-header/IntroHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>About us | Web Evolution</title>
        <meta content="About us | Web Evolution" property="og:title" />
        <meta
          name="description"
          content="Read bout the establishment of Web Evolution and the developer specialist behind it."
        />
        <meta
          property="og:description"
          content="Read bout the establishment of Web Evolution and the developer specialist behind it."
        />
        <meta
          content="https://web-evolution.co/images/other/share.jpg"
          property="og:image"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo/we-logo.svg" />
      </Head>
      <IntroHeader
        page="about"
        headlineSmall="Digital Agency"
        imageUrl="other/ivo-mugshot.jpg"
        imageAlt="A mugshot of the founder of Web Evolution - Ivaylo Stoyanov Stoyanov"
        logoUrl="/logo/we-logo.svg"
        paragraph="Web Evolution was esatblished 2021 by Ivaylo Stoyanov. With a Bachelor of Science - BS, Web Development at Manchester Metropolitan University and a couple of years of experience in the German industry behind his back, Ivaylo decides to branch out and create a digital agency that cares."
      />
      <main id="main">
        <div className="centeredContent centeredContent___about">
          <div className="paragraphImageWrapper">
            <Image
              src="/icons/OReilly-red.svg"
              className="paragraphImageWrapper_OReillyLogo"
              alt="O'Reilly logo"
              width={391}
              height={74}
            />
            <p>
              During his university years Ivaylo was also the winner of O’REILLY
              Web Design Competition 2018 where students were critiqued by
              number of web professionals on their coursework. The external
              judges were asked to rate according to the current, highest web
              standards and we at Web Evolution strictly obide by them whilst
              keeping things new and robust through a build process with the
              latest frameworks.
            </p>
          </div>
          <p>
            We at Web Evolution believe that the best work grows from a
            foundation of respect, open-mindedness, passion and a dose of
            realism guided by a good structure. We want to solve the problems
            over choosing predefined solutions, that is why we like to spend
            more time to get to know your business. Yes it can feel like a step
            back, but it often delivers a better otucome.
          </p>
          <p className="quotationParagraph">
            <q>
              It doesn&apos;t make sense to hire smart people and then tell them what
              to do; we hire smart people so they can tell us what to do
            </q>{" "}
            - Steve Jobs.
          </p>
          <p>
            <b>We</b> dont want to work for you, we want to work with you, to{" "}
            <b>solve your problems, together.</b>
          </p>
        </div>
      </main>
    </>
  );
}
