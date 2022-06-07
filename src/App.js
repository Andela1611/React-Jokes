import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { typography } from "@mui/system";
//Routes
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar className="" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
