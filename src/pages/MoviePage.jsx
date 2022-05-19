import React, { useState, useEffect } from "react";

import MovieCard from "../components/movie/MovieCard"
import Preloader from "../components/common/preloader/Preloader"
import Pagination from "../components/common/pagination/Pagination"

import styles from "./moviePage.module.css";

import { movieAPI } from "../API/getMovie";

const MoviePage = (props)=> {
  const [moviesList, setMoviesList] = useState();
  useEffect(() => {
    movieAPI.getMovieList().then(response => {
      setMoviesList(response.data)
    })
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (pageNumber) => {
    debugger
      movieAPI.getMovieList(pageNumber).then(response => {
        setMoviesList(response.data)
        setCurrentPage(pageNumber)
      })
  };

  if(!moviesList) return <Preloader />

	return (<div>
    <div className={`${styles.movies} ${styles.moviesPage}`}>{moviesList.movies.map(elem => {return <MovieCard movie={elem} key={elem.id}/>} )}</div>
    <Pagination totalUsersCount={moviesList.movie_count} pageSize={10} currentPage={currentPage} onPageChange={onPageChange} portionSize={10}/>
  </div>);
};

export default MoviePage;
