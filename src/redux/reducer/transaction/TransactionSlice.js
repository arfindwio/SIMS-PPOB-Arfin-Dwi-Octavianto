import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: null,
  saldoVisible: false,
  history: null,
  loading: false,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setSaldoVisible: (state, action) => {
      state.saldoVisible = action.payload;
    },
    setTransaction: (state, action) => {
      state.balance = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    resetTransaction: () => initialState,
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  setBalance,
  setSaldoVisible,
  setTransaction,
  setHistory,
  resetTransaction,
  startLoading,
  endLoading,
} = transactionSlice.actions;

export default transactionSlice.reducer;
