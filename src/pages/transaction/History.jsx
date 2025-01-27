import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux Action
import { getHistoryTransactionAction } from "../../redux/actions/transaction/TransactionAction";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";
import { SaldoCard } from "../../assets/components/user/SaldoCard";

export const History = () => {
  const dispatch = useDispatch();

  const historyData = useSelector((state) => state.transaction?.history);

  const [showMore, setShowMore] = useState(true);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);

    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes} WIB`;

    return { formattedDate, formattedTime };
  };

  const handleShowMore = async () => {
    const result = await dispatch(
      getHistoryTransactionAction(
        `?offset=${Number(historyData.offset) + 5}&limit=5`,
      ),
    );

    if (result === 0) return setShowMore(false);
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 pb-10 pt-20">
          <SaldoCard />
          <div className="mt-6 flex w-full flex-col gap-5">
            <p className="text-base font-medium text-black">Semua Transaksi</p>
            {historyData?.records.length ? (
              historyData?.records?.map((history, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-full items-start justify-between rounded-md border px-5 py-3"
                  >
                    <div className="mr-auto flex flex-col gap-2">
                      <h5
                        className={`${history.transaction_type === "TOPUP" ? "text-green-500" : "text-red-500"} text-lg font-semibold`}
                      >
                        {history.transaction_type === "TOPUP" ? "+ " : "- "}
                        Rp.{history.total_amount}
                      </h5>
                      <div className="flex flex-wrap sm:gap-2">
                        <p className="mr-2 text-[10px] text-slate-300 sm:mr-0">
                          {formatDate(history.created_on).formattedDate}
                        </p>
                        <p className="text-[10px] text-slate-300">
                          {formatDate(history.created_on).formattedTime}
                        </p>
                      </div>
                    </div>
                    <p className="text-end text-[10px] font-medium text-slate-600 sm:text-xs">
                      {history.description}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="my-4 text-center text-sm text-slate-400">
                Maaf tidak ada history transaksi saat ini
              </p>
            )}
            {historyData?.records?.length && showMore && (
              <button
                className="text-center text-sm font-semibold text-orange-500 hover:text-red-500 active:text-red-600"
                onClick={handleShowMore}
              >
                Show more
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
