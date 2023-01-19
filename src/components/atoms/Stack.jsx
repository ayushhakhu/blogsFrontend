import React from "react";
import { Stack as MuiStack } from "@mui/material";
import styled from "@emotion/styled";

const StyledMuiStack = styled(MuiStack)({
  display: "flex",
  alignItems: "center",
});

export const Stack = ({ ...props }) => {
  return <StyledMuiStack {...props}>{props.children}</StyledMuiStack>;
};
