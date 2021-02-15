import React, { createRef } from "react";
import styles from "./ServiceItem.module.scss";
import Link from "next/link";

interface ServiceItemProps {
  headline?: string;
  paragraph?: string;
  ctaButtonText?: string;
  post?: any;
}

class ServiceItem extends React.Component<ServiceItemProps> {
  private moreInfoText = createRef<HTMLImageElement>();

  constructor(props: {}) {
    super(props);
    this.moreInfoText = React.createRef();
  }

  state = {
    expanded: false,
  };

  toggleExtraContent = () => {
    console.log(!this.toggleExtraContent);

    this.setState({
      expanded: !this.state.expanded,
    });
  };

  setStyle = () => {
    return this.state.expanded
      ? { marginBottom: `${this.moreInfoText.current.clientHeight - 50}px` }
      : { marginBottom: "70px" };
  };

  togglePop = () => {
    console.log("toggle popup");
  };

  test = () => {
    console.log("wow");
  };

  render() {
    const { post } = this.props;

    return (
      <div
        className={`${styles.serviceItem} ${
          this.state.expanded ? styles.serviceItem___expanded : ""
        }`}
        onClick={this.toggleExtraContent}
        style={this.setStyle()}
      >
        <div className={styles.imageWrapper}>
          <img
            src={require(`../../public/images/our-services/${post.image}`)}
            alt="item headline displayed in a colorful abreviation"
          />
        </div>
        <div className={styles.textWrapper}>
          <h3>{post.headline}</h3>
          <div
            className={styles.textWrapper_moreInfoText}
            ref={this.moreInfoText}
          >
            <p>{post.paragraph}</p>
            <a className="button button___blue" onClick={this.togglePop}>
              <span className="button_text">Get started</span>
              <span className="button_circle"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceItem;
