import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Redux Action
import {
  putUpdateProfileAction,
  putUpdateImageProfileAction,
} from "../../redux/actions/profile/ProfileAction";

import { logoutAction } from "../../redux/actions/auth/AuthAction";

// Components
import { Navbar } from "../../assets/components/navbar/Navbar";

// Images
import ProfilePhoto from "../../assets/img/ProfilePhoto.png";

// Icons
import { FaPen } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

// Helper
import {
  showSuccessToast,
  showLoadingToast,
  showErrorToast,
} from "../../helper/ToastHelper";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileData = useSelector((state) => state.profile?.profileData);

  const [profileImage, setProfileImage] = useState(profileData?.profile_image);

  const [editProfile, setEditProfile] = useState(false);
  const [formData, setFormData] = useState({
    profile_image: profileData?.profile_image,
    email: profileData?.email,
    first_name: profileData?.first_name,
    last_name: profileData?.last_name,
  });

  const photoProfile =
    profileData.profile_image ===
      "https://minio.nutech-integrasi.com/take-home-test/null" &&
    profileImage === "https://minio.nutech-integrasi.com/take-home-test/null"
      ? ProfilePhoto
      : profileImage;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === "file") {
      const file = e.target.files[0];

      const allowedExtensions = ["image/jpeg", "image/png", "image/jpg"];

      if (file && allowedExtensions.includes(file.type)) {
        setProfileImage(URL.createObjectURL(file));
        setFormData((prevData) => ({
          ...prevData,
          profile_image: file,
        }));
      } else {
        showErrorToast("Hanya file gambar yang diizinkan (JPEG, PNG, JPG).");
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const loadingToastId = showLoadingToast("Loading...");

    const isDataChanged =
      formData.email !== profileData.email ||
      formData.first_name !== profileData.first_name ||
      formData.last_name !== profileData.last_name ||
      formData.profile_image !== profileData.profile_image;

    if (!formData.email || !formData.first_name || !formData.last_name)
      return showErrorToast("Masukkan email, nama depan dan nama belakang");

    if (!isDataChanged) return;

    if (formData.profile_image && formData.profile_image.size > 100 * 1024)
      return showErrorToast("Size image maksimal 100kb");

    const updateProfile = await dispatch(
      putUpdateProfileAction({
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
      }),
    );

    const updateImageProfile = await dispatch(
      putUpdateImageProfileAction({ profile_image: formData.profile_image }),
    );

    if (updateProfile.status !== 0)
      return showErrorToast(updateProfile.message);
    if (updateImageProfile.status !== 0)
      return showErrorToast(updateImageProfile.message);

    toast.dismiss(loadingToastId);

    if (updateProfile && updateImageProfile) {
      showSuccessToast("Update profile berhasil");
      setEditProfile(false);
    }
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  return (
    <>
      <Navbar />

      <div className="w-full bg-white">
        <form
          onSubmit={handleUpdateProfile}
          className="mx-auto flex w-[80%] max-w-7xl flex-col items-center justify-center gap-4 pb-10 pt-20 md:w-[60%] md:gap-6 lg:w-[55%]"
        >
          <label
            htmlFor="profile_image"
            className="relative mx-auto h-36 w-36 cursor-pointer"
          >
            <input
              type="file"
              name="profile_image"
              id="profile_image"
              onChange={handleChange}
              className="hidden"
              disabled={!editProfile}
              hidden
            />
            <img
              src={photoProfile}
              alt="Profile Photo"
              loading="lazy"
              className="mx-auto h-full w-full rounded-full object-cover"
            />
            <div className="absolute bottom-1 right-0 rounded-full border-2 border-slate-300 bg-white p-2">
              <FaPen size={15} className="text-black" />
            </div>
          </label>
          <h1 className="text-center text-2xl font-bold sm:text-3xl">
            {profileData?.first_name} {profileData?.last_name}
          </h1>
          <div className="flex w-full flex-col gap-1 md:gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-black sm:text-base"
            >
              Email
            </label>
            <div className="relative flex w-full items-center gap-2 rounded-md border">
              <MdAlternateEmail
                size={20}
                className="absolute bottom-3 left-3 text-slate-600"
              />
              {!editProfile ? (
                <p className="w-full py-3 pl-10 pr-4 text-sm text-slate-600">
                  {formData.email}
                </p>
              ) : (
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-3 pl-10 pr-4 text-sm outline-none placeholder:text-slate-600"
                />
              )}
            </div>
          </div>
          <div className="flex w-full flex-col gap-1 md:gap-2">
            <label
              htmlFor="first_name"
              className="text-sm font-medium text-black sm:text-base"
            >
              Nama Depan
            </label>
            <div className="relative flex w-full items-center gap-2 rounded-md border">
              <FaRegUser
                size={15}
                className="absolute bottom-[14px] left-3 text-slate-600"
              />
              {!editProfile ? (
                <p className="w-full py-3 pl-10 pr-4 text-sm text-slate-600">
                  {formData.first_name}
                </p>
              ) : (
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="nama depan"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full py-3 pl-10 pr-4 text-sm outline-none placeholder:text-slate-600"
                />
              )}
            </div>
          </div>
          <div className="flex w-full flex-col gap-1 md:gap-2">
            <label
              htmlFor="last_name"
              className="text-sm font-medium text-black sm:text-base"
            >
              Nama Belakang
            </label>
            <div className="relative flex w-full items-center gap-2 rounded-md border">
              <FaRegUser
                size={15}
                className="absolute bottom-[14px] left-3 text-slate-600"
              />
              {!editProfile ? (
                <p className="w-full py-3 pl-10 pr-4 text-sm text-slate-600">
                  {formData.last_name}
                </p>
              ) : (
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="nama belakang"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full py-3 pl-10 pr-4 text-sm outline-none placeholder:text-slate-600"
                />
              )}
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            {editProfile && (
              <button
                className="w-full rounded-md border-2 border-white bg-orange-600 py-3 text-sm text-white hover:bg-red-600 sm:text-base"
                onClick={handleUpdateProfile}
              >
                Simpan
              </button>
            )}
            {!editProfile && (
              <button
                type="button"
                className="w-full rounded-md border-2 border-white bg-orange-600 py-3 text-sm text-white hover:bg-red-600 sm:text-base"
                onClick={() => setEditProfile(true)}
              >
                Edit Profil
              </button>
            )}
            {editProfile && (
              <button
                className="w-full rounded-md border-2 border-orange-600 bg-white py-3 text-sm text-orange-600 hover:bg-orange-600 hover:text-white sm:text-base"
                onClick={() => setEditProfile(false)}
              >
                Kembali
              </button>
            )}
            {!editProfile && (
              <button
                className="w-full rounded-md border-2 border-orange-600 bg-white py-3 text-sm text-orange-600 hover:bg-orange-600 hover:text-white sm:text-base"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
