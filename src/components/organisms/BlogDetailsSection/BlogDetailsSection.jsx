import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Typography } from "../../atoms/Typography";

const StyledBlogDetailsSection = styled(Box)(() => ({
  marginTop: 20,
  paddingInline: 0,
}));

const StyledBlogTitle = styled(Typography)(() => ({
  wordBreak: "break-word",
  wordWrap: "break-word",
  fontWeight: 700,
  paddingBlock: 5,
  fontSize: 32,
  fontFamily: `source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif`,
  color: "rgba(41, 41, 41, 1)",
}));

const StyledBlogDetails = styled(Typography)(() => ({
  marginTop: 5,
  wordBreak: "break-word",
  wordWrap: "break-word",
  letterSpacing: 1,
  lineHeight: 2,
  fontWeight: 400,
  fontSize: 20,
  fontFamily: `source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif`,
  color: "rgba(41, 41, 41, 1)",
}));

export const BlogDetailsSection = ({ data }) => {
  return (
    <StyledBlogDetailsSection>
      <StyledBlogTitle>{`${data.blogTitle}`}</StyledBlogTitle>
      <StyledBlogDetails variant="body1">
        {`${data.blogDetails}`}
      </StyledBlogDetails>
    </StyledBlogDetailsSection>
  );
};
