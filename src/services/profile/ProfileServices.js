// Service Login User
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxGetProfile = async () => {
  return await http.get(`${API_ENDPOINT.GET_PROFILE}`);
};

export const reduxPutUpdateProfile = async (input) => {
  return await http.put(`${API_ENDPOINT.PUT_UPDATE_PROFILE}`, input);
};

export const reduxPutUpdateImageProfile = async (input) => {
  return await http.put(`${API_ENDPOINT.PUT_UPDATE_IMAGE_PROFILE}`, input);
};
