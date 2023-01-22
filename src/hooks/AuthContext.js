import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  onLogin: (tokenValue) => {},
  onLogout: () => {},
  username: "",
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState(
    sessionStorage.getItem("token")
  );

  const [token, settoken] = useState(sessionStorage.getItem("token"));
  const [username, setusername] = useState("");

  const onLogin = (tokenValue, username) => {
    setisAuthenticated(true);
    setusername(username);
    sessionStorage.setItem("token", tokenValue);
    settoken(tokenValue);
  };

  const onLogout = () => {
    setisAuthenticated(false);
    sessionStorage.clear();
    settoken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        onLogin,
        onLogout,
        username,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
