import React, { useState } from "react";
import Comment from "../components/blog/Comment";
import TodoList from "../components/blog/TodoList";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="max-w-7xl mx-auto my-3">
      <h1 className="text-4xl font-bold text-gray-700 my-3">Mon blog</h1>
      <TodoList />
      <Comment />
    </div>
  );
};
export default Blog;
