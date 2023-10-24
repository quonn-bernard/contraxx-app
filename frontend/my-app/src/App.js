import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Registration from "./pages/Registration/Registration.js";
import About from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
