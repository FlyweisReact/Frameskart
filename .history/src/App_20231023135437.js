/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import { ReactNotifications } from 'react-notifications-component'

// CSS
import './CSS/style.css'
import './CSS/Laptop.css'

const App = () => {
  return (
    <ReactNotifications  />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
