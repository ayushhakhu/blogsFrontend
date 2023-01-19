import React from "react";
import styled from "@emotion/styled";
import { ListItem as MuiListItem } from "@mui/material";

const StyledListItem = styled(MuiListItem)({
  backgroundColor: "ButtonFace",
  border: "1px solid black",
  borderRadius: 20,
  margin: 10,
  padding: 10,
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "center",
});

export const ListItem = ({ ...props }) => {
  return <StyledListItem {...props}>{props.children}</StyledListItem>;
};
