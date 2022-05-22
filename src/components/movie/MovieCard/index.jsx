import React from "react";
import styles from "./styles.module.css";

const MovieCard = ({ movie, getMovieId }) => {
  return (
    <div
      className={styles.movie_card}
      onClick={() => {
        getMovieId(movie.id);
      }}
    >
      <img src={movie.medium_cover_image} alt="" />
      <div>
        {movie.title}, ({movie.year})
      </div>
      <div>рейтинг: {movie.rating}/10</div>
    </div>
  );
};

export default MovieCard;
