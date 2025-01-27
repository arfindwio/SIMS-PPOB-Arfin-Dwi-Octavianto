import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

// Redux Action
import { postLoginAction } from "../../redux/actions/auth/AuthAction";

// Images
import Logo from "../../assets/img/Logo.png";
import Illustrasi from "../../assets/img/IllustrasiLogin.png";

// Icons
import { MdAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

// Helper
import {
  showSuccessToast,
  showLoadingToast,
  showErrorToast,
} from "../../helper/ToastHelper";

// Cookie
import { CookieStorage, CookiesKeys } from "../../utils/cookie";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validateFormData, setValidateFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setValidateFormData((prevValidate) => ({
        ...prevValidate,
        email:
          value.trim() === ""
            ? "Masukan email"
            : emailValidator.test(value)
              ? ""
              : "Email tidak valid",
      }));
      if (name === "password") {
        setValidateFormData((prevValidate) => ({
          ...prevValidate,
          password: value.trim() === "" ? "Masukan password" : "",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToastId = showLoadingToast("Loading...");

    if (!formData.email || !formData.password)
      return showErrorToast("Masukkan email dan password");

    const login = await dispatch(postLoginAction(formData));

    toast.dismiss(loadingToastId);

    if (login.status !== 0) return showErrorToast(login.message);

    if (login.status === 0) {
      showSuccessToast(login.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  useEffect(() => {
    const token = CookieStorage.get(CookiesKeys.AuthToken);
    if (token) navigate("/");
  }, []);

  return (
    <>
      <div className="flex h-screen w-full">
        <div className="m-auto w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-[80%] flex-col items-center justify-center gap-3 sm:w-[70%] md:w-[65%] md:gap-4 xl:gap-6"
          >
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
              Masuk atau buat akun untuk memulai
            </h1>
            <div className="flex w-full flex-col gap-3 py-3 lg:gap-5">
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <MdAlternateEmail
                    size={20}
                    className={`${validateFormData.email ? "text-red-500" : "text-slate-400"} absolute bottom-[13px] left-[13px]`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="masukkan email anda"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${validateFormData.email ? "border-red-500" : "border-slate-200"} "w-full flex w-full items-center gap-2 rounded-md border-2 py-3 pl-10 pr-4 text-sm outline-none`}
                  />
                </div>
                {validateFormData.email && (
                  <p className="ml-2 text-xs font-medium text-red-500">
                    {validateFormData.email}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <CiLock
                    size={20}
                    className={`${validateFormData.password ? "text-red-500" : "text-slate-400"} absolute bottom-[13px] left-[13px]`}
                  />
                  <input
                    type={`${passwordVisible ? "text" : "password"}`}
                    name="password"
                    placeholder="buat password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="off"
                    className={`${validateFormData.password ? "border-red-500" : "border-slate-200"} "w-full flex w-full items-center gap-2 rounded-md border-2 py-3 pl-10 pr-4 text-sm outline-none`}
                  />
                  {passwordVisible ? (
                    <IoEyeOutline
                      size={20}
                      className="absolute bottom-3 right-4 cursor-pointer text-slate-400"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={20}
                      className="absolute bottom-3 right-4 cursor-pointer text-slate-400"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    />
                  )}
                </div>

                {validateFormData.password && (
                  <p className="ml-2 text-xs font-medium text-red-500">
                    {validateFormData.password}
                  </p>
                )}
              </div>
            </div>
            <button
              className="w-full rounded-md bg-orange-600 py-3 text-sm text-white hover:bg-red-600"
              onClick={handleSubmit}
            >
              Masuk
            </button>
            <div className="flex items-center gap-1">
              <p className="text-sm text-slate-500">
                belum punya akun? registrasi
              </p>
              <Link
                to={"/registration"}
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
