import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

const Movie = ({ movie }: any) => {
  console.log(movie);

  return (
    <Layout>
      <h1>{movie.title}</h1>
    </Layout>
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
