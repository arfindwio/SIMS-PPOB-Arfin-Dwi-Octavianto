import React from "react";

// Images
import Logo from "../assets/img/Logo.png";
import Illustrasi from "../assets/img/IllustrasiLogin.png";

// Icons
import { MdAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const Login = () => {
  return (
    <>
      <div className="flex w-full h-full max-h-screen">
        <div className="w-1/2 m-auto">
          <form className="w-[65%] flex flex-col justify-center gap-8 items-center mx-auto">
            <div className="mx-auto flex gap-2 items-center">
              <img src={Logo} alt="Logo" className="w-8 object-contain" />
              <p className="font-semibold text-xl text-slate-600">SIMS PPOB</p>
            </div>
            <h1 className="w-2/3 font-bold text-3xl text-black text-center">Masuk atau buat akun untuk memulai</h1>
            <div className="flex flex-col gap-5 w-full py-6">
              <div className="pl-4 w-full border rounded-md py-2 flex gap-2 items-center">
                <MdAlternateEmail size={20} className="text-slate-400" />
                <input type="text" name="username" placeholder="masukkan email anda" className="outline-none w-full" />
              </div>
              <div className="pl-4 pr-8 w-full border rounded-md py-2 flex gap-2 items-center relative">
                <CiLock size={20} id="username" className="text-slate-400" />
                <input type="password" name="username" placeholder="masukkan password anda" className="outline-none w-full" />
                <IoEyeOutline size={20} className="text-slate-400 absolute right-3" />
                {/* <IoEyeOffOutline size={20} className="text-slate-400 absolute right-2" /> */}
              </div>
            </div>
            <button className="bg-orange-600 w-full text-white py-3 rounded-md hover:bg-red-600">Masuk</button>
            <div className="flex gap-1 items-center">
              <p className="text-sm text-slate-500">belum punya akun? registrasi</p>
              <p className="text-orange-600 text-sm font-semibold">di sini</p>
            </div>
          </form>
        </div>
        <div className="w-1/2 flex m-auto max-h-screen h-full bg-[#fff1f0]">
          <img src={Illustrasi} alt="Illustrasi" className="object-contain max-h-screen w-full h-full" />
        </div>
      </div>
    </>
  );
};
