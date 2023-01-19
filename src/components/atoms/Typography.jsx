import React from "react";
import { Typography as MuiTypography } from "@mui/material";
import styled from "@emotion/styled";

const StyledTypography = styled(MuiTypography)({});

export const Typography = ({ ...props }) => {
  return (
    <StyledTypography variant="h4" {...props}>
      {props.children}
    </StyledTypography>
  );
};
