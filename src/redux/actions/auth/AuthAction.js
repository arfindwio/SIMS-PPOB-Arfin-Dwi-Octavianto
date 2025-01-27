// Services
import {
  reduxPostRegistration,
  reduxPostLogin,
} from "../../../services/auth/AuthServices";
import { reduxGetProfile } from "../../../services/profile/ProfileServices";
import { reduxGetBalance } from "../../../services/transaction/TransactionService";
import {
  reduxGetBanner,
  reduxGetServices,
} from "../../../services/information/InformationServices";

// Reducer
import { startLoading, endLoading } from "../../reducer/auth/AuthSlice";
import {
  setProfileData,
  resetProfile,
} from "../../reducer/profile/ProfileSlice";
import {
  setBalance,
  resetTransaction,
} from "../../reducer/transaction/TransactionSlice";
import {
  setBanner,
  setServices,
} from "../../reducer/information/InformationSlice";

// Cookies
import { CookiesKeys, CookieStorage } from "../../../utils/cookie";

// Error Handler
import { handleRequestError } from "../../../utils/errorHandler";

export const postRegistrationAction = (input) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const result = await reduxPostRegistration(input);
    return result.data;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const postLoginAction = (input) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const result = await reduxPostLogin(input);
    CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);

    const profileData = await reduxGetProfile();
    const balance = await reduxGetBalance();
    const bannerData = await reduxGetBanner();
    const serviceData = await reduxGetServices();

    dispatch(setProfileData(profileData.data.data));
    dispatch(setBalance(balance.data.data.balance));
    dispatch(setBanner(bannerData.data.data));
    dispatch(setServices(serviceData.data.data));

    return result.data;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(resetProfile());
    dispatch(resetTransaction());
    CookieStorage.remove(CookiesKeys.AuthToken);
  } catch (err) {
    console.error(err);
  }
};
