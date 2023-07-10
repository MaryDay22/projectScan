import { useContext, useState } from "react";
import {
  LOCAL_STORAGE_TOKEN_EXPIRE,
  LOCAL_STORAGE_TOKEN_KEY,
  TokenContext,
} from "./TokenContext";

export function useToken() {
  const { token, setToken } = useContext(TokenContext);
  const [errorMsg, setErrorMsg] = useState(null);

  const getToken = async (credentials, navigate, path) => {
    if (!token) {
      const reqBody = JSON.stringify(credentials);
      const req = await fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_LOGIN_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: reqBody,
        }
      );
      const res = await req.json();

      if (res.message) {
        setErrorMsg(res.message);
      }
      if (res.accessToken) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_KEY,
          JSON.stringify(res.accessToken)
        );
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_EXPIRE,
          JSON.stringify(res.expire)
        );
        setToken(res.accessToken);
        navigate(path);
      }
    }
  };

  const logOut = () => {
    localStorage.clear();
    setToken(null);
  };

  return {
    token,
    errorMsg,
    getToken,
    logOut,
  };
}
