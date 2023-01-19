import React from "react";
import { DialogTitle as MuiDialogTitle } from "@mui/material";

export const DialogTitle = ({ ...props }) => {
  return <MuiDialogTitle {...props}>{props.children}</MuiDialogTitle>;
};
