import React from "react";
import styles from "./ServiceItem.module.scss";
import Image from "next/image";
import { ServiceItemProps } from "@/Interfaces/Interfaces"


const ServiceItem = ({ post, toggleFormPop }: ServiceItemProps) => {
  const togglePop = () => {
    toggleFormPop();
  };

  return (
    <div className={`${styles.serviceItem}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={`/images/our-services/${post.image}`}
          alt={post.alt}
          fill
        />
      </div>
      <div className={styles.textWrapper}>
        <h3>{post.headline}</h3>
        <p>{post.paragraph}</p>
        <a className="button button___blue" onClick={togglePop}>
          <span className="button_text">Get started</span>
          <span className="button_circle"></span>
        </a>
      </div>
    </div>
  );
}

export default ServiceItem;
