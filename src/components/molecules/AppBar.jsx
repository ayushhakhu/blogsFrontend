import React from "react";
import { AppBar as MuiAppBar } from "@mui/material";

export const AppBar = (props) => {
  const { position } = props;
  return (
    <MuiAppBar position={position} {...props}>
      {props.children}
    </MuiAppBar>
  );
};
