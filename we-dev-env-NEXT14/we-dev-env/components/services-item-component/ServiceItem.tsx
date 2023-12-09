import React from "react";
import styles from "./ServiceItem.module.scss";

interface ServiceItemProps {
  post: {
    image: string;
    alt: string;
    headline: string;
    paragraph: string;
  };
  toggleFormPop?: Function;
}

class ServiceItem extends React.Component<ServiceItemProps> {
  togglePop = () => {
    this.props.toggleFormPop();
  };

  render() {
    const { post } = this.props;

    return (
      <div className={`${styles.serviceItem}`}>
        <div className={styles.imageWrapper}>
          <img
            src={require(`../../public/images/our-services/${post.image}`)}
            alt={post.alt}
          />
        </div>
        <div className={styles.textWrapper}>
          <h3>{post.headline}</h3>
          <p>{post.paragraph}</p>
          <a className="button button___blue" onClick={this.togglePop}>
            <span className="button_text">Get started</span>
            <span className="button_circle"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default ServiceItem;
