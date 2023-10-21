/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";

// CSS
import 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
