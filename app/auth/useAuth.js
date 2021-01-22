import { useContext } from "react";

// source
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    setUser(authToken);
    authStorage.setToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
