import React from "react";
import HomepageItem from "./HomepageItem";
import styles from "../styles/Movies.module.scss";
const Movies = ({ movies }: any) => {
  return (
    <div>
      <div className={styles.moviesGrid}>
        {movies &&
          movies.data.movies.map((movie: any) => {
            return (
              <HomepageItem
                key={movie.id}
                backgroundImage={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Movies;

export async function getStaticProps() {
  const res = await fetch("https://yts.mx/api/v2/list_movies.json");
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
