import Image from "next/image";
import styles from "./ImageWithOverlay.module.scss";
import { ImageWithOverlayInterface } from "@/Interfaces/Interfaces";
import overlay from "@/public/icons/overlay.svg"

const ImageWithOverlay = ({
  thin,
  serviceThin,
  reverse,
  src,
  alt,
}: ImageWithOverlayInterface) => {
  return (
    <div className={`${styles.wrapper} ${thin ? styles.thin : ''} ${serviceThin ? styles.serviceThin : ''}`}>
      <Image
        src={`/images/${src}`}
        alt={alt}
        className={styles.trueImage}
        fill
      />
      <Image
        src={overlay}
        alt="Mountains static image"
        className={`${styles.overlay} ${reverse && styles.reverse}`}
      />
    </div>
  );
};

export default ImageWithOverlay;
