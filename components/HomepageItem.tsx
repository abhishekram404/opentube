import Image from "next/image";
import React from "react";
import styles from "../styles/HomepageItem.module.scss";
interface Props {
  title: string;
  year: number;
  backgroundImage: string;
  genres: string[];
}
const HomepageItem = ({ title, year, backgroundImage, genres }: Props) => {
  return (
    <div className={styles.homepageItem}>
      <div className={styles.thumbnailContainer}>
        <Image
          src={backgroundImage}
          alt={title}
          layout="responsive"
          width={2}
          height={3}
          className="thumbnail"
          loading="lazy"
        />
      </div>
      <div className={styles.movieDetails}>
        <h2>{title}</h2>
        <p>
          {genres.map((genre, index) => {
            let separator = index === genres.length - 1 ? "" : " | ";
            return genre + separator;
          })}
        </p>
        <small>{year}</small>
      </div>
    </div>
  );
};

export default HomepageItem;
