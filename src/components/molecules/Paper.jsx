import React from "react";
import { Paper as MuiPaper } from "@mui/material";

export const Paper = (props) => {
  const { component, elevation, square } = props;
  return (
    <MuiPaper
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 10,
      }}
      component={component}
      elevation={elevation}
      square={square}
      {...props}
    />
  );
};
