import Link from "next/link";
import React from "react";
import styles from "./TextSectionWithCta.module.scss";
import Image from "next/image";
import { TextSectionWithCtaInterface } from "@/Interfaces/Interfaces";

const TextSectionWithCta = ({
  grayBackground,
  thin,
  headline,
  paragraphs,
  ctaButtonLocation,
  ctaButtonText
}: TextSectionWithCtaInterface) => {
  return (
    <div
      className={`${styles.wrapper} 
      ${!!grayBackground && `${styles.grayBackground}`} 
      ${!!thin && `${styles.wrapper___thin}`}
      `}
    >
      <h2>{headline}</h2>

      {paragraphs.length >= 2 ? (
        <div className={styles.textWrapper}>
          {paragraphs.map((post: string, index: number) => {
            return <p key={index}>{post}</p>;
          })}
        </div>
      ) : (
        <>
          {paragraphs.map((post: string, index: number) => {
            return <p key={index}>{post}</p>;
          })}
        </>
      )}

      <Link href={ctaButtonLocation}>
        <span>{ctaButtonText}</span>
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
