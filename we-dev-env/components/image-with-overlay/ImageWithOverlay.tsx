import React from "react";
import styles from "./ImageWithOverlay.module.scss";

const ImageWithOverlay = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={require("../../public/icons/overlay-test.svg")}
        className={`${styles.overlay} ${styles.overlay___reverse}`}
      />

      {props.page === "about" ? (
        <img
          src={require("../../public/images/other/ivo-mugshot.jpg")}
          className={`${styles.image} ${styles.image___about}`}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      ) : (
        <img
          src={require("../../public/images/olga-project/home-hand-wide.jpg")}
          className={styles.image}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      )}
    </div>
  );
};

export default ImageWithOverlay;
