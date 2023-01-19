import { Typography } from "../atoms/Typography";
import React, { useContext } from "react";
import { ToolBar } from "../molecules/ToolBar";
import { AppBar as MuiAppBar } from "../molecules/AppBar";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../hooks/AuthContext";

export const AppBar = (props) => {
  const navigate = useNavigate();
  // const { isAuthenticated, onLogout } = useContext(AuthContext);

  return (
    <MuiAppBar color="transparent" position="static">
      <ToolBar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontFamily: `medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
            fontWeight: 700,
            paddingInline: 10,
            color: "rgba(0,0,0,0.8)",
          }}
          onClick={() => navigate("/")}
        >
          Medium
        </Typography>
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
        {/* {!isAuthenticated && ( */}
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
        {/* )} */}
        {/* {!isAuthenticated && ( */}
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
        {/* )} */}
        {/* {isAuthenticated && ( */}
        {/* <Button buttonContent="Logout" onClick={onLogout} /> */}
        {/* )} */}
        {props.children}
      </ToolBar>
    </MuiAppBar>
  );
};
