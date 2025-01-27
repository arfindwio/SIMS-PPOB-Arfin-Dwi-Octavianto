import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

// Redux Action
import { postRegistrationAction } from "../../redux/actions/auth/AuthAction";

// Images
import Logo from "../../assets/img/Logo.png";
import Illustrasi from "../../assets/img/IllustrasiLogin.png";

// Icons
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

// Helper
import {
  showSuccessToast,
  showLoadingToast,
  showErrorToast,
} from "../../helper/ToastHelper";

// Cookies
import { CookieStorage, CookiesKeys } from "../../utils/cookie";

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    passwordConfirmation: "",
  });
  const [validateFormData, setValidateFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    passwordConfirmation: "",
  });
  const [passwordVisible, setPasswordVisible] = useState({
    password: false,
    passwordConfirmation: false,
  });

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
    }

    if (name === "first_name") {
      setValidateFormData((prevValidate) => ({
        ...prevValidate,
        first_name: value.trim() === "" ? "Masukan nama depan" : "",
      }));
    }

    if (name === "last_name") {
      setValidateFormData((prevValidate) => ({
        ...prevValidate,
        last_name: value.trim() === "" ? "Masukan nama belakang" : "",
      }));
    }
    if (name === "password") {
      setValidateFormData((prevValidate) => ({
        ...prevValidate,
        password:
          value.trim() === ""
            ? "Masukkan password"
            : value.length < 8
              ? "Password harus minimal 8 karakter"
              : "",
      }));
    }

    if (name === "passwordConfirmation") {
      setValidateFormData((prevValidate) => ({
        ...prevValidate,
        passwordConfirmation:
          value.trim() === ""
            ? "Masukkan konfirmasi password"
            : formData.password !== value
              ? "Pastikan password dimasukkan sesuai"
              : "",
      }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToastId = showLoadingToast("Loading...");

    if (validateFormData.email) return showErrorToast(validateFormData.email);
    if (validateFormData.first_name)
      return showErrorToast(validateFormData.first_name);
    if (validateFormData.last_name)
      return showErrorToast(validateFormData.last_name);
    if (validateFormData.password)
      return showErrorToast(validateFormData.password);
    if (validateFormData.passwordConfirmation)
      return showErrorToast(validateFormData.passwordConfirmation);

    const { passwordConfirmation, ...formDataWithoutConfirmation } = formData;

    const registration = await dispatch(
      postRegistrationAction(formDataWithoutConfirmation),
    );

    toast.dismiss(loadingToastId);

    if (registration.status !== 0) showErrorToast(registration.message);

    if (registration.status === 0) {
      showSuccessToast(registration.message);
      setTimeout(() => {
        navigate("/login");
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
              Lengkapi data untuk membuat akun
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
                  <FaRegUser
                    size={20}
                    className={`${validateFormData.first_name ? "text-red-500" : "text-slate-400"} absolute bottom-[13px] left-[13px]`}
                  />
                  <input
                    type="text"
                    name="first_name"
                    placeholder="nama depan"
                    value={formData.first_name}
                    onChange={handleChange}
                    className={`${validateFormData.first_name ? "border-red-500" : "border-slate-200"} "w-full flex w-full items-center gap-2 rounded-md border-2 py-3 pl-10 pr-4 text-sm outline-none`}
                  />
                </div>
                {validateFormData.first_name && (
                  <p className="ml-2 text-xs font-medium text-red-500">
                    {validateFormData.first_name}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <FaRegUser
                    size={20}
                    className={`${validateFormData.last_name ? "text-red-500" : "text-slate-400"} absolute bottom-[13px] left-[13px]`}
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="nama belakang"
                    value={formData.last_name}
                    onChange={handleChange}
                    className={`${validateFormData.last_name ? "border-red-500" : "border-slate-200"} "w-full flex w-full items-center gap-2 rounded-md border-2 py-3 pl-10 pr-4 text-sm outline-none`}
                  />
                </div>
                {validateFormData.last_name && (
                  <p className="ml-2 text-xs font-medium text-red-500">
                    {validateFormData.last_name}
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
                    type={`${passwordVisible.password ? "text" : "password"}`}
                    name="password"
                    placeholder="buat password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="off"
                    className={`${validateFormData.password ? "border-red-500" : "border-slate-200"} "w-full flex w-full items-center gap-2 rounded-md border-2 py-3 pl-10 pr-4 text-sm outline-none`}
                  />
                  {passwordVisible.password ? (
                    <IoEyeOutline
                      size={20}
                      className="absolute bottom-3 right-4 cursor-pointer text-slate-400"
                      onClick={() => togglePasswordVisibility("password")}
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={20}
                      className="absolute bottom-3 right-4 cursor-pointer text-slate-400"
                      onClick={() => togglePasswordVisibility("password")}
                    />
                  )}
                </div>

                {validateFormData.password && (
                  <p className="ml-2 text-xs font-medium text-red-500">
                    {validateFormData.password}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <CiLock
                    size={20}
                    className={`${validateFormData.passwordConfirmation ? "text-red-500" : "text-slate-400"} absolute bottom-[13px] left-[13px]`}
                  />
                  <input
                    type={`${passwordVisible.passwordConfirmation ? "text" : "password"}`}
                    name="passwordConfirmation"
                    placeholder="konfirmasi password"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                    autoComplete="off"
                    className={`${validateFormData.passwordConfirmation ? "border-red-500" : "border-slate-200"} "w-full flex w-full items-center gap-2 rounded-md border-2 py-3 pl-10 pr-4 text-sm outline-none`}
                  />
                  {passwordVisible.passwordConfirmation ? (
                    <IoEyeOutline
                      size={20}
                      className="absolute bottom-3 right-4 cursor-pointer text-slate-400"
                      onClick={() =>
                        togglePasswordVisibility("passwordConfirmation")
                      }
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={20}
                      className="absolute bottom-3 right-4 cursor-pointer text-slate-400"
                      onClick={() =>
                        togglePasswordVisibility("passwordConfirmation")
                      }
                    />
                  )}
                </div>

                {validateFormData.passwordConfirmation && (
                  <p className="ml-2 text-xs font-medium text-red-500">
                    {validateFormData.passwordConfirmation}
                  </p>
                )}
              </div>
            </div>
            <button
              className="w-full rounded-md bg-orange-600 py-3 text-sm text-white hover:bg-red-600"
              onClick={handleSubmit}
            >
              Registrasi
            </button>
            <div className="flex items-center gap-1">
              <p className="text-sm text-slate-500">sudah punya akun? login</p>
              <Link
                to={"/login"}
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
