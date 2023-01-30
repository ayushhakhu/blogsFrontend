import React from "react";
import { Typography } from "../../atoms/Typography";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledBlogDetailsFooter = styled(Box)(() => ({
  marginTop: 50,
}));

export const BlogDetailsFooter = ({ data }) => {
  return (
    <StyledBlogDetailsFooter>
      <Typography
        sx={{
          fontFamily: `source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif`,
        }}
        variant="h6"
      >
        {/* {`Comments - ${data.blogReviews}`} */}
        {`Comments - 1`}
      </Typography>
    </StyledBlogDetailsFooter>
  );
};
