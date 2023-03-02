import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-red-500">
      <Link to="/"> Home </Link>
      <Link to="/blog"> blog </Link>
      <Link to="/sign-up"> sign up </Link>
      <div>dashboard page</div>
    </div>
  );
};
export default Dashboard;
