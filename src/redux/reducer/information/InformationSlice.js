import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banner: [],
  services: [],
  serviceDetail: null,
  loading: false,
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    setBanner: (state, action) => {
      state.banner = action.payload;
    },
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setServiceDetail: (state, action) => {
      state.serviceDetail = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  setBanner,
  setServices,
  setServiceDetail,
  startLoading,
  endLoading,
} = informationSlice.actions;

export default informationSlice.reducer;
