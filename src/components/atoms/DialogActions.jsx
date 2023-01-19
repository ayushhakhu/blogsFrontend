import React from "react";
import { DialogActions as MuiDialogActions } from "@mui/material";

export const DialogActions = ({ ...props }) => {
  return <MuiDialogActions {...props}>{props.children}</MuiDialogActions>;
};
