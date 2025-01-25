import React from "react";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";

// Images
import ProfilePhoto from "../../assets/img/ProfilePhoto.png";

// Icons
import { FaPen } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white">
        <form className="mx-auto flex w-[60%] max-w-7xl flex-col items-center justify-center gap-6 pb-10 pt-20">
          <div className="h-3w-36 relative mx-auto w-36">
            <img
              src={ProfilePhoto}
              alt="Profile Photo"
              loading="lazy"
              className="mx-auto h-full w-full rounded-full object-cover"
            />
            <div className="absolute bottom-1 right-0 rounded-full border-2 border-slate-300 bg-white p-2">
              <FaPen size={15} className="text-black" />
            </div>
          </div>
          <h1 className="text-center text-3xl font-bold">Kristanto Wibowo</h1>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="email" className="text-base font-medium text-black">
              Email
            </label>
            <div className="flex w-full items-center gap-2 rounded-md border py-3 pl-4">
              <MdAlternateEmail size={20} className="text-slate-600" />
              <input
                type="email"
                name="username"
                id="email"
                placeholder="email"
                className="w-full text-sm outline-none placeholder:text-slate-600"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="firstName"
              className="text-base font-medium text-black"
            >
              Nama Depan
            </label>
            <div className="flex w-full items-center gap-2 rounded-md border py-3 pl-4">
              <FaRegUser size={15} className="text-slate-600" />
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="nama depan"
                className="w-full text-sm outline-none placeholder:text-slate-600"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-base font-medium text-black"
            >
              Nama Belakang
            </label>
            <div className="flex w-full items-center gap-2 rounded-md border py-3 pl-4">
              <FaRegUser size={15} className="text-slate-600" />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="nama belakang"
                className="w-full text-sm outline-none placeholder:text-slate-600"
              />
            </div>
          </div>
          <button className="w-full rounded-md border-2 border-white bg-orange-600 py-3 text-white hover:bg-red-600">
            Edit Profil
          </button>
          <button className="w-full rounded-md border-2 border-orange-600 bg-white py-3 text-orange-600 hover:bg-orange-600 hover:text-white">
            Logout
          </button>
        </form>
      </div>
    </>
  );
};
