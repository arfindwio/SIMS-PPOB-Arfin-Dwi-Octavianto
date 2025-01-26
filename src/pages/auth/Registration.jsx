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
      <div className="flex h-screen w-full">
        <div className="m-auto w-full md:w-1/2">
          <form className="mx-auto flex w-[80%] flex-col items-center justify-center gap-3 sm:w-[70%] md:w-[65%] md:gap-4 xl:gap-6">
            <div className="mx-auto flex items-center gap-2">
              <img
                src={Logo}
                alt="Logo"
                loading="lazy"
                className="w-6 object-contain md:w-8"
              />
              <p className="text-lg font-semibold text-slate-600 md:text-xl">
                SIMS PPOB
              </p>
            </div>
            <h1 className="w-full text-center text-2xl font-bold text-black lg:w-3/4 xl:w-2/3 xl:text-3xl">
              Lengkapi data untuk membuat akun
            </h1>
            <div className="flex w-full flex-col gap-3 py-3 lg:gap-5">
              <div className="flex w-full items-center gap-2 rounded-md border py-3 pl-4">
                <MdAlternateEmail size={20} className="text-slate-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="masukkan email anda"
                  className="w-full text-sm outline-none"
                />
              </div>
              <div className="flex w-full items-center gap-2 rounded-md border py-3 pl-4">
                <FaRegUser size={15} className="text-slate-400" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="nama depan"
                  className="w-full text-sm outline-none"
                />
              </div>
              <div className="flex w-full items-center gap-2 rounded-md border py-3 pl-4">
                <FaRegUser size={15} className="text-slate-400" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="nama belakang"
                  className="w-full text-sm outline-none"
                />
              </div>
              <div className="relative flex w-full items-center gap-2 rounded-md border py-3 pl-4 pr-8">
                <CiLock size={20} id="password" className="text-slate-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="buat password"
                  className="w-full text-sm outline-none"
                />
                {/* <IoEyeOutline
                  size={20}
                  className="absolute right-3 cursor-pointer text-slate-400"
                /> */}
                <IoEyeOffOutline
                  size={20}
                  className="absolute right-3 cursor-pointer text-slate-400"
                />
              </div>
              <div className="relative flex w-full items-center gap-2 rounded-md border py-3 pl-4 pr-8">
                <CiLock
                  size={20}
                  id="passwordConfirmation"
                  className="text-slate-400"
                />
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="konfirmasi password"
                  className="w-full text-sm outline-none"
                />
                {/* <IoEyeOutline
                  size={20}
                  className="absolute right-3 cursor-pointer text-slate-400"
                /> */}
                <IoEyeOffOutline
                  size={20}
                  className="absolute right-3 cursor-pointer text-slate-400"
                />
              </div>
            </div>
            <button className="w-full rounded-md bg-orange-600 py-3 text-sm text-white hover:bg-red-600">
              Registrasi
            </button>
            <div className="flex items-center gap-1">
              <p className="text-sm text-slate-500">sudah punya akun? login</p>
              <Link
                to={"/login"}
                className="text-sm font-semibold text-orange-600"
              >
                di sini
              </Link>
            </div>
          </form>
        </div>
        <div className="m-auto hidden h-full max-h-screen w-1/2 bg-[#fff1f0] md:flex">
          <img
            src={Illustrasi}
            alt="Illustrasi"
            loading="lazy"
            className="h-full max-h-screen w-full object-contain"
          />
        </div>
      </div>
    </>
  );
};
