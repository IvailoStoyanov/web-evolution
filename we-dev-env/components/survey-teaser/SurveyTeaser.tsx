import React from "react";
import styles from "./SurveyTeaser.module.scss";
import SurveyPopupForm from "../survey-popup-form/SurveyPopupForm";

interface SurveyTeaserProps {
  headline?: string;
  paragraph?: string;
  ctaButtonText?: string;
}

class SurveyTeaser extends React.Component<SurveyTeaserProps> {
  state = {
    visible: false,
  };

  togglePop = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const { headline, paragraph, ctaButtonText } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper_container}>
          <h2>{headline}</h2>
          <p>{paragraph}</p>
          <a className="button button___white" onClick={this.togglePop}>
            <span className="button_text">{ctaButtonText}</span>{" "}
            <span className="button_circle"></span>
          </a>
        </div>
        <SurveyPopupForm toggle={this.togglePop} visible={this.state.visible} />
      </div>
    );
  }
}

export default SurveyTeaser;
