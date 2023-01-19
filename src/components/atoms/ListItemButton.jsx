import { ListItemButton as MuiListItemButton } from "@mui/material";
import React from "react";

export const ListItemButton = ({ ...props }) => {
  return <MuiListItemButton {...props}>{props.children}</MuiListItemButton>;
};
