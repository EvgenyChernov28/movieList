import React from "react";

const Comments = ({ currentMovieComments, onDeleteComment }) => {
  
  if (currentMovieComments.length === 0) return <div>коментариев еще нет</div>;

  return currentMovieComments[0].comments.map((comment) => {
    return (
      <div key={comment.commentId}>
        {comment.text}
        <button onClick={() => onDeleteComment(comment.commentId)}>
          удалить коммент
        </button>
      </div>
    );
  });
};

export default Comments;
