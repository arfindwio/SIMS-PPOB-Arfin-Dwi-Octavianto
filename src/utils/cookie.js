import Cookies from "universal-cookie";

const cookies = new Cookies();

export const CookiesKeys = {
  AuthToken: "authToken",
};

const CookieOptions = {
  path: "/",
  secure: true,
  expires: new Date(new Date().getTime() + 12 * 60 * 60 * 1000),
};

export const CookieStorage = {
  set: (key, data, options) => {
    return cookies.set(key, data, { ...CookieOptions, ...options });
  },
  get: (key, options) => {
    return cookies.get(key, { ...CookieOptions, ...options });
  },
  remove: (key, options) => {
    return cookies.remove(key, { ...CookieOptions, ...options });
  },
};
