import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";

import { PostListItem } from "./PostListItem";

let acumList = [];

export const PostList = ({ posts }) => {
  acumList = acumList.concat(posts);

  return (
    <div className="list">
      <ol>
        {acumList.map(post => (
          <PostListItem
            key={uuidv4()}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ol>
    </div>
  );
};
