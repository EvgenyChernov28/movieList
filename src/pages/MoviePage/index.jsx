import React, { useState, useEffect } from "react";

import MovieCard from "../../components/movie/MovieCard";
import Preloader from "../../components/common/Preloader";
import Pagination from "../../components/common/Pagination";

import styles from "./styles.module.css";

import { movieAPI } from "../../API/getMovie";

const MoviePage = () => {
  const [moviesList, setMoviesList] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (pageNumber) => {
    movieAPI.getMovieList(pageNumber).then((response) => {
      setMoviesList(response.data);
      setCurrentPage(pageNumber);
    });
  };

  useEffect(() => {
    movieAPI.getMovieList().then((response) => {
      setMoviesList(response.data);
    });
  }, []);

  if (!moviesList) return <Preloader />;

  return (
    <div className={styles.moviesPage}>
      <div className={styles.movies}>
        {moviesList.movies.map((elem) => {
          return <MovieCard movie={elem} key={elem.id} />;
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
