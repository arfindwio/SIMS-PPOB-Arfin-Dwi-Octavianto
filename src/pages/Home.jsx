import React from "react";

// Components
import { Navbar } from "../assets/components/navbar/Navbar";

// Images
import ProfilePhoto from "../assets/img/ProfilePhoto.png";
import PBB from "../assets/img/PBB.png";
import Listrik from "../assets/img/Listrik.png";
import Pulsa from "../assets/img/Pulsa.png";
import PDAM from "../assets/img/PDAM.png";
import PGN from "../assets/img/PGN.png";
import Televisi from "../assets/img/Televisi.png";
import Musik from "../assets/img/Musik.png";
import Game from "../assets/img/Game.png";
import VoucherMakanan from "../assets/img/VoucherMakanan.png";
import Kurban from "../assets/img/Kurban.png";
import Zakat from "../assets/img/Zakat.png";
import PaketData from "../assets/img/PaketData.png";
import Banner1 from "../assets/img/Banner1.png";
import Banner2 from "../assets/img/Banner2.png";
import Banner3 from "../assets/img/Banner3.png";
import Banner4 from "../assets/img/Banner4.png";
import Banner5 from "../assets/img/Banner5.png";

// Icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white w-full">
        <div className="w-[90%] mx-auto max-w-7xl flex flex-col justify-center items-center pt-20 pb-10 gap-6">
          <div className="w-full flex justify-between">
            <div className="w-[40%] flex flex-col">
              <img src={ProfilePhoto} alt="Profile Photo" loading="lazy" className="rounded-full border aspect-square w-16 h-1w-16 object-cover" />
              <p className="text-base text-slate-500 mt-4">Selamat datang,</p>
              <h1 className="text-2xl text-black font-bold">Kristanto Wibowo</h1>
            </div>
            <div className={`w-[60%] p-5 rounded-md flex flex-col gap-4 bg-[url('/src/assets/img/Background-Saldo.png')] bg-no-repeat bg-center bg-cover overflow-hidden h-full`}>
              <p className="text-white text-base ">Saldo Anda</p>
              <div className="text-white flex items-center font-bold text-2xl gap-2">
                <h1>Rp</h1>
                {/* <p>10000</p> */}
                <p className="tracking-[5px] text-3xl">•••••••</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-white text-sm">Tutup Saldo</p>
                <IoEyeOffOutline size={15} className="text-white" />
              </div>
            </div>
          </div>
          <div className="w-full flex mt-6 flex-wrap justify-center items-start">
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={PBB} alt="PBB Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">PBB</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={Listrik} alt="Listrik Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Listrik</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={Pulsa} alt="Pulsa Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Pulsa</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={PDAM} alt="PDAM Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">PDAM</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={PGN} alt="PGN Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">PGN</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={Televisi} alt="Televisi Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Televisi</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={Musik} alt="Musik Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Musik</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={Game} alt="Game Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Game</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={VoucherMakanan} alt="Voucher Makanan Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Voucher Makanan</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={Kurban} alt="Kurban Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Kurban</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={Zakat} alt="Zakat Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Zakat</p>
            </div>
            <div className="w-1/12 flex flex-col gap-2 justify-center items-center">
              <img src={PaketData} alt="Paket Data Icon" className="w-fit aspect-square object-contain" />
              <p className="text-slate-500 text-sm text-center">Paket Data</p>
            </div>
          </div>
          <div className="w-full flex flex-col my-6">
            <h5 className="text-black font-semibold text-base">Temukan promo menarik</h5>
            <div className="flex gap-6 overflow-x-scroll no-horizontal-scroll pr-6">
              <img src={Banner1} alt="Banner 1" className="rounded-lg aspect-video w-[420px] object-contain" />
              <img src={Banner2} alt="Banner 2" className="rounded-lg aspect-video w-[420px] object-contain" />
              <img src={Banner3} alt="Banner 3" className="rounded-lg aspect-video w-[420px] object-contain" />
              <img src={Banner4} alt="Banner 4" className="rounded-lg aspect-video w-[420px] object-contain" />
              <img src={Banner5} alt="Banner 5" className="rounded-lg aspect-video w-[420px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
