import React from "react";
import styles from "./ContactForm.module.scss";

class ContactForm extends React.Component {
  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <form
            name="contact"
            action="/success"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div>
              <div className={styles.intro}>
                <h2>Get in touch with us</h2>
                <p>
                  If you wish to colaborate with us on a project please fill out
                  the form and we will contanct you back to organise a meeting.
                  We would love to hear about your plans and help you evolve
                  your busness.
                </p>
              </div>
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.inputWrapper}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="surname">Last Name</label>
                <input type="text" id="surname" name="surname" />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="phone">Phone number</label>
                <input type="number" name="phone" id="phone" required />
              </div>
            </div>
            <div>
              <div className={styles.inputWrapper}>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="story">Your message to us</label>
                <textarea name="story" required></textarea>
              </div>
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
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ContactForm;
