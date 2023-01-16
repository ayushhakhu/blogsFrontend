import React from "react";
import { DialogTitle as MuiDialogTitle } from "@mui/material";

export const DialogTitle = (props) => {
  const { title } = props;
  return <MuiDialogTitle {...props}>{title}</MuiDialogTitle>;
};
