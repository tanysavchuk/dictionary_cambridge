import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-blue-300">
      <Link to="/blog"> blog </Link>
      <Link to="/sign-up"> sign up </Link>
      <Link to="/dashboard"> dashboard </Link>
      <div>Home page</div>
    </div>
  );
};
export default Home;
