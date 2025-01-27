import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux Action
import { getHistoryTransactionAction } from "../../../redux/actions/transaction/TransactionAction";

// Images
import Logo from "../../img/Logo.png";

// Icons
import { IoClose } from "react-icons/io5";

export const NavbarMobile = ({ closeNavbar }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="fixed left-0 top-0 z-[2] flex h-screen w-full flex-col bg-white">
      <div className="flex items-center justify-between border-b px-[5%] py-4">
        <Link to="/" className="mr-auto flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            loading="lazy"
            className="w-6 object-contain"
          />
          <p className="text-base font-semibold text-slate-600">SIMS PPOB</p>
        </Link>
        <button
          onClick={closeNavbar}
          className="rounded-md p-1 hover:bg-slate-100 active:bg-slate-200"
        >
          <IoClose size={25} className="text-black" />
        </button>
      </div>
      <div className="flex flex-col gap-4 px-[5%] pt-3">
        <Link
          to={"/top-up"}
          className={`${location.pathname === "/top-up" ? "text-orange-600" : "text-slate-700"} w-fit text-lg font-medium hover:text-orange-600`}
        >
          Top Up
        </Link>
        <Link
          to={"/history"}
          className={`${location.pathname === "/history" ? "text-orange-600" : "text-slate-700"} w-fit text-lg font-medium hover:text-orange-600`}
          onClick={() =>
            dispatch(getHistoryTransactionAction("?offset=0&limit=5"))
          }
        >
          Transaction
        </Link>
        <Link
          to={"/profile"}
          className={`${location.pathname === "/profile" ? "text-orange-600" : "text-slate-700"} w-fit text-lg font-medium hover:text-orange-600`}
        >
          Akun
        </Link>
      </div>
    </div>
  );
};
