import Link from "next/link";
import React from "react";
import styles from "./WorkTeasers.module.scss";
class WorkTeasers extends React.Component<any> {
  render() {
    const { headline, data, showAll } = this.props;

    return (
      <div className={styles.parentWrapper}>
        {headline ? <h2>{headline}</h2> : null}
        {data.map((post: string, index: number) => {
          const project = JSON.parse(post);

          if (index <= 1 && !showAll) {
            return this.renderElement(project, index);
          }
          if (showAll) {
            return this.renderElement(project, index);
          }
        })}
      </div>
    );
  }

  renderElement = (project, index) => {
    return (
      <Link href={project.url} key={index}>
        <a className={styles.teaserWrapper}>
          <div>
            <div className={styles.teaserWrapper_imageWrapper}>
              <picture>
                <source
                  srcSet={require(`../../public/images/our-work-images/${project.img}?webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`../../public/images/our-work-images/${project.img}`)}
                  type="image/jpg"
                />
                <img
                  src={require(`../../public/images/our-work-images/${project.img}`)}
                  alt={project.alt}
                />
              </picture>
            </div>
            <h3>{project.shortTitle}</h3>
            <div className={styles.spanWrapper}>
              <span className={styles.spanBeforeHover}>{project.services}</span>
              <span className={styles.spanOnHover}>Show work</span>
            </div>
          </div>
        </a>
      </Link>
    );
  };
}

export default WorkTeasers;
