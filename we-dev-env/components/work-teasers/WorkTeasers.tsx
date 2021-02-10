import Link from "next/link";
import React from "react";
import styles from "./WorkTeasers.module.scss";

const WorkTeaser = ({ ...props }) => {

  return (
    <div className={styles.parentWrapper}>
      <h2>Our work</h2>
      {props.data.map((post: string, index: number) => {
        const project = JSON.parse(post);

        if (index <= 1) {
          return (
            <a href={project.url} className={styles.teaserWrapper} key={index}>
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
                  <span className={styles.spanBeforeHover}>
                    {project.services}
                  </span>
                  <span className={styles.spanOnHover}>Show work</span>
                </div>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
};

export default WorkTeaser;
