import React from "react";

const CommentsForm = ({onNewComment}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onNewComment(event.currentTarget[0].value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <textarea type="text" name="name" />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default CommentsForm;
