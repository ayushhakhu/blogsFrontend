import React from "react";
import { Paper as MuiPaper } from "@mui/material";

export const Paper = ({ component, elevation, square, ...props }) => {
  return (
    <MuiPaper
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 10,
        borderRadius: 0,
      }}
      component={component}
      elevation={elevation}
      square={square}
      {...props}
    />
  );
};
