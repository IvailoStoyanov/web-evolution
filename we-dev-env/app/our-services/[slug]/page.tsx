import React from "react";
import fs from "fs";
import Link from "next/link";
import ImageWithOverlay from "@/components/image-with-overlay/ImageWithOverlay";
import { Metadata } from "next";
import TextSectionWithCta from "@/components/text-section-with-cta/TextSectionWithCta";
import ContactForm from "@/components/contact-form/ContactForm";
import styles from "./ServiceSlug.module.scss";
import Image from "next/image";
import ServicesFormWrapper from "@/components/ServicesFormWrapper";
import { SlugPageProps } from "@/Interfaces/Interfaces";

// MIGRATE
const readData = (directory: string, slug: string) => {
  const fileNames = fs.readdirSync(directory);

  return slug ? fs.readFileSync(`${directory}/` + `${slug}.json`, "utf-8")
    : fileNames.map((fileName) => fs.readFileSync(`${directory}/` + fileName, "utf-8"));
};

const generateStaticParams = (slug: string) => {
  //keep in mind this is single becauase it wants ony the slug
  const serviceData = readData("data/servicesData", slug);

  return JSON.parse(serviceData as string);
};

// Migrate to helper because of duplications
export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  try {
    const { slug } = params;
    const service = generateStaticParams(slug);
    const serviceMetaTitle = service.title;
    const serviceMetaDescription = service.headDescription;

    !service && {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
    return {
      title: serviceMetaTitle,
      description: serviceMetaDescription,
    }
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist."
    }
  }
}

const Post = async ({ params: { slug } }: SlugPageProps) => {
  const serviceData = generateStaticParams(slug);

  return (
    <>
      <header className={styles.serviceHeader}>
        <ImageWithOverlay
          src={serviceData.img}
          alt={serviceData.alt}
          height={35}
          width={35}
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
