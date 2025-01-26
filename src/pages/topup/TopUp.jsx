import React from "react";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";
import { SaldoCard } from "../../assets/components/user/SaldoCard";

// Icons
import { MdMoney } from "react-icons/md";

const buttonGroups = [
  {
    buttons: [
      { value: "Rp10.000" },
      { value: "Rp20.000" },
      { value: "Rp50.000" },
    ],
  },
  {
    buttons: [
      { value: "Rp100.000" },
      { value: "Rp250.000" },
      { value: "Rp500.000" },
    ],
  },
];

export const TopUp = () => {
  const ButtonGroupComponent = () => {
    return (
      <>
        {buttonGroups.map((group, index) => (
          <div
            className="flex w-1/2 flex-wrap items-center justify-between gap-2 sm:w-[49.5%] sm:gap-0 lg:w-full"
            key={index}
          >
            {group.buttons.map((nominal, nominalIndex) => (
              <button
                key={nominalIndex}
                className="w-full rounded-md border py-3 text-sm text-slate-600 hover:bg-slate-50 active:bg-slate-100 sm:w-[32%]"
              >
                {nominal.value}
              </button>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 pb-10 pt-20">
          <SaldoCard />

          <div className="mt-6 flex flex-col">
            <p className="text-base text-slate-500">Silahkan masukan</p>
            <h1 className="text-2xl font-bold text-black">Nominal Top Up</h1>
            <div className="mt-8 flex flex-col items-center justify-between lg:flex-row">
              <div className="flex w-full flex-col gap-4 lg:w-[73%]">
                <div className="order-1 flex w-full items-center gap-1 rounded-md border py-3 pl-3 lg:order-none">
                  <MdMoney size={18} className="text-slate-700" />
                  <input
                    type="number"
                    name="nominalTopUp"
                    placeholder="masukkan nominal"
                    className="w-full px-1 text-sm outline-none"
                  />
                </div>
                <div className="order-2 flex w-full flex-row justify-between gap-2 lg:hidden lg:w-[25%]">
                  {ButtonGroupComponent()}
                </div>
                <button className="order-3 w-full rounded-md border-2 border-white bg-orange-600 py-3 text-sm text-white hover:bg-red-600 lg:order-none">
                  Top Up
                </button>
              </div>
              <div className="hidden w-full flex-row gap-4 lg:flex lg:w-[25%] lg:flex-col">
                {ButtonGroupComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
