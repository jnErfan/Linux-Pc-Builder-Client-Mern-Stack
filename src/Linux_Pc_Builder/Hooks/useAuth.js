import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";

const useAuth = () => {
  useContext(AuthProvider);
};

export default useAuth;
