import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  onLogin: (tokenValue, username) => {},
  onLogout: () => {},
  username: "",
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState(
    sessionStorage.getItem("token")
  );

  const [token, settoken] = useState(sessionStorage.getItem("token"));
  const [username, setusername] = useState(sessionStorage.getItem("username"));

  const onLogin = (tokenValue, username) => {
    console.log("tokenValue~~~~~~>", tokenValue, username);
    setisAuthenticated(true);
    setusername(username);
    sessionStorage.setItem("token", tokenValue);
    sessionStorage.setItem("username", username);
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
