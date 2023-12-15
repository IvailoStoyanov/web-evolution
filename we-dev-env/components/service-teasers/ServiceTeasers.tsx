import Link from "next/link";
import React from "react";
import ImageWithOverlay from "../image-with-overlay/ImageWithOverlay";
import styles from "./ServiceTeasers.module.scss";
import Image from "next/image";
import { ServiceTeaseInterface, ServiceInterface } from "@/Interfaces/Interfaces";

const ServiceTeasers = ({ data, page }: ServiceTeaseInterface) => {

  return (
    <div className={styles.wrapper}>
      {data.map((post, index: number) => {
        const service: ServiceInterface = JSON.parse(post);

        return (
          <Link
            href={service.teaser.ctaUrl}
            key={index}
            className={`${styles.serviceWrapper} ${!(index % 2 == 0) && styles.serviceWrapper___reverse}`}>
            <ImageWithOverlay
              page={page}
              src={service.img}
              alt={service.alt}
              height={35}
              width={35}
              reverse={!(index % 2 == 0)}
              serviceThin
            />
            <div className={styles.serviceWrapper_textWrapper}>
              <span className={styles.serviceWrapper_clarification}>
                {service.teaser.span}
              </span>
              <h2>{service.title}</h2>
              <p>{service.teaser.paragraph}</p>
              <span className={styles.serviceWrapper_cta}>{service.teaser.cta}</span>
              <Image
                src={"/icons/arrow.svg"}
                alt="arrow right"
                width={24}
                height={14}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServiceTeasers;
