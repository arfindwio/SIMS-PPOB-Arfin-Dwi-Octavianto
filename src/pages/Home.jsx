import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Redux Reducer
import { setServiceDetail } from "../redux/reducer/information/InformationSlice";

// Components
import { Navbar } from "../assets/components/navbar/Navbar";
import { SaldoCard } from "../assets/components/user/SaldoCard";

export const Home = () => {
  const dispatch = useDispatch();

  const bannerData = useSelector((state) => state.information?.banner);
  const serviceData = useSelector((state) => state.information?.services);

  const transactionService = (service) => {
    dispatch(setServiceDetail(service));
  };
  return (
    <>
      <Navbar />

      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-4 pb-10 pt-20 md:gap-6">
          <SaldoCard />
          <div className="mt-2 flex w-full flex-wrap items-start justify-center gap-2 md:mt-6 lg:gap-0">
            {serviceData?.map((service, index) => {
              return (
                <Link
                  to={"/transaction"}
                  key={index}
                  className="flex w-fit max-w-[70px] flex-col items-center justify-center gap-1 sm:gap-2 md:w-1/12 lg:max-w-none"
                  onClick={() => transactionService(service)}
                >
                  <img
                    src={service.service_icon}
                    alt={`${service.service_name} Icon`}
                    className="aspect-square w-fit object-contain"
                  />
                  <p className="w-[80%] break-words text-center text-xs text-slate-500 sm:text-sm">
                    {service.service_name}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="my-6 flex w-full flex-col">
            <h5 className="text-base font-semibold text-black">
              Temukan promo menarik
            </h5>
            <div className="no-horizontal-scroll flex gap-6 overflow-x-scroll pr-6">
              {bannerData.map((banner, index) => {
                return (
                  <img
                    key={index}
                    src={banner.banner_image}
                    alt={banner.banner_name}
                    className="aspect-video w-[420px] rounded-lg object-contain"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
