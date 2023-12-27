import Image from "next/image";
import styles from "./ImageWithOverlay.module.scss";
import { ImageWithOverlayInterface } from "@/Interfaces/Interfaces";
import overlay from "@/public/icons/overlay.svg"

const ImageWithOverlay = ({
  thin,
  serviceThin,
  reverse,
  src,
  page,
  alt,
  width,
  height,
  fill,
}: ImageWithOverlayInterface) => {
  return (
    <div className={`${styles.wrapper} ${thin ? styles.wrapper___thin : ''} ${serviceThin ? styles.wrapper___serviceThin : '""'}`}>
      <Image
        src={`/images/${src}`}
        alt={alt}
        className={styles.trueImage}
        fill
      />
      <Image
        src={overlay}
        alt="Mountains static image"
        className={styles.overlay}
      />
    </div>
  );
  // }
  // return (
  //   <div
  //     className={`${styles.wrapper} ${thin && styles.wrapper___thin} ${serviceThin && styles.wrapper___serviceThin}`}
  //   >
  //     <Image
  //       src={"/icons/overlay.svg"}
  //       className={`${styles.overlay} ${reverse && styles.overlay___reverse}`}
  //       alt="white overlay stares covering bottom part of image"
  //       width={width}
  //       height={height}
  //     />
  //     <Image
  //       src={`/images/${src}`}
  //       className={`${styles.image} ${page === "about" && styles.image___about}`}
  //       alt={alt}
  //       width={width}
  //       height={height}
  //       loading="lazy"
  //       quality={100}
  //     />
  //   </div>
  // );
};

export default ImageWithOverlay;
