import { Navigate } from "react-router-dom";

import { showErrorToast } from "../../../helper/ToastHelper";

// Cookies
import { CookieStorage, CookiesKeys } from "../../../utils/cookie";

export const TokenProtected = ({ element }) => {
  const token = CookieStorage.get(CookiesKeys.AuthToken);

  if (!token) {
    showErrorToast("Harap login dulu untuk akses halaman ini");
    return <Navigate to="/login" replace />;
  }

  return element;
};
