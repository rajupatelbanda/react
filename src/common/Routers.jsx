import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Routers = () => {
  return;
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-movie" element={<CreateMovie />}></Route>
      </Routes>
    </BrowserRouter>
  </>;
};

export default Routers;
