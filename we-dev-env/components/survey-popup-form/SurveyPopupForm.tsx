import React from "react";
import styles from "./SurveyPopupForm.module.scss";

interface SurveyPopupFormProps {
  toggle?: Function;
}

class SurveyPopupForm extends React.Component<SurveyPopupFormProps> {
  state = {
    seen: true,
  };

  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.intro}>Get in touch</div>
          <h2>Just fill in the form and we will be in touch.</h2>
          <form
            name="contact"
            action="contact"
            method="Post"
            data-netlify="true"
          >
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name="surname" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" name="email" />
            </div>
            <div>
              <label>Company</label>
              <input type="text" name="company" />
            </div>
            <div>
              <label>Phone number</label>
              <input type="number" name="phone" />
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
            ></input>
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
