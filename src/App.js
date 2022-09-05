import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/projects" exact element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
