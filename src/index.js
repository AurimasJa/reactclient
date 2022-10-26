import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Home, Sandeliai, Login } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sandeliai" element={<Sandeliai />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
