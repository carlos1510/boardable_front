import { URL_BASE, tokenKey } from "./constants";

const savedToken = window.localStorage.getItem(tokenKey);

export const authProvider = {
  isAuthenticated: savedToken !== null,
  token: savedToken,
  async login(username, password) {
    const url = URL_BASE + "/login";
    const options = {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const body = await response.json();
      console.log(body);
      authProvider.isAuthenticated = true;
      authProvider.token = body.data.token;
      window.localStorage.setItem(tokenKey, body.data.token);
    } else {
      const error = await response.json();
      throw new Error(error.error);
    }
  },
  logout() {
    window.localStorage.removeItem(tokenKey);

    authProvider.isAuthenticated = false;
    authProvider.token = null;
  },
};
