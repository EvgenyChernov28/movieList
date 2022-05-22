import React from "react";

const MovieCard = ({ movie, getMovieId }) => {
  return (
    <div>
      <img src={movie.medium_cover_image} alt="" />
      <div
        onClick={() => {
          getMovieId(movie.id);
        }}
      >
        {movie.title}, ({movie.year})
      </div>
      <div>рейтинг: {movie.rating}/10</div>
    </div>
  );
};

export default MovieCard;
