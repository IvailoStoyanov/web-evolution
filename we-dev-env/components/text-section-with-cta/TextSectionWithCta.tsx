import Link from "next/link";
import React from "react";
import styles from "./TextSectionWithCta.module.scss";

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
        <a>
          <span>{props.ctaButtonText}</span>
          <img
            src={require("../../public/icons/arrow.svg")}
            alt="arrow right"
            width="24px"
            height="14px"
          />
        </a>
      </Link>
    </div>
  );
};

export default TextSectionWithCta;
