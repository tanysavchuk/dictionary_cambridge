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
    </div>
  );
}

export default App;
