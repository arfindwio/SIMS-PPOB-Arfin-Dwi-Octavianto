import React from "react";

// Components
import { Navbar } from "../assets/components/navbar/Navbar";
import { SaldoCard } from "../assets/components/user/SaldoCard";

// Images
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

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-4 pb-10 pt-20 md:gap-6">
          <SaldoCard />
          <div className="mt-2 flex w-full flex-wrap items-start justify-center gap-2 md:mt-6 lg:gap-0">
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={PBB}
                alt="PBB Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                PBB
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={Listrik}
                alt="Listrik Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Listrik
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={Pulsa}
                alt="Pulsa Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Pulsa
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={PDAM}
                alt="PDAM Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                PDAM
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={PGN}
                alt="PGN Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                PGN
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={Televisi}
                alt="Televisi Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Televisi
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={Musik}
                alt="Musik Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Musik
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={Game}
                alt="Game Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Game
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={VoucherMakanan}
                alt="Voucher Makanan Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Voucher Makanan
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={Kurban}
                alt="Kurban Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Kurban
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={Zakat}
                alt="Zakat Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Zakat
              </p>
            </div>
            <div className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none">
              <img
                src={PaketData}
                alt="Paket Data Icon"
                className="aspect-square w-fit object-contain"
              />
              <p className="text-center text-xs text-slate-500 sm:text-sm">
                Paket Data
              </p>
            </div>
          </div>
          <div className="my-6 flex w-full flex-col">
            <h5 className="text-base font-semibold text-black">
              Temukan promo menarik
            </h5>
            <div className="no-horizontal-scroll flex gap-6 overflow-x-scroll pr-6">
              <img
                src={Banner1}
                alt="Banner 1"
                className="aspect-video w-[420px] rounded-lg object-contain"
              />
              <img
                src={Banner2}
                alt="Banner 2"
                className="aspect-video w-[420px] rounded-lg object-contain"
              />
              <img
                src={Banner3}
                alt="Banner 3"
                className="aspect-video w-[420px] rounded-lg object-contain"
              />
              <img
                src={Banner4}
                alt="Banner 4"
                className="aspect-video w-[420px] rounded-lg object-contain"
              />
              <img
                src={Banner5}
                alt="Banner 5"
                className="aspect-video w-[420px] rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
