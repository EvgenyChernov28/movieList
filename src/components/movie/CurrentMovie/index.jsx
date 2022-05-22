import React from "react";
import CommentsForm from "./CommentsForm/index";
import Comments from "./Comments/index";

const CurrentMovie = ({
  movie,
  onComment,
  onMovieId,
  currentMovieComments,
  deleteComment,
}) => {
  
  const onNewComment = (e) => {
    onComment(e);
  };
  const onDeleteComment = (idComment) => {
    deleteComment(idComment);
  };

  return (
    <div>
      <img src={movie.large_cover_image} alt="" />
      <div>
        {movie.title}, ({movie.year})
      </div>
      <div>
        <p>{movie.synopsis}</p>
      </div>
      <div>рейтинг: {movie.rating}/10</div>
      <CommentsForm onNewComment={onNewComment} />
      <Comments
        currentMovieComments={currentMovieComments}
        onDeleteComment={onDeleteComment}
      />
      <button onClick={onMovieId}>вернуться к списку фильмов</button>
    </div>
  );
};

export default CurrentMovie;
