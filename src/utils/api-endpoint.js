//  API Endpoint
export const API_ENDPOINT = {
  // Auth
  AUTH_REGISTRATION: "/registration", // [POST] Registration User
  AUTH_LOGIN: "/login", // [POST] Login User

  // Profile
  GET_PROFILE: "/profile", // [GET] GET Profile
  PUT_UPDATE_PROFILE: "/profile/update", // [PUT] Update Profile
  PUT_UPDATE_IMAGE_PROFILE: "/profile/image", // [PUT] Update Image Profile

  // Module Information
  GET_BANNER: "/banner", // [GET] GET Banner
  GET_SERVICES: "/services", // [GET] GET Services

  // Module Transaction
  GET_BALANCE: "/balance", // [GET] GET Balance
  POST_TOPUP: "/topup", // [POST] POST Topup
  POST_TRANSACTION: "/transaction", // [POST] POST Transaction
  GET_HISTORY_TRANSACTION: "/transaction/history", // [GET] GET History Transaction
};
