import React from "react";
import styles from "./styles.module.css";

const CommentsForm = ({onNewComment}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onNewComment(event.currentTarget[0].value)
  }
  return (
    <form onSubmit={handleSubmit} className={styles.comment_form}>
      <label>
        <textarea type="text" name="name" />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default CommentsForm;
