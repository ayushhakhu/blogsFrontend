import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";

export const IconButton = ({ ...props }) => {
  return <MuiIconButton {...props}>{props.children}</MuiIconButton>;
};
