import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setToken, startLoading, endLoading } = authSlice.actions;

export default authSlice.reducer;
