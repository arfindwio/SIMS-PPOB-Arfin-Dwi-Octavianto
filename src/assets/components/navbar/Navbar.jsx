import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux Action
import { getHistoryTransactionAction } from "../../../redux/actions/transaction/TransactionAction";

// Components
import { NavbarMobile } from "./NavbarMobile";

// Images
import Logo from "../../img/Logo.png";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [isMobileNavbarVisible, setMobileNavbarVisible] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbarVisible(!isMobileNavbarVisible);
  };

  useEffect(() => {
    isMobileNavbarVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMobileNavbarVisible]);

  return (
    <>
      <div className="fixed z-[1] w-full border-b bg-white py-4 shadow-sm">
        <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between">
          <Link to="/" className="mr-auto flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              className="w-6 object-contain"
            />
            <p className="text-base font-semibold text-slate-600">SIMS PPOB</p>
          </Link>
          <div className="hidden gap-10 sm:flex">
            <Link
              to={"/top-up"}
              className={`${location.pathname === "/top-up" ? "text-orange-600" : "text-slate-700"} text-base font-medium hover:text-orange-600`}
            >
              Top Up
            </Link>
            <Link
              to={"/history"}
              className={`${location.pathname === "/history" ? "text-orange-600" : "text-slate-700"} text-base font-medium hover:text-orange-600`}
              onClick={() =>
                dispatch(getHistoryTransactionAction("?offset=0&limit=5"))
              }
            >
              Transaction
            </Link>
            <Link
              to={"/profile"}
              className={`${location.pathname === "/profile" ? "text-orange-600" : "text-slate-700"} text-base font-medium hover:text-orange-600`}
            >
              Akun
            </Link>
          </div>
          <button
            onClick={toggleMobileNavbar}
            className="rounded-md p-2 hover:bg-slate-100 active:bg-slate-200 sm:hidden"
          >
            <GiHamburgerMenu size={16} className="text-slate-600" />
          </button>
        </div>
      </div>
      {isMobileNavbarVisible && (
        <NavbarMobile closeNavbar={toggleMobileNavbar} />
      )}
    </>
  );
};
