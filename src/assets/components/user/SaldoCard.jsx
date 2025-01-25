import React from "react";

// Images
import ProfilePhoto from "../../img/ProfilePhoto.png";

// Icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const SaldoCard = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[40%] flex-col">
        <img
          src={ProfilePhoto}
          alt="Profile Photo"
          loading="lazy"
          className="h-1w-16 aspect-square w-16 rounded-full border object-cover"
        />
        <p className="mt-4 text-base text-slate-500">Selamat datang,</p>
        <h1 className="text-2xl font-bold text-black">Kristanto Wibowo</h1>
      </div>
      <div
        className={`flex h-full w-[60%] flex-col gap-2 overflow-hidden rounded-md bg-[url('/src/assets/img/Background-Saldo.png')] bg-cover bg-center bg-no-repeat p-5`}
      >
        <p className="text-base text-white">Saldo Anda</p>
        <div className="flex items-center gap-2 text-2xl font-bold text-white">
          <h1>Rp</h1>
          {/* <p>10000</p> */}
          <p className="text-3xl tracking-[5px]">•••••••</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-white">Tutup Saldo</p>
          <IoEyeOffOutline size={15} className="cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};
