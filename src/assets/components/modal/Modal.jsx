import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Logo from "../../img/Logo.png";

export const Modal = ({
  type,
  status,
  category,
  amount,
  handleSubmit,
  closeModal,
}) => {
  const isTopup = type === "topup";
  const isService = type === "service";
  const isConfirmation = status === "confirmation";
  const isSuccess = status === "success";
  const isFailed = status === "failed";

  const getIcon = () => {
    if (isSuccess)
      return <FaCheckCircle size={60} className="text-green-500" />;
    if (isFailed) return <IoMdCloseCircle size={60} className="text-red-500" />;
    if (isConfirmation)
      return <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />;
  };

  const renderMessage = () => {
    if (isConfirmation) {
      return (
        <>
          <p className="mt-4 text-sm text-slate-500">Beli {category} senilai</p>
          <h5 className="text-xl font-bold text-black">
            Rp{amount.toLocaleString()} ?
          </h5>
        </>
      );
    }
    return (
      <>
        <p className="mt-4 text-sm text-slate-500">
          Pembayaran {category} sebesar
        </p>
        <h5 className="text-xl font-bold text-black">
          Rp{amount.toLocaleString()}
        </h5>
        <p className="text-xs text-slate-400">
          {isSuccess ? "berhasil" : "gagal"}
        </p>
      </>
    );
  };

  const renderButton = () => {
    if (isConfirmation) {
      return (
        <button
          type="button"
          className="mb-2 mt-5 text-sm font-semibold text-orange-600"
          onClick={handleSubmit}
        >
          Ya, lanjutkan {isTopup ? "Top Up" : "Bayar"}
        </button>
      );
    }
    return (
      <Link to="/" className="mb-2 mt-5 text-sm font-semibold text-orange-600">
        Kembali ke Beranda
      </Link>
    );
  };

  if (isTopup || isService) {
    return (
      <div className="fixed left-0 top-0 z-[4] flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
        <div className="flex w-[40%] max-w-[300px] flex-col items-center justify-center rounded-md bg-white p-8 text-center">
          {getIcon()}
          {renderMessage()}
          {renderButton()}
          {isConfirmation && (
            <button
              type="button"
              className="text-sm font-semibold text-slate-300"
              onClick={closeModal}
            >
              Batalkan
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
};
