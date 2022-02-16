import Image from "next/image";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Movie.module.scss";
import { RatingStar } from "rating-star";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import moment from "moment";
const Movie = ({ movie }: { [key: string]: any }) => {
  console.log(movie);

  return (
    <>
      <Head>
        <title>{movie.title} - movie</title>
      </Head>
      <Layout>
        <div className={styles.movie_page}>
          <div className={styles.background}>
            <Image
              src={movie.background_image}
              layout="fill"
              className="background_image"
              alt={movie.title}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.intro}>
              <div className={styles.thumbnail_container}>
                <Image
                  alt={movie.title}
                  src={movie.medium_cover_image}
                  height="400px"
                  width="300px"
                  layout="responsive"
                  className={styles.thumbnail_image}
                  objectFit="cover"
                />
              </div>
              <div className={styles.intro_content}>
                <h1>
                  {movie.title} <span>({movie.year})</span>
                </h1>
                <p className={styles.description}>{movie.description_full}</p>

                <p className={styles.genres}>
                  {movie.genres.map((genre: string, index: number) => {
                    return <small key={index}>{genre}</small>;
                  })}
                </p>
                <div className={styles.rating}>
                  {movie.rating}
                  <RatingStar
                    id={`${movie.id}`}
                    noBorder
                    rating={movie.rating}
                    maxScore={10}
                  />
                </div>
                <p className={styles.info}>
                  <span className={styles.download_count}>
                    {" "}
                    <MdOutlineFileDownload /> {movie.download_count}
                  </span>
                  <span className={styles.runtime}>
                    {" "}
                    <AiOutlineClockCircle />
                    <span>{movie.runtime} minutes</span>
                  </span>
                  <span className={styles.runtime}>
                    {" "}
                    <AiOutlineLike />
                    <span>{movie.like_count}</span>
                  </span>
                </p>
                <p>
                  Uploaded on {moment(movie.date_uploaded).format("DD/MM/YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Movie;

export async function getServerSideProps({ query }: any) {
  const res = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${query.id}`
  );

  const movie = await res.json();
  return {
    props: { movie: movie.data.movie },
  };
}
