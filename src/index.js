import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./routs/header";
import Services from "./routs/services";
import About from "./routs/about";
import Contact from "./routs/contact";
import SingUp from "./routs/singUp";
import LogIn from "./routs/logIn";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="singUp" element={<SingUp />} />
        <Route path="logIn" element={<LogIn />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);