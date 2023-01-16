import React from "react";
import { TextField as MuiTextField } from "@mui/material";

export const TextField = (props) => {
  const { label, variant = "standard" } = props;
  return (
    <MuiTextField label={label} variant={variant} {...props}>
      {props.children}
    </MuiTextField>
  );
};
