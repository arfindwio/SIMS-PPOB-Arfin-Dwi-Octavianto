import React from "react";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";
import { SaldoCard } from "../../assets/components/user/SaldoCard";

export const History = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 pb-10 pt-20">
          <SaldoCard />
          <div className="mt-6 flex w-full flex-col gap-5">
            <p className="text-base font-medium text-black">Semua Transaksi</p>
            <div className="flex w-full items-start justify-between rounded-md border px-5 py-3">
              <div className="mr-auto flex flex-col gap-2">
                <h5 className="text-lg font-semibold text-green-500">
                  + Rp.10.000
                </h5>
                <div className="flex flex-wrap sm:gap-2">
                  <p className="mr-2 text-[10px] text-slate-300 sm:mr-0">
                    17 Agustus 2023
                  </p>
                  <p className="text-[10px] text-slate-300">13:10 WIB</p>
                </div>
              </div>
              <p className="text-end text-[10px] font-medium text-slate-600 sm:text-xs">
                Top Up Saldo
              </p>
            </div>
            <div className="flex w-full items-start justify-between rounded-md border px-5 py-4">
              <div className="mr-auto flex flex-col gap-2">
                <h5 className="text-lg font-semibold text-green-500">
                  + Rp.10.000
                </h5>
                <div className="flex flex-wrap sm:gap-2">
                  <p className="mr-2 text-[10px] text-slate-300 sm:mr-0">
                    17 Agustus 2023
                  </p>
                  <p className="text-[10px] text-slate-300">13:10 WIB</p>
                </div>
              </div>
              <p className="text-end text-[10px] font-medium text-slate-600 sm:text-xs">
                Top Up Saldo
              </p>
            </div>
            <button className="text-center text-sm font-semibold text-orange-500 hover:text-red-500 active:text-red-600">
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
