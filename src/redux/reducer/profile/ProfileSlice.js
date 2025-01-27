import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileData: null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    resetProfile: () => initialState,
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setProfileData, resetProfile, startLoading, endLoading } =
  profileSlice.actions;

export default profileSlice.reducer;
