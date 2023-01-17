import React, { createContext, useState } from "react";
import { getStorage } from "../utils/storage";

type ContextProps = {
  isLogin: string | null;
  setLoginState: (state: string) => void;
};

export const AuthContext = createContext<ContextProps>({
  isLogin: getStorage("token"),
  setLoginState: () => null,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogin, setIsLogin] = useState<string | null>(getStorage("token"));

  const setLoginState = (state: string) => {
    setIsLogin(state);
  };

  return (
    <AuthContext.Provider value={{ isLogin, setLoginState }}>
      {children}
    </AuthContext.Provider>
  );
};
