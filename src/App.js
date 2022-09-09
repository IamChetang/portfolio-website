import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { Projects } from "./Components/Projects/Projects";
import "./common/styles/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/projects" exact element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
