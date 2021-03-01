import Head from "next/head";
import ContactForm from "../components/contact-form/ContactForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact us - Web Evolution</title>
        <meta content="Contact us - Web Evolution" property="og:title" />
        <meta
          name="description"
          content="Need to tell us about your chalanges? We would love to hear from you. Find all relevant contact information here or fill out a form."
        />
        <meta
          property="og:description"
          content="Need to tell us about your chalanges? We would love to hear from you. Find all relevant contact information here or fill out a form."
        />
        <meta
          content="https://tender-kepler-b39340.netlify.app/images/other/share.jpg"
          property="og:image"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo/we-logo.svg" />
      </Head>
      <header className="contactPageHeader">
        <p>We are here to help you.</p>
        <h1>Tell us about your goals and chalanges</h1>
      </header>

      <main className="contactPage">
        <ContactForm />
        <div className="phoneWrapper">
          <h2>Give us a call</h2>
          <p>+359 (0)886020965 </p>
        </div>
      </main>
    </div>
  );
}
