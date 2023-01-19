import React from "react";
import { Dialog as MuiDialog } from "@mui/material";
import styled from "@emotion/styled";

const StyledDialog = styled(MuiDialog)({
  display: "flex",
  justifyContent: "center",
  padding: 20,
});

export const Dialog = ({ dialog, handleClose, ...props }) => {
  return (
    <StyledDialog open={dialog} onClose={handleClose}>
      {props.children}
    </StyledDialog>
  );
};
