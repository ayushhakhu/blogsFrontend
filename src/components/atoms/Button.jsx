import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ variant = "text", ...props }) => {
  return (
    <MuiButton variant={variant} {...props}>
      {props.children}
    </MuiButton>
  );
};
