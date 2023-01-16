import { Typography } from "../atoms/Typography";
import React, { useContext } from "react";
import { ToolBar } from "../molecules/ToolBar";
import { AppBar as MuiAppBar } from "../molecules/AppBar";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthContext";

export const AppBar = (props) => {
  const navigate = useNavigate();
  const { isAuthenticated, onLogout } = useContext(AuthContext);

  return (
    <MuiAppBar position="static">
      <ToolBar>
        <Typography
          title=" To List Items"
          variant="h5"
          sx={{ flexGrow: 1 }}
          onClick={() => navigate("/")}
        />
        {!isAuthenticated && (
          <Button
            buttonContent="Login"
            onClick={() => {
              navigate("/login");
            }}
          />
        )}
        {!isAuthenticated && (
          <Button
            buttonContent="Signup"
            onClick={() => {
              navigate("/signup");
            }}
          />
        )}
        {isAuthenticated && (
          <Button buttonContent="Logout" onClick={onLogout} />
        )}
        {props.children}
      </ToolBar>
    </MuiAppBar>
  );
};
