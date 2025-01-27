import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./auth/AuthSlice";
import ProfileSlice from "./profile/ProfileSlice";
import InformationSlice from "./information/InformationSlice";
import TransactionSlice from "./transaction/TransactionSlice";

export default combineReducers({
  // Auth
  auth: AuthSlice,

  // Profile
  profile: ProfileSlice,

  // Module Information
  information: InformationSlice,

  // Module Transaction
  transaction: TransactionSlice,
});
