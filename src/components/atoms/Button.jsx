import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = (props) => {
  const { buttonContent, buttonvariant = "text" } = props;
  return (
    <MuiButton variant={buttonvariant} {...props}>
      {buttonContent}
    </MuiButton>
  );
};
