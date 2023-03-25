import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/sign-up";
import Grammar from "./pages/grammar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/grammar" element={<Grammar />} />
      </Routes>
      <div className="hidden bg-gradient-to-l from-pink-900 via-rose-700 to-rose-900 w-full mt-14"></div>
    </div>
  );
}

export default App;
