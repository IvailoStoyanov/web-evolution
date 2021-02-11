import styles from "./ImageWithOverlay.module.scss";

const ImageWithOverlay = ({ ...props }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={require("../../public/icons/overlay-test.svg")}
        className={`${styles.overlay} ${props.reverse ? styles.overlay___reverse : null}`}
      />

        <picture>
          <source
            srcSet={require(`../../public/images/${props.src}?webp`)}
            type="image/webp"
          />
          <source
            srcSet={require(`../../public/images/${props.src}`)}
            type="image/jpg"
          />
          <img
            src={require(`../../public/images/${props.src}`)}
            className={`${styles.image} ${props.page === "about" ? styles.image___about : null}`}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
        </picture>
    </div>
  );
};

export default ImageWithOverlay;
