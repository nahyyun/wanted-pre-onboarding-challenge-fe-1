import { createContext } from "react";
import { getStorage } from "../utils/storage";

export const AuthContext = createContext<{ token: string | null }>({
  token: getStorage("token"),
});
