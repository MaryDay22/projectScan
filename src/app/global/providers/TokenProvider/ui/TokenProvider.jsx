import React, { useMemo, useState } from "react";
import { TokenContext, LOCAL_STORAGE_TOKEN_KEY } from "../lib/TokenContext";

const expireToken = JSON.parse(localStorage.getItem("expire")) ?? null;

const checkTokenExpire = () => {
  const todayTimestampt = Date.now();
  const expireTimestampt = +new Date(expireToken);

  if (!expireToken) {
    return null;
  } else if (todayTimestampt > expireTimestampt) {
    localStorage.clear();
  }
};

checkTokenExpire();

const defaultToken =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) ?? null;

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(defaultToken);

  const defaultProps = useMemo(
    () => ({
      token: token,
      setToken: setToken,
    }),
    [token]
  );

  return (
    <TokenContext.Provider value={defaultProps}>
      {children}
    </TokenContext.Provider>
  );
};
export default TokenProvider;
