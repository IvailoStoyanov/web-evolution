import Link from "next/link";
import React from "react";
import ImageWithOverlay from "../image-with-overlay/ImageWithOverlay"
import styles from "./ServiceTeasers.module.scss";

const ServiceTeasers = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      {props.data.map((post: string, index: number) => {
        const service = JSON.parse(post);

        return (
          <div className={`${styles.serviceWrapper} ${index % 2 == 0 ? null : styles.serviceWrapper___reverse}`} key={index}>
            <ImageWithOverlay
              page={props.page}
              src={service.img}
              alt="hand holding phone showcasing Olga Golant's website"
              height={35}
              width={35}
              reverse = {index % 2 == 0 ? null : true}
            />
            <div className={styles.serviceWrapper_textWrapper}>
            <span className={styles.serviceWrapper_clarification}>{service.teaser.span}</span>
            <h2>{service.title}</h2>
            <p>{service.teaser.paragraph}</p>
            <Link href={service.teaser.ctaUrl}>
              <a>
                <span>{service.teaser.cta}</span>
                <img
                  src={require("../../public/icons/arrow.svg")}
                  alt="arrow right"
                  width="24px"
                  height="14px"
                />
              </a>
            </Link>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceTeasers;
