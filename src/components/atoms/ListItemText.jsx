import React from "react";
import { ListItemText as MuiListItemText } from "@mui/material";

export const ListItemText = ({ ...props }) => {
  return <MuiListItemText {...props}>{props.children}</MuiListItemText>;
};
