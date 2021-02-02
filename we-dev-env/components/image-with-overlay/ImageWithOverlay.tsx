import Image from "next/image";
import React from "react";
import styles from "./ImageWithOverlay.module.scss";

const ImageWithOverlay = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.overlay}
        src="/icons/image-overlay.svg"
        layout="fill"
      />
      <Image
        className={styles.image}
        src={props.src}
        layout="responsive"
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default ImageWithOverlay;
