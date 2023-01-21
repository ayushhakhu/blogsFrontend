import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  onLogin: (tokenValue) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState(
    sessionStorage.getItem("token")
  );
  const [token, settoken] = useState(sessionStorage.getItem("token"));

  const onLogin = (tokenValue) => {
    setisAuthenticated(true);
    sessionStorage.setItem("token", tokenValue);
    settoken(tokenValue);
  };

  const onLogout = () => {
    setisAuthenticated(false);
    sessionStorage.clear();
    settoken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, onLogin, onLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
