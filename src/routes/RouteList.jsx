import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "../pages/Home";
import { Login } from "../pages/auth/Login";
import { Registration } from "../pages/auth/Registration";
import { Profile } from "../pages/profile/Profile";
import { Transaction } from "../pages/transaction/Transaction";
import { TopUp } from "../pages/topup/TopUp";
import { History } from "../pages/transaction/History";

// Components
import { TokenProtected } from "../assets/components/protected/TokenProtected";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TokenProtected element={<Home />} />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* Profile */}
        <Route
          path="/profile"
          element={<TokenProtected element={<Profile />} />}
        />

        {/* Transaction */}
        <Route
          path="/transaction"
          element={<TokenProtected element={<Transaction />} />}
        />
        <Route
          path="/history"
          element={<TokenProtected element={<History />} />}
        />

        {/* Topup */}
        <Route
          path="/top-up"
          element={<TokenProtected element={<TopUp />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
