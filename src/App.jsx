import React, { Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./containers/Home";
import "./App.css";
import Details from "./containers/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":pokemon/detail" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
