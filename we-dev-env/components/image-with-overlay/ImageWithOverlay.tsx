import Image from "next/image";
import styles from "./ImageWithOverlay.module.scss";
import { ImageWithOverlayInterface } from "@/Interfaces/Interfaces";

const ImageWithOverlay = ({
  thin,
  serviceThin,
  reverse,
  src,
  page,
  alt,
  width,
  height,
}: ImageWithOverlayInterface) => {
  return (
    <div
      className={`${styles.wrapper} ${thin && styles.wrapper___thin} ${serviceThin && styles.wrapper___serviceThin}`}
    >
      <Image
        src={"/icons/overlay.svg"}
        className={`${styles.overlay} ${reverse ? styles.overlay___reverse : null
          }`}
        alt="white overlay stares covering bottom part of image"
        width={width}
        height={height}
      />

      <picture>
        {/*
        TODO:
        <source
          srcSet={require(`../../public/images/${src}?webp`)}
          type="image/webp"
        />
        <source
          srcSet={require(`../../public/images/${src}`)}
          type="image/jpg"
        /> */}
        <Image
          src={`/images/${src}`}
          className={`${styles.image} ${page === "about" ? styles.image___about : null
            }`}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          quality={100}
        />
      </picture>
    </div>
  );
};

export default ImageWithOverlay;
