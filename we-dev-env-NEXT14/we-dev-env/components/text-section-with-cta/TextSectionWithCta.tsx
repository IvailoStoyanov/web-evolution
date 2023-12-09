import Link from "next/link";
import React from "react";
import styles from "./TextSectionWithCta.module.scss";
import Image from "next/image";

const TextSectionWithCta = ({ ...props }) => {
  return (
    <div
      className={`${styles.wrapper} 
      ${!!props.grayBackground ? `${styles.grayBackground}` : null} 
      ${!!props.thin ? `${styles.wrapper___thin}` : null}
      `}
    >
      <h2>{props.headline}</h2>

      {props.paragraphs.length >= 2 ? (
        <div className={styles.textWrapper}>
          {props.paragraphs.map((post: string, index: number) => {
            return <p key={index}>{post}</p>;
          })}
        </div>
      ) : (
        <>
          {props.paragraphs.map((post: string, index: number) => {
            return <p key={index}>{post}</p>;
          })}
        </>
      )}

      <Link href={props.ctaButtonLocation}>
          <span>{props.ctaButtonText}</span>
          <Image
            src="/icons/arrow.svg"
            alt="arrow right"
            width={24}
            height={14}
          />
      </Link>
    </div>
  );
};

export default TextSectionWithCta;
