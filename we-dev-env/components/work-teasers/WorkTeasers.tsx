import Link from "next/link";
import React from "react";
import styles from "./WorkTeasers.module.scss";
import Image from "next/image";
import { WorkInterface } from "@/Interfaces/Interfaces"

export const WorkTeasers = ({ headline, data }: { headline?: string, data: WorkInterface[] }) => {

  return (
    <div className={styles.parentWrapper}>
      {headline && <h2>{headline}</h2>}
      {data.map((project, index: number) => {

        return (
          <Link href={project.url} key={index} className={styles.teaserWrapper}>
            {/* <div className={styles.teaserWrapper_imageWrapper}>
              <Image
                src={`/images/our-work-images/${project.img}`}
                alt={project.alt}
                width={700}
                height={330}
              />
            </div> */}
            <div className={styles.teaserWrapper_imageWrapper}>
              <Image
                src={`/images/our-work-images/${project.img}`}
                alt={project.alt}
                fill
              />
            </div>
            <h3>{project.shortTitle}</h3>
            <div className={styles.spanWrapper}>
              <span className={styles.spanBeforeHover}>{project.services}</span>
              <span className={styles.spanOnHover}>Show work</span>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default WorkTeasers;
