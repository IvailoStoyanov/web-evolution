import styles from "./IntroHeader.module.scss";
import Link from "next/link";
import ImageWithOverlay from "../image-with-overlay/ImageWithOverlay";

interface HeaderInterface {
  page?: string;
  headline?: string;
  headlineSmall?: string;
  imageUrl: string;
  imageAlt: string;
  logoUrl?: string;
  paragraph: string;
  ctaButtonText?: string;
}

function IntroHeader(props: HeaderInterface) {
  return (
    <header className={`${styles.intro} ${props.page === "about" ? styles.intro___about : ''}`}>
      <ImageWithOverlay
        page={props.page}
        src={props.imageUrl}
        alt={props.imageAlt}
        height={35}
        width={35}
        reverse
      />
      <div className={styles.textWrapper}>
        {!!props.logoUrl ? (
          <div>
            <img
              src={require("../../public/logo/we-logo.svg")}
              className={styles.image}
              alt="Web Evolution Logo"
              height="20px"
              width="40px"
            />
          </div>
        ) : null}
        {!!props.headline ? <h1>{props.headline}</h1> : null}
        {!!props.headlineSmall ? (
          <h1 className={styles.headlineSmall}>{props.headlineSmall}</h1>
        ) : null}
        <p>{props.paragraph}</p>
        {!!props.ctaButtonText ? (
          <Link href="/our-services">
            <a className="button button___black">
              <span className="button_text">{props.ctaButtonText}</span>{" "}
              <span className="button_circle"></span>
            </a>
          </Link>
        ) : null}
      </div>
    </header>
  );
}

export default IntroHeader;
