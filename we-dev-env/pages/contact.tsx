import Head from "next/head";
import ContactForm from "../components/contact-form/ContactForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact us page</title>
        <link rel="icon" href="/favicon.ico" />
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
