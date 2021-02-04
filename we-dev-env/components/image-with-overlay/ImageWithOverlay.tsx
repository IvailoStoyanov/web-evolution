import styles from "./ImageWithOverlay.module.scss";

const ImageWithOverlay = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={require("../../public/icons/overlay-test.svg")}
        className={`${styles.overlay} ${styles.overlay___reverse}`}
      />

      {props.page === "about" ? (
        <picture>
          <source
            srcSet={require("../../public/images/other/ivo-mugshot.jpg?webp")}
            type="image/webp"
          />
          <source
            srcSet={require("../../public/images/other/ivo-mugshot.jpg")}
            type="image/jpg"
          />
          <img
            src={require("../../public/images/other/ivo-mugshot.jpg")}
            className={`${styles.image} ${styles.image___about}`}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
        </picture>
      ) : (
        <picture>
          <source
            srcSet={require("../../public/images/olga-project/home-hand-wide.jpg?webp")}
            type="image/webp"
          />
          <source
            srcSet={require("../../public/images/olga-project/home-hand-wide.jpg")}
            type="image/jpg"
          />
          <img
            src={require("../../public/images/olga-project/home-hand-wide.jpg")}
            className={styles.image}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
        </picture>
      )}
    </div>
  );
};

export default ImageWithOverlay;
