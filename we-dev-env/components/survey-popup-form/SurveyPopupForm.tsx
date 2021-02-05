import React from "react";
import styles from "./SurveyPopupForm.module.scss";

interface SurveyPopupFormProps {
  toggle?: Function;
}

class SurveyPopupForm extends React.Component<SurveyPopupFormProps> {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.intro}>Get in touch</div>
          <h2>Just fill in the form and we will be in touch.</h2>

          {/* <form
            name="survey"
            action="/success"
            method="POST"
            data-netlify-honeypot="bot-field"
            netlify
            enctype="application/x-www-form-urlencoded"
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
              <input type="checkbox" />
              <span>
                Yes I agree to Web Evolution's <a>Privacy Policy</a>
              </span>
            </label>
            <input
              className={styles.submitButton}
              type="submit"
              value="Send form"
              name="submit"
            ></input>
          </form> */}
          <form
            name="contactForm"
            method="POST"
            action="/"
            data-netlify-honeypot="bot-field"
            netlify
            id="contact-form"
            className="contact-form"
          >
            <p className="screen-reader-text">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <p className="form-row">
              <label htmlFor="contact-form-name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="contact-form-name"
                className="form-input"
              />
            </p>
            <p className="form-row">
              <label htmlFor="contant-form-email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="contant-form-email"
                className="form-input"
              />
            </p>
            <p className="form-row">
              <label htmlFor="contant-form-message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="contant-form-message"
                className="form-textarea"
              />
            </p>
            <input type="hidden" name="form-name" value="contactForm" />
            <p className="form-row form-submit">
              <button type="submit" className="button">
                Send Message
              </button>
            </p>
          </form>

          <div className={styles.closeSurveyIcon}>
            <img
              src={require("../../public/icons/close-survey.svg")}
              alt="close form popup"
              height="20px"
              width="20px"
              onClick={this.handleClick}
            />
          </div>
        </div>
        <div className={styles.overlay} onClick={this.handleClick}></div>
      </>
    );
  }
}

export default SurveyPopupForm;
