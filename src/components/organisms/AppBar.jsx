import { Typography } from "../atoms/Typography";
import React, { useContext, useState } from "react";
import { ToolBar } from "../molecules/ToolBar";
import { AppBar as MuiAppBar } from "../molecules/AppBar";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useCreateNewBlogs } from "../../api/mutations/useCreateNewBlogs";
import { AuthContext } from "../../hooks/AuthContext";

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

export const AppBar = ({
  handleSubmit,
  showPublishButton,
  handleShowPublishButton,
  ...props
}) => {
  const navigate = useNavigate();
  const { isAuthenticated, onLogout, username } = useContext(AuthContext);

  const { mutate } = useCreateNewBlogs();

  const onPublishHander = (data) => {
    console.log("data~~~~~>", data);
    let updatedData = { username: username, ...data };
    console.log("updataed data~~~~~~~~~~~~>", updatedData);
    mutate(data, {
      onSuccess: (datas) => {
        navigate("/");
      },
    });
  };

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
            if (isAuthenticated) {
              handleShowPublishButton(navigate("/createNewBlog"));
            } else {
              navigate("/login");
            }
          }}
        >
          Write
        </Button>

        {isAuthenticated && showPublishButton && (
          <Button
            sx={{ textTransform: "None", borderRadius: 10 }}
            size="small"
            disableRipple
            color="success"
            variant="outlined"
            onClick={handleSubmit?.(onPublishHander)}
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
            sx={{ textTransform: "None" }}
            size="small"
            color="inherit"
            onClick={onLogout}
          >
            Logout
          </Button>
        )}
        {props.children}
      </ToolBar>
    </MuiAppBar>
  );
};
