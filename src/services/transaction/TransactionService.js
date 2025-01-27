// Service Login User
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxGetBalance = async () => {
  return await http.get(`${API_ENDPOINT.GET_BALANCE}`);
};

export const reduxPostTopUp = async (input) => {
  return await http.post(`${API_ENDPOINT.POST_TOPUP}`, input);
};

export const reduxPostTransaction = async (input) => {
  return await http.post(`${API_ENDPOINT.POST_TRANSACTION}`, input);
};

export const reduxGetHistoryTransaction = async (query) => {
  return await http.get(`${API_ENDPOINT.GET_HISTORY_TRANSACTION}${query}`);
};
