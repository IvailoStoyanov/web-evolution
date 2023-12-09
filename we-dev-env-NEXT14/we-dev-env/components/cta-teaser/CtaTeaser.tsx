"use client"

import React, { useState } from "react";
import Link from "next/link";
import styles from "./CtaTeaser.module.scss";
import SurveyPopupForm from "../survey-popup-form/SurveyPopupForm";

interface CtaTeaserProps {
  headline?: string;
  paragraph?: string;
  ctaButtonText?: string;
  ctaUrl?: string;
  grayBackground?: boolean;
}

const CtaTeaser = ({ ...props }: CtaTeaserProps) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleSurveyPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const { headline, paragraph, ctaButtonText } = props;

  return (
    <div
      className={`${styles.wrapper} ${props.grayBackground ? styles.wrapper___gray : null
        }`}
    >
      <div className={styles.wrapper_container}>
        <h2>{headline}</h2>
        <p>{paragraph}</p>
        {!!props.ctaUrl ? (
          <Link href={props.ctaUrl} className="button button___white">
            <span className="button_text">{ctaButtonText}</span>{" "}
            <span className="button_circle"></span>
          </Link>
        ) : (
          <button className="button button___white" onClick={toggleSurveyPopup}>
            <span className="button_text">{ctaButtonText}</span>{" "}
            <span className="button_circle"></span>
          </button>
        )}
        {!!props.ctaUrl ? null : (
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
