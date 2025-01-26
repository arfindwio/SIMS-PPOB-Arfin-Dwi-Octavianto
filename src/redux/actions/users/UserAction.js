import { reduxGetAllUsers } from "../../../services/users/UsersServices";
import {
  setRegister,
  startLoading,
  endLoading,
} from "../../reducer/users/UsersSlice";
import { resetEnrollment } from "../../reducer/enrollments/EnrollmentsSlice";
import { CookiesKeys, CookieStorage } from "../../../utils/cookie";

export const postRegisterUserAction = (input) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const result = await reduxPostRegisterUser(input);
    dispatch(setRegister(result.data.data.newUser));
    return true;
  } catch (err) {
    if (err.response) {
      if (err.response.status >= 400 && err.response.status <= 500) {
        showErrorToast(err.response.data.message);
      } else {
        console.error("unexpected Error", err);
      }
    }
  } finally {
    dispatch(endLoading());
  }
};
