import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "../pages/Home";
import { Login } from "../pages/auth/Login";
import { Registration } from "../pages/auth/Registration";
import { Profile } from "../pages/profile/Profile";
import { Transaction } from "../pages/transaction/Transaction";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Transaction */}
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
};
