import type { Metadata } from 'next'
import ContactForm from "@/components/contact-form/ContactForm";

export const metadata: Metadata = {
  metadataBase: new URL('https://web-evolution.co'),
  title: 'Contact us - Web Evolution',
  description: 'Need to tell us about your chalanges? We would love to hear from you. Find all relevant contact information here or fill out a form.',
  openGraph: {
    title: 'Contact us - Web Evolution',
    description: 'Need to tell us about your chalanges? We would love to hear from you. Find all relevant contact information here or fill out a form.',
  },
};

export default function Contact() {
  return (
    <div>
      <header className="contactPageHeader">
        <p>We are here to help you.</p>
        <h1>Tell us about your goals and chalanges</h1>
      </header>

      <main className="contactPage">
        <ContactForm />
        <div className="phoneWrapper">
          <h2>Give us a call</h2>
          <p>+359 (0)886020965</p>
        </div>
      </main>
    </div>
  );
}
