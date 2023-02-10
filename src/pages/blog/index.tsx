import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-gray-500">
      <Link to="/"> home </Link>
      <Link to="/sign-up"> sign up </Link>
      <Link to="/dashboard"> dashboard </Link>
      <div>Blog page</div>
    </div>
  );
};
export default Blog;
