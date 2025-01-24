import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};
