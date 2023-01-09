import React, { createContext, useState } from "react";
import { getStorage } from "../utils/storage";

const AuthContext = createContext<string | null>(getStorage("token"));

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogin, setIsLogin] = useState(null);

  return (
    <AuthContext.Provider value={isLogin}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
