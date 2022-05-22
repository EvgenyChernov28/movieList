import React, { useState } from "react";
import MoviePage from "./pages/MoviePage";
import "./App.css";

function App() {
  const [movieComments, setMovieComments] = useState([
    { movieId: 42233, comments: [{ commentId: 1, text: "null" }] },
  ]);

  const newMovieComment = (comment, movieId) => {
    let updateComment = JSON.parse(JSON.stringify(movieComments));

    const getCommentId = () => {
      if (movieComments.find((elem) => elem.movieId === movieId)) {
        const arr = movieComments.filter(
          (element) => element.movieId === movieId
        );
        if (arr[0].comments.length !== 0) {
          return arr[0].comments[arr[0].comments.length - 1].commentId + 1;
        } else return 1;
      } else return 1;
    };

    if (updateComment.find((elem) => elem.movieId === movieId)) {
      updateComment.forEach((element) => {
        if (element.movieId === movieId) {
          element.comments.push({ commentId: getCommentId(), text: comment });
        }
      });
      setMovieComments(updateComment);
    } else {
      updateComment.push({
        movieId,
        comments: [{ commentId: getCommentId(), text: comment }],
      });
      setMovieComments(updateComment);
    }
  };

  const setDeleteComment = (idComment, movieId) => {
    let updateComment = JSON.parse(JSON.stringify(movieComments));
    if (updateComment.find((elem) => elem.movieId === movieId)) {
      updateComment.forEach((element) => {
        if (element.movieId === movieId) {
          let deletedIndex
          element.comments.forEach(
            (commentsElem, index) => {
              if(commentsElem.commentId === idComment){
                deletedIndex = index
              }
            }
          );
          element.comments.splice(deletedIndex, 1);
        }
      });
      setMovieComments(updateComment);
    }
  };

  return (
    <div className="App">
      <MoviePage
        movieComments={movieComments}
        newMovieComment={newMovieComment}
        setDeleteComment={setDeleteComment}
      />
    </div>
  );
}

export default App;
