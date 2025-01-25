import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../img/Logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="bg-white w-full border-b shadow-sm py-4 fixed z-10">
        <div className="max-w-7xl w-[90%] flex mx-auto justify-between items-center">
          <div className="flex gap-2 items-center mr-auto">
            <img src={Logo} alt="Logo" loading="lazy" className="w-6 object-contain" />
            <p className="font-semibold text-base text-slate-600">SIMS PPOB</p>
          </div>
          <div className="flex gap-10">
            <Link to={"/"} className="text-slate-700 text-base font-medium hover:text-orange-600">
              Top Up
            </Link>
            <Link to={"/"} className="text-slate-700 text-base font-medium hover:text-orange-600">
              Transaction
            </Link>
            <Link to={"/"} className="text-slate-700 text-base font-medium hover:text-orange-600">
              Akun
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
