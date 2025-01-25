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

      <div className="bg-white mx-auto max-w-7xl">
        <form className="w-[60%] mx-auto flex flex-col justify-center items-center pt-20 pb-10 gap-6">
          <div className="w-36 h-3w-36 relative mx-auto">
            <img src={ProfilePhoto} alt="Profile Photo" loading="lazy" className=" rounded-full object-cover w-full h-full mx-auto" />
            <div className="bg-white right-0 border-2 border-slate-300 p-2 bottom-1 absolute rounded-full">
              <FaPen size={15} className="text-black" />
            </div>
          </div>
          <h1 className="font-bold text-3xl text-center">Kristanto Wibowo</h1>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email" className="text-base text-black font-medium">
              Email
            </label>
            <div className="pl-4 w-full border rounded-md py-3 flex gap-2 items-center">
              <MdAlternateEmail size={20} className="text-slate-600" />
              <input type="email" name="username" id="email" placeholder="email" className="outline-none w-full text-sm placeholder:text-slate-600" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="firstName" className="text-base text-black font-medium">
              Nama Depan
            </label>
            <div className="pl-4 w-full border rounded-md py-3 flex gap-2 items-center">
              <FaRegUser size={15} className="text-slate-600" />
              <input type="text" name="firstName" id="firstName" placeholder="nama depan" className="outline-none w-full text-sm placeholder:text-slate-600" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="lastName" className="text-base text-black font-medium">
              Nama Belakang
            </label>
            <div className="pl-4 w-full border rounded-md py-3 flex gap-2 items-center">
              <FaRegUser size={15} className="text-slate-600" />
              <input type="text" name="lastName" id="lastName" placeholder="nama belakang" className="outline-none w-full text-sm placeholder:text-slate-600" />
            </div>
          </div>
          <button className="bg-orange-600 w-full text-white py-3 border-2 border-white rounded-md hover:bg-red-600">Edit Profil</button>
          <button className="bg-white w-full py-3 border-2 border-orange-600 text-orange-600 rounded-md hover:bg-orange-600 hover:text-white">Logout</button>
        </form>
      </div>
    </>
  );
};
