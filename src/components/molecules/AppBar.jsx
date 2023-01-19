import React from "react";
import { AppBar as MuiAppBar } from "@mui/material";

export const AppBar = ({ position, ...props }) => {
  return (
    <MuiAppBar position={position} {...props}>
      {props.children}
    </MuiAppBar>
  );
};
