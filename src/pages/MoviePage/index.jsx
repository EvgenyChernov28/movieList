import React, { useState, useEffect } from "react";

import MovieCard from "../../components/movie/MovieCard";
import Preloader from "../../components/common/Preloader";
import Pagination from "../../components/common/Pagination";
import CurrentMovie from "../../components/movie/CurrentMovie/";

import styles from "./styles.module.css";

import { movieAPI } from "../../API/getMovie";

const MoviePage = ({ newMovieComment, movieComments, setDeleteComment }) => {
  const [moviesList, setMoviesList] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (pageNumber) => {
    movieAPI.getMovieList(pageNumber).then((response) => {
      setMoviesList(response.data);
      setCurrentPage(pageNumber);
    });
  };

  const getCurrentMovie = (movieId) => {
    return moviesList.movies.find((movie) => movie.id === movieId);
  };

  const [currentMovieId, setCurrentMovieId] = useState(null);

  const getMovieId = (movieId) => {
    setCurrentMovieId(movieId);
  };

  const refreshCurrentMovieId = () => {
    setCurrentMovieId(null);
  };

  const onComment = (e) => {
    newMovieComment(e, currentMovieId);
  };

  const currentMovieComments = movieComments.filter(
    (element) => element.movieId === currentMovieId
  );

  const deleteComment = (idComment) => {
    setDeleteComment(idComment, currentMovieId);
  };

  useEffect(() => {
    movieAPI.getMovieList().then((response) => {
      setMoviesList(response.data);
    });
  }, []);

  if (!moviesList) return <Preloader />;

  if (currentMovieId !== null) {
    return (
      <CurrentMovie
        currentMovieComments={currentMovieComments}
        onComment={onComment}
        movie={getCurrentMovie(currentMovieId)}
        onMovieId={refreshCurrentMovieId}
        deleteComment={deleteComment}
      />
    );
  }

  return (
    <div className={styles.moviesPage}>
      <div className={styles.movies}>
        {moviesList.movies.map((elem) => {
          return (
            <MovieCard
              getMovieId={getMovieId}
              movie={elem}
              onMovieId={refreshCurrentMovieId}
              key={elem.id}
            />
          );
        })}
      </div>
      <Pagination
        totalUsersCount={moviesList.movie_count}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={onPageChange}
        portionSize={10}
      />
    </div>
  );
};

export default MoviePage;
