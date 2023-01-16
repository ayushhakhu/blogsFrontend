import React from "react";
import { Toolbar as MuiToolbar } from "@mui/material";
import styled from "@emotion/styled";

const StyledToolbar = styled(MuiToolbar)({
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#cfcfcf",
});
export const ToolBar = ({ rest, children }) => {
  return <StyledToolbar {...rest}>{children}</StyledToolbar>;
};
