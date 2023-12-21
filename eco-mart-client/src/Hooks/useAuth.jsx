import { useContext } from "react";
import { AuthContext } from "../Authentication/Authentication";

const UseAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UseAuth;
