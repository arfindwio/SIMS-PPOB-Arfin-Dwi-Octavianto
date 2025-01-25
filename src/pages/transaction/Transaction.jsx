import React from "react";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";
import { SaldoCard } from "../../assets/components/user/SaldoCard";

// Images
import Listrik from "../../assets/img/Listrik.png";

// Icons
import { MdMoney } from "react-icons/md";

export const Transaction = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 pb-10 pt-20">
          <SaldoCard />

          <div className="mt-6 flex w-full flex-col">
            <p className="text-base text-slate-500">PemBayaran</p>
            <div className="flex items-center gap-2">
              <img
                src={Listrik}
                alt="Listrik Icon"
                loading="lazy"
                className="h-5 w-5 object-contain"
              />
              <h1 className="text-base font-semibold text-black">
                Listrik Prabayar
              </h1>
            </div>
            <div className="mt-8 flex w-full flex-col gap-2">
              <div className="mb-4 flex w-full items-center gap-1 rounded-md border py-3 pl-3">
                <MdMoney size={18} className="text-slate-700" />
                <input
                  type="number"
                  name="topUpAmount"
                  placeholder="masukkan nominal pembayaran"
                  className="w-full px-1 text-sm outline-none"
                />
              </div>
              <button className="w-full rounded-md border-2 border-white bg-orange-600 py-3 text-sm text-white hover:bg-red-600">
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
