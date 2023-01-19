import React from "react";
import { TextField as MuiTextField } from "@mui/material";

export const TextField = ({ label, variant = "standard", ...props }) => {
  return <MuiTextField label={label} variant={variant} {...props} />;
};
