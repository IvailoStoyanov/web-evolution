import React from "react";
import Image from "next/image";
import styles from "./SurveyPopup.module.scss";

interface SurveyPopupProps {
  toggle?: Function;
}

class SurveyPopup extends React.Component<SurveyPopupProps> {
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
          <form action="">
            <div>
              <label>
                Name
                <input type="text" required />
              </label>
            </div>
            <div>
              <label>
                Last Name
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Email
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Company
                <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Phone number
                <input type="number" />
              </label>
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
            <Image
              src="/icons/close-survey.svg"
              alt="Web Evolution Logo"
              width={20}
              height={20}
              onClick={this.handleClick}
            />
          </div>
        </div>
        <div className={styles.overlay} onClick={this.handleClick}></div>
      </>
    );
  }
}

export default SurveyPopup;
