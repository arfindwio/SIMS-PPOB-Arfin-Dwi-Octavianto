// Service Login User
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxGetBanner = async () => {
  return await http.get(`${API_ENDPOINT.GET_BANNER}`);
};

export const reduxGetServices = async () => {
  return await http.get(`${API_ENDPOINT.GET_SERVICES}`);
};
