"use client"

import React, { useState } from "react";
import Link from "next/link";
import styles from "./CtaTeaser.module.scss";
import SurveyPopupForm from "../survey-popup-form/SurveyPopupForm";
import { CtaTeaserProps } from "@/Interfaces/Interfaces";

const CtaTeaser = ({ headline, paragraph, ctaButtonText, grayBackground, ctaUrl }: CtaTeaserProps) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleSurveyPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div
      className={`${styles.wrapper} ${grayBackground && styles.wrapper___gray}`}
    >
      <div className={styles.wrapper_container}>
        <h2>{headline}</h2>
        <p>{paragraph}</p>
        {!!ctaUrl ? (
          <Link href={ctaUrl} className="button button___white">
            <span className="button_text">{ctaButtonText}</span>{" "}
            <span className="button_circle"></span>
          </Link>
        ) : (
          <button className="button button___white" onClick={toggleSurveyPopup}>
            <span className="button_text">{ctaButtonText}</span>{" "}
            <span className="button_circle"></span>
          </button>
        )}
        {!ctaUrl && (
          <SurveyPopupForm
            toggle={toggleSurveyPopup}
            visible={popupVisible}
          />
        )}
      </div>
    </div>
  );
}

export default CtaTeaser;
