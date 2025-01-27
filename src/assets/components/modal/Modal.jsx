import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../img/Logo.png";

// Icons
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export const Modal = ({
  type,
  category,
  amount,
  status,
  handleSubmit,
  closeModal,
}) => {
  return (
    <>
      {type === "topup" && status === "confirmation" && (
        <div className="fixed left-0 top-0 z-[4] flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
          <div className="flex w-[40%] max-w-[300px] flex-col items-center justify-center rounded-md bg-white p-8 text-center">
            <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
            <p className="mt-4 text-sm text-slate-500">
              Anda yakin untuk {category} sebesar
            </p>
            <h5 className="text-xl font-bold text-black">
              Rp{amount.toLocaleString()} ?
            </h5>
            <button
              type="button"
              className="mb-2 mt-5 text-sm font-semibold text-orange-600"
              onClick={handleSubmit}
            >
              Ya, lanjut Top Up
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-slate-300"
              onClick={closeModal}
            >
              Batalkan
            </button>
          </div>
        </div>
      )}

      {type === "topup" && status === "success" && (
        <div className="fixed left-0 top-0 z-[4] flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
          <div className="flex w-[40%] max-w-[300px] flex-col items-center justify-center rounded-md bg-white p-8 text-center">
            <FaCheckCircle size={60} className="text-center text-green-500" />
            <p className="mt-4 text-sm text-slate-500">{category} sebesar</p>
            <h5 className="text-xl font-bold text-black">
              Rp{amount.toLocaleString()}
            </h5>
            <p className="text-xs text-slate-400">berhasil</p>

            <Link
              to={"/"}
              className="mb-2 mt-5 text-sm font-semibold text-orange-600"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      )}

      {type === "topup" && status === "failed" && (
        <div className="fixed left-0 top-0 z-[4] flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
          <div className="flex w-[40%] max-w-[300px] flex-col items-center justify-center rounded-md bg-white p-8 text-center">
            <IoMdCloseCircle size={60} className="text-center text-red-500" />
            <p className="mt-4 text-sm text-slate-500">{category} sebesar</p>
            <h5 className="text-xl font-bold text-black">
              Rp{amount.toLocaleString()}
            </h5>
            <p className="text-xs text-slate-400">gagal</p>

            <Link
              to={"/"}
              className="mb-2 mt-5 text-sm font-semibold text-orange-600"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      )}

      {type === "service" && status === "confirmation" && (
        <div className="fixed left-0 top-0 z-[4] flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
          <div className="flex w-[40%] max-w-[300px] flex-col items-center justify-center rounded-md bg-white p-8 text-center">
            <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
            <p className="mt-4 text-sm text-slate-500">
              Beli {category} senilai
            </p>
            <h5 className="text-xl font-bold text-black">
              Rp{amount.toLocaleString()} ?
            </h5>
            <button
              type="button"
              className="mb-2 mt-5 text-sm font-semibold text-orange-600"
              onClick={handleSubmit}
            >
              Ya, lanjutkan Bayar
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-slate-300"
              onClick={closeModal}
            >
              Batalkan
            </button>
          </div>
        </div>
      )}

      {type === "service" && status === "success" && (
        <div className="fixed left-0 top-0 z-[4] flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
          <div className="flex w-[40%] max-w-[300px] flex-col items-center justify-center rounded-md bg-white p-8 text-center">
            <FaCheckCircle size={60} className="text-center text-green-500" />
            <p className="mt-4 text-sm text-slate-500">
              Pembayaran {category} sebesar
            </p>
            <h5 className="text-xl font-bold text-black">
              Rp{amount.toLocaleString()}
            </h5>
            <p className="text-xs text-slate-400">berhasil</p>

            <Link
              to={"/"}
              className="mb-2 mt-5 text-sm font-semibold text-orange-600"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      )}

      {type === "service" && status === "failed" && (
        <div className="fixed left-0 top-0 z-[4] flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
          <div className="flex w-[40%] max-w-[300px] flex-col items-center justify-center rounded-md bg-white p-8 text-center">
            <IoMdCloseCircle size={60} className="text-center text-red-500" />
            <p className="mt-4 text-sm text-slate-500">
              Pembayaran {category} sebesar
            </p>
            <h5 className="text-xl font-bold text-black">
              Rp{amount.toLocaleString()}
            </h5>
            <p className="text-xs text-slate-400">gagal</p>

            <Link
              to={"/"}
              className="mb-2 mt-5 text-sm font-semibold text-orange-600"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
