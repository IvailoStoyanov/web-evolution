import React from "react";
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

class CtaTeaser extends React.Component<CtaTeaserProps> {
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
      <div
        className={`${styles.wrapper} ${
          this.props.grayBackground ? styles.wrapper___gray : null
        }`}
      >
        <div className={styles.wrapper_container}>
          <h2>{headline}</h2>
          <p>{paragraph}</p>
          {!!this.props.ctaUrl ? (
            <Link href={this.props.ctaUrl}>
              <a className="button button___white">
                <span className="button_text">{ctaButtonText}</span>{" "}
                <span className="button_circle"></span>
              </a>
            </Link>
          ) : (
            <a className="button button___white" onClick={this.togglePop}>
              <span className="button_text">{ctaButtonText}</span>{" "}
              <span className="button_circle"></span>
            </a>
          )}
          {!!this.props.ctaUrl ? null : (
            <SurveyPopupForm
              toggle={this.togglePop}
              visible={this.state.visible}
            />
          )}
        </div>
      </div>
    );
  }
}

export default CtaTeaser;
