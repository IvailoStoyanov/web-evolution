import { FunctionComponent } from "react";
import styles from "./IntroHeader.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImageWithOverlay from "../image-with-overlay/ImageWithOverlay";

function IntroHeader(props: any) {
  return (
    <header className={styles.Intro}>
      <ImageWithOverlay
        src={props.imageUrl}
        alt="hamburger icon"
        height={35}
        width={35}
      />
      <div className={styles.textWrapper}>
        {!!props.logoUrl ? (
          <Image
            src={props.logoUrl}
            alt="web evolution logo"
            width={40}
            height={20}
          />
        ) : null}
        {!!props.headline ? <h1>{props.headline}</h1> : null}
        {!!props.headlineSmall ? (
          <h1 className={styles.headlineSmall}>{props.headlineSmall}</h1>
        ) : null}
        <p>{props.paragraph}</p>
        {!!props.ctaButtonText ? <Link href="/our-services">
          <a className="button button___black">
            <span className="button_text">{props.ctaButtonText}</span>{" "}
            <span className="button_circle"></span>
          </a>
        </Link> : null}
      </div>
    </header>
  );
}

export default IntroHeader;
