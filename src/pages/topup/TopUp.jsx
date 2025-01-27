import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

// Redux Action
import { postTopUpAction } from "../../redux/actions/transaction/TransactionAction";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";
import { SaldoCard } from "../../assets/components/user/SaldoCard";
import { Modal } from "../../assets/components/modal/Modal";

// Icons
import { MdMoney } from "react-icons/md";

// Helper
import { showLoadingToast } from "../../helper/ToastHelper";

const buttonGroups = [
  {
    buttons: [{ value: 10000 }, { value: 20000 }, { value: 50000 }],
  },
  {
    buttons: [{ value: 100000 }, { value: 250000 }, { value: 500000 }],
  },
];

export const TopUp = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const [topUpAmount, setTopUpAmount] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setTopUpAmount(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToastId = showLoadingToast("Loading...");

    if (topUpAmount === "" || topUpAmount === 0) return;
    if (topUpAmount < 10000 || topUpAmount > 1000000) return;

    const topUp = await dispatch(
      postTopUpAction({ top_up_amount: Number(topUpAmount) }),
    );
    toast.dismiss(loadingToastId);

    if (topUp.status !== 0) {
      setShowModal(true);
      setStatus("failed");
    }

    if (topUp.status === 0) {
      setShowModal(true);
      setStatus("success");
    }
  };

  const handleTopUpClick = () => {
    if (topUpAmount >= 10000 && topUpAmount <= 1000000) {
      setShowModal(true);
      setStatus("confirmation");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus("");
  };

  const ButtonGroupComponent = () => {
    return (
      <>
        {buttonGroups.map((group, index) => (
          <div
            className="flex w-1/2 flex-wrap items-center justify-between gap-2 sm:w-[49.5%] sm:gap-0 lg:w-full"
            key={index}
          >
            {group.buttons.map((nominal, nominalIndex) => (
              <button
                key={nominalIndex}
                type="button"
                className="w-full rounded-md border py-3 text-sm text-slate-600 hover:bg-slate-50 active:bg-slate-100 sm:w-[32%]"
                onClick={() => setTopUpAmount(nominal.value)}
              >
                Rp{nominal.value.toLocaleString()}
              </button>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 pb-10 pt-20">
          <SaldoCard />

          <div className="mt-6 flex flex-col">
            <p className="text-base text-slate-500">Silahkan masukan</p>
            <h1 className="text-2xl font-bold text-black">Nominal Top Up</h1>
            <form className="mt-8 flex flex-col items-center justify-between lg:flex-row">
              <div className="flex w-full flex-col gap-4 lg:w-[73%]">
                <div className="order-1 flex w-full items-center gap-1 rounded-md border py-3 pl-3 lg:order-none">
                  <MdMoney size={18} className="text-slate-700" />
                  <input
                    type="number"
                    name="nominalTopUp"
                    placeholder="masukkan nominal"
                    value={topUpAmount}
                    onChange={handleChange}
                    className="w-full px-1 text-sm outline-none"
                  />
                </div>
                <div className="order-2 flex w-full flex-row justify-between gap-2 lg:hidden lg:w-[25%]">
                  {ButtonGroupComponent()}
                </div>
                <button
                  type="button"
                  className={`${topUpAmount === "" || topUpAmount === 0 || topUpAmount < 10000 || topUpAmount > 1000000 ? "bg-slate-300" : "bg-orange-600 hover:bg-red-600"} order-3 w-full rounded-md border-2 border-white py-3 text-sm text-white lg:order-none`}
                  disabled={
                    topUpAmount === "" ||
                    topUpAmount === 0 ||
                    topUpAmount < 10000 ||
                    topUpAmount > 1000000
                  }
                  onClick={handleTopUpClick}
                >
                  Top Up
                </button>
              </div>
              <div className="hidden w-full flex-row gap-4 lg:flex lg:w-[25%] lg:flex-col">
                {ButtonGroupComponent()}
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          type={"topup"}
          category={"Top Up"}
          amount={topUpAmount}
          status={status}
          handleSubmit={handleSubmit}
          closeModal={closeModal}
        />
      )}
    </>
  );
};
