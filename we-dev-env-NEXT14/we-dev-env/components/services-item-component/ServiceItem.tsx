import React from "react";
import styles from "./ServiceItem.module.scss";
import Image from "next/image";

interface ServiceItemProps {
  post: {
    image: string;
    alt: string;
    headline: string;
    paragraph: string;
  }
  toggleFormPop: Function;
}

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
          width={52}
          height={236}
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
