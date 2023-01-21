import { Typography } from "../atoms/Typography";
import React, { useContext } from "react";
import { ToolBar } from "../molecules/ToolBar";
import { AppBar as MuiAppBar } from "../molecules/AppBar";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
// import { AuthContext } from "../../hooks/AuthContext";

const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: `medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    paddingInline: 0,
  },
  [theme.breakpoints.up("sm")]: {
    paddingInline: 80,
  },
  color: "rgba(0,0,0,0.8)",
}));

export const AppBar = (props) => {
  const navigate = useNavigate();
  // const { isAuthenticated, onLogout } = useContext(AuthContext);
  const isAuthenticated = false;

  return (
    <MuiAppBar color="transparent" position="static">
      <ToolBar>
        <StyledHeaderTitle variant="h5" onClick={() => navigate("/")}>
          Medium
        </StyledHeaderTitle>
        <Button
          sx={{ textTransform: "None", borderRadius: 10 }}
          size="small"
          disableRipple
          color="inherit"
          variant="outlined"
          onClick={() => {
            navigate("/createNewBlog");
          }}
        >
          Write
        </Button>
        {isAuthenticated && (
          <Button
            sx={{ textTransform: "None", borderRadius: 10 }}
            size="small"
            disableRipple
            color="success"
            variant="outlined"
            onClick={() => {
              console.log("api call to push data");
            }}
          >
            Publish
          </Button>
        )}
        {!isAuthenticated && (
          <Button
            sx={{ textTransform: "None" }}
            size="small"
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        )}
        {!isAuthenticated && (
          <Button
            sx={{ textTransform: "None" }}
            size="small"
            color="inherit"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </Button>
        )}
        {isAuthenticated && (
          <Button
            buttonContent="Logout"
            onClick={() => console.log("Logging out")}
          />
        )}
        {props.children}
      </ToolBar>
    </MuiAppBar>
  );
};
