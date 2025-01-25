import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/img/Logo.png";
import Illustrasi from "../../assets/img/IllustrasiLogin.png";

// Icons
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const Registration = () => {
  return (
    <>
      <div className="flex w-full h-full max-h-screen">
        <div className="w-1/2 m-auto">
          <form className="w-[65%] flex flex-col justify-center gap-6 items-center mx-auto">
            <div className="mx-auto flex gap-2 items-center">
              <img src={Logo} alt="Logo" loading="lazy" className="w-8 object-contain" />
              <p className="font-semibold text-xl text-slate-600">SIMS PPOB</p>
            </div>
            <h1 className="w-2/3 font-bold text-3xl text-black text-center">Lengkapi data untuk membuat akun</h1>
            <div className="flex flex-col gap-5 w-full py-6">
              <div className="pl-4 w-full border rounded-md py-3 flex gap-2 items-center">
                <MdAlternateEmail size={20} className="text-slate-400" />
                <input type="text" name="username" placeholder="masukkan email anda" className="outline-none w-full text-sm" />
              </div>
              <div className="pl-4 w-full border rounded-md py-3 flex gap-2 items-center">
                <FaRegUser size={15} className="text-slate-400" />
                <input type="text" name="firstName" placeholder="nama depan" className="outline-none w-full text-sm" />
              </div>
              <div className="pl-4 w-full border rounded-md py-3 flex gap-2 items-center">
                <FaRegUser size={15} className="text-slate-400" />
                <input type="text" name="lastName" placeholder="nama belakang" className="outline-none w-full text-sm" />
              </div>
              <div className="pl-4 pr-8 w-full border rounded-md py-3 flex gap-2 items-center relative">
                <CiLock size={20} id="password" className="text-slate-400" />
                <input type="password" name="password" placeholder="buat password" className="outline-none w-full text-sm" />
                <IoEyeOutline size={20} className="text-slate-400 absolute right-3 cursor-pointer" />
                {/* <IoEyeOffOutline size={20} className="text-slate-400 absolute right-3 cursor-pointer" /> */}
              </div>
              <div className="pl-4 pr-8 w-full border rounded-md py-3 flex gap-2 items-center relative">
                <CiLock size={20} id="passwordConfirmation" className="text-slate-400" />
                <input type="password" name="passwordConfirmation" placeholder="konfirmasi password" className="outline-none w-full text-sm" />
                <IoEyeOutline size={20} className="text-slate-400 absolute right-3 cursor-pointer" />
                {/* <IoEyeOffOutline size={20} className="text-slate-400 absolute right-3 cursor-pointer" /> */}
              </div>
            </div>
            <button className="bg-orange-600 w-full text-white py-3 rounded-md hover:bg-red-600">Registrasi</button>
            <div className="flex gap-1 items-center">
              <p className="text-sm text-slate-500">sudah punya akun? login</p>
              <Link to={"/login"} className="text-orange-600 text-sm font-semibold">
                di sini
              </Link>
            </div>
          </form>
        </div>
        <div className="w-1/2 flex m-auto max-h-screen h-full bg-[#fff1f0]">
          <img src={Illustrasi} alt="Illustrasi" loading="lazy" className="object-contain max-h-screen w-full h-full" />
        </div>
      </div>
    </>
  );
};
