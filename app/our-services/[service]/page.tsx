import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import ImageWithOverlay from "@/components/image-with-overlay/ImageWithOverlay";
import TextSectionWithCta from "@/components/text-section-with-cta/TextSectionWithCta";
import ContactForm from "@/components/contact-form/ContactForm";
import styles from "./ServiceSlug.module.scss";
import Image from "next/image";
import ServicesFormWrapper from "@/components/ServicesFormWrapper";
import { ServiceInterface, MetadataServiceProps } from "@/Interfaces/Interfaces";
import { Metadata } from 'next'

const getServiceData = (service: string) => {
  return JSON.parse(
    fs.readFileSync(
      path.join("data/servicesData", service + ".json")
    ).toString()
  );
}

export async function generateStaticParams() {
  const projects = await fs.readdirSync("data/servicesData");

  return projects.map((projectName: string) => ({
    slug: projectName,
  }))
}

export async function generateMetadata({ params }: MetadataServiceProps): Promise<Metadata> {
  const { service } = params;
  const serviceData: ServiceInterface = getServiceData(service);

  return {
    title: `${serviceData.title} | Web Evolution`,
    description: serviceData.headDescription,
    openGraph: {
      description: serviceData.headDescription,
      images: ['https://web-evolution.co/images/other/share.jpg'],
      type: 'website'
    }
  }
}

const Post = ({ params }: { params: { service: string } }) => {
  const { service } = params;
  const serviceData: ServiceInterface = getServiceData(service);

  return (
    <>
      <header className={styles.serviceHeader}>
        <ImageWithOverlay
          src={serviceData.img}
          alt={serviceData.alt}
          thin
          reverse
        />
        <div className={styles.serviceHeader_textWrapper}>
          <Link href="/our-services" className={styles.goBackCta}>
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow left"
              width={24}
              height={14}
            />
            <span>Services</span>
          </Link>
          <h1>{serviceData.title}</h1>
          <p>{serviceData.introText}</p>
          <Link
            className={styles.surveyCta}
            href={'/contact'}
            title="cotact page">
            {serviceData.introSurveyText}
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.contentWrapper_headline}>We can help you</h2>
          <ServicesFormWrapper processes={serviceData.processes} />
        </div>
        <TextSectionWithCta
          grayBackground
          headline="You are not sure what you need?"
          paragraphs={[
            "Call us on +359 (0)886020965 or fill in the form below so we can learn more about your needs. We will contact you back to organise a timeslot to discuss your future.",
          ]}
          ctaButtonText="Contact us"
          ctaButtonLocation="/contact"
          thin
        />
        <div className={styles.contactFormWrapper}>
          <ContactForm />
        </div>
      </main>
    </>
  );
}

export default Post;
