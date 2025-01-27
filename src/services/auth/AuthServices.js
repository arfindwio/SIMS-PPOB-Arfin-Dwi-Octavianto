// Service Login User
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxPostRegistration = async (input) => {
  return await http.post(`${API_ENDPOINT.AUTH_REGISTRATION}`, input);
};

export const reduxPostLogin = async (input) => {
  return await http.post(`${API_ENDPOINT.AUTH_LOGIN}`, input);
};
