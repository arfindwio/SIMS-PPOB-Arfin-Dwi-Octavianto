import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Login } from "../pages/auth/Login";
import { Registration } from "../pages/auth/Registration";
import { Profile } from "../pages/auth/Profile";
import { Home } from "../pages/Home";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
