import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../img/Logo.png";

export const Navbar = () => {
  return (
    <>
      <Link
        to="/"
        className="fixed z-10 w-full border-b bg-white py-4 shadow-sm"
      >
        <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between">
          <div className="mr-auto flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              className="w-6 object-contain"
            />
            <p className="text-base font-semibold text-slate-600">SIMS PPOB</p>
          </div>
          <div className="flex gap-10">
            <Link
              to={"/top-up"}
              className="text-base font-medium text-slate-700 hover:text-orange-600"
            >
              Top Up
            </Link>
            <Link
              to={"/history"}
              className="text-base font-medium text-slate-700 hover:text-orange-600"
            >
              Transaction
            </Link>
            <Link
              to={"/profile"}
              className="text-base font-medium text-slate-700 hover:text-orange-600"
            >
              Akun
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};
