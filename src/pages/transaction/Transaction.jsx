import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

// Redux Action
import { postTransactionAction } from "../../redux/actions/transaction/TransactionAction";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";
import { SaldoCard } from "../../assets/components/user/SaldoCard";
import { Modal } from "../../assets/components/modal/Modal";

// Icons
import { MdMoney } from "react-icons/md";

import { showLoadingToast } from "../../helper/ToastHelper";

export const Transaction = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");

  const serviceDetail = useSelector(
    (state) => state.information?.serviceDetail,
  );

  const handleSubmit = async () => {
    const loadingToastId = showLoadingToast("Loading...");

    const topUp = await dispatch(
      postTransactionAction({ service_code: serviceDetail.service_code }),
    );

    toast.dismiss(loadingToastId);

    if (topUp.status === 0) {
      setShowModal(true);
      setStatus("success");
    }

    if (topUp.status !== 0) {
      setShowModal(true);
      setStatus("failed");
    }
  };

  const handleServiceClick = () => {
    setShowModal(true);
    setStatus("confirmation");
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus("");
  };
  return (
    <>
      <Navbar />

      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 pb-10 pt-20">
          <SaldoCard />

          <div className="mt-6 flex w-full flex-col">
            <p className="text-base text-slate-500">PemBayaran</p>
            <div className="flex items-center gap-2">
              <img
                src={serviceDetail.service_icon}
                alt={`${serviceDetail.service_name} Icon`}
                loading="lazy"
                className="h-5 w-5 object-contain"
              />
              <h1 className="text-base font-semibold text-black">
                {serviceDetail.service_name}
              </h1>
            </div>
            <div className="mt-8 flex w-full flex-col gap-2">
              <div className="mb-4 flex w-full items-center gap-1 rounded-md border py-3 pl-3">
                <MdMoney size={18} className="text-slate-700" />
                <p
                  type="number"
                  name="topUpAmount"
                  placeholder="masukkan nominal pembayaran"
                  className="w-full px-1 text-sm outline-none"
                >
                  {serviceDetail.service_tariff.toLocaleString()}
                </p>
              </div>
              <button
                type="button"
                className="w-full rounded-md border-2 border-white bg-orange-600 py-3 text-sm text-white hover:bg-red-600"
                onClick={handleServiceClick}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          type={"service"}
          category={serviceDetail.service_name}
          amount={serviceDetail.service_tariff}
          status={status}
          handleSubmit={handleSubmit}
          closeModal={closeModal}
        />
      )}
    </>
  );
};
