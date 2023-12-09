import styles from "./IntroHeader.module.scss";
import Link from "next/link";
import ImageWithOverlay from "../image-with-overlay/ImageWithOverlay";
import Image from "next/image";

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

function IntroHeader({page, imageUrl, imageAlt, logoUrl, headline, headlineSmall, ctaButtonText, paragraph}: HeaderInterface) {
  return (
    <header
      className={`${styles.intro} ${page === "about" && styles.intro___about}`}
    >
      <ImageWithOverlay
        page={page}
        src={imageUrl}
        alt={imageAlt}
        height={1134}
        width={479}
        reverse
      />
      <div className={styles.textWrapper}>
        {logoUrl && <div>
            <Image
              src="/logo/we-logo.svg"
              className={styles.image}
              alt="Web Evolution Logo"
              height={20}
              width={40}
            />
          </div>
        }
        {headline && <h1>{headline}</h1>}
        {headlineSmall ? (
          <h1 className={styles.headlineSmall}>{headlineSmall}</h1>
        ) : null}
        <p>{paragraph}</p>
        {
          ctaButtonText &&
          <Link href="/our-services" className="button button___black">
            <span className="button_text">{ctaButtonText}</span>{" "}
            <span className="button_circle"></span>
          </Link>
        }
      </div>
    </header>
  );
}

export default IntroHeader;
