import { useSelector, useDispatch } from "react-redux";

// Redux Reducer
import { setSaldoVisible } from "../../../redux/reducer/transaction/TransactionSlice";

// Images
import ProfilePhoto from "../../img/ProfilePhoto.png";

// Icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const SaldoCard = () => {
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile?.profileData);
  const balance = useSelector((state) => state.transaction?.balance);
  const saldoVisible = useSelector((state) => state.transaction?.saldoVisible);

  const photoProfile =
    profileData?.profile_image ===
    "https://minio.nutech-integrasi.com/take-home-test/null"
      ? ProfilePhoto
      : profileData?.profile_image;

  return (
    <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-0">
      <div className="flex w-full flex-col items-center justify-center md:w-[40%] md:items-start md:justify-start">
        <img
          src={photoProfile}
          alt="Photo Profile"
          loading="lazy"
          className="aspect-square h-20 w-20 rounded-full border object-cover md:h-16 md:w-16"
        />
        <p className="mt-2 text-base text-slate-500 md:mt-4">Selamat datang,</p>
        <h1 className="text-2xl font-bold text-black">
          {profileData?.first_name} {profileData?.last_name}
        </h1>
      </div>
      <div
        className={`flex h-full w-full flex-col gap-2 overflow-hidden rounded-md bg-[url('/src/assets/img/Background-Saldo.png')] bg-cover bg-center bg-no-repeat p-5 md:w-[60%]`}
      >
        <p className="text-base text-white">Saldo Anda</p>
        <h1 className="flex items-center gap-2 text-3xl font-bold text-white">
          Rp
          {saldoVisible ? (
            <span className="truncate">{balance.toLocaleString()}</span>
          ) : (
            <span className="tracking-[5px]">•••••••</span>
          )}
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-sm text-white">
            {saldoVisible ? "Buka" : "Tutup"} Saldo
          </p>
          {saldoVisible ? (
            <IoEyeOutline
              size={15}
              className="cursor-pointer text-white"
              onClick={() => dispatch(setSaldoVisible(!saldoVisible))}
            />
          ) : (
            <IoEyeOffOutline
              size={15}
              className="cursor-pointer text-white"
              onClick={() => dispatch(setSaldoVisible(!saldoVisible))}
            />
          )}
        </div>
      </div>
    </div>
  );
};
