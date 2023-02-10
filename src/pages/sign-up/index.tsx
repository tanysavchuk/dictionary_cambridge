import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-green-500">
      <Link to="/"> Home </Link>
      <Link to="/blog"> blog </Link>
      <Link to="/dashboard"> dashboard </Link>
      <div>Sign Up page</div>
    </div>
  );
};
export default SignUp;
