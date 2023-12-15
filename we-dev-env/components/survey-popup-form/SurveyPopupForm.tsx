import React from "react";
import styles from "./SurveyPopupForm.module.scss";
import Image from "next/image";
import {SurveyPopupFormProps} from '@/Interfaces/Interfaces';

const SurveyPopupForm = ({ toggle, visible }: SurveyPopupFormProps) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <>
      <div
        className={`${styles.wrapper} ${visible ? styles.wrapper___visible : ""}`}
      >
        <div className={styles.intro}>Get in touch</div>
        <h2>Just fill in the form and we will be in touch.</h2>

        <form
          name="survey"
          action="/success"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="survey" />
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="surname">Last Name</label>
            <input type="text" id="surname" name="surname" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </p>
          <p>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" />
          </p>
          <p>
            <label htmlFor="phone">Phone number</label>
            <input type="number" name="phone" id="phone" required />
          </p>
          <label className={styles.privacyPolicy}>
            <input type="checkbox" required />
            <span>
              Yes I agree to Web Evolution&apos;s <a href="/privacy-policy">Privacy Policy</a>
            </span>
          </label>
          <input
            className={styles.submitButton}
            type="submit"
            value="Send form"
            name="submit"
          ></input>
        </form>

        <div className={styles.closeSurveyIcon}>
          <Image
            src="/icons/close-survey.svg"
            alt="close form popup"
            height={20}
            width={20}
            onClick={handleClick}
          />
        </div>
      </div>
      <div
        className={`${styles.overlay} ${visible ? styles.overlay___visible : ""}`}
        onClick={handleClick}
      ></div>
    </>
  );
}

export default SurveyPopupForm;
