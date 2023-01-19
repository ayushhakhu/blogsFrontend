import React from "react";
import { DialogContent as MuiDialogContent } from "@mui/material";

export const DialogContent = ({ ...props }) => {
  return <MuiDialogContent {...props}>{props.children}</MuiDialogContent>;
};
