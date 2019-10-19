import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { PostList } from "./PoostList";
import { Loader } from "./Loader";
import { Button } from "./Button";

const App = () => {
  const [state, setState] = useState({
    fullList: [],
    isLoaded: false,
    tenLists: [],
    numbers: 0
  });

  useEffect(() => {
    const get_posts = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let json = await response.json();
      setState(state => ({
        fullList: json,
        isLoaded: true,
        tenLists: json.slice(0, 10),
        numbers: 10
      }));
    };

    if (!state.isLoaded) get_posts();
  });

  const addPosts = () =>
    setState(state => {
      const { numbers, fullList } = state;
      return {
        ...state,
        tenLists: fullList.slice(numbers, numbers + 10),
        numbers: numbers + 10
      };
    });

  return state.isLoaded ? (
    <div className="App">
      <PostList posts={state.tenLists} />
      {state.numbers < state.fullList.length && <Button addPosts={addPosts} />}
    </div>
  ) : (
    <Loader />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
