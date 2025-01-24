import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.register = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setRegister, startLoading, endLoading } = usersSlice.actions;

export default usersSlice.reducer;
