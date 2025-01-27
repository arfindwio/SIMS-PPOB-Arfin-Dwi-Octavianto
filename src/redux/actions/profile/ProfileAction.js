// Services
import {
  reduxGetProfile,
  reduxPutUpdateProfile,
  reduxPutUpdateImageProfile,
} from "../../../services/profile/ProfileServices";

// Reducer
import {
  setProfileData,
  startLoading,
  endLoading,
} from "../../reducer/profile/ProfileSlice";

// Error Handler
import { handleRequestError } from "../../../utils/errorHandler";

export const getProfileAction = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const result = await reduxGetProfile();
    dispatch(setProfileData(result.data.data));
    return result.data;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const putUpdateProfileAction = (input) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const result = await reduxPutUpdateProfile(input);

    dispatch(setProfileData(result.data.data));
    return result.data;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};

export const putUpdateImageProfileAction = (input) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const { profile_image } = input;

    const formDataObject = new FormData();
    formDataObject.append("file", profile_image);

    const result = await reduxPutUpdateImageProfile(formDataObject);
    dispatch(setProfileData(result.data.data));
    return true;
  } catch (err) {
    handleRequestError(err);
  } finally {
    dispatch(endLoading());
  }
};
