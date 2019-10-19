import React from "react";

export const PostListItem = ({ id, title, body }) => {
  return (
    <li id={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};
