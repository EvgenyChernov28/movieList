import React from "react";
import styles from "./styles.module.css";

const Comments = ({ currentMovieComments, onDeleteComment }) => {

  const deleteComment = (comment) => {
    onDeleteComment(comment.commentId);
  };

  if (currentMovieComments.length === 0) return <div>коментариев еще нет</div>;

  return currentMovieComments[0].comments.map((comment) => {
    return (
      <div key={comment.commentId} className={styles.comments}>
        <div className={styles.comment}>
          {comment.text}
          <button onClick={() => deleteComment(comment)}>
            удалить коммент
          </button>
        </div>
      </div>
    );
  });
};

export default Comments;
