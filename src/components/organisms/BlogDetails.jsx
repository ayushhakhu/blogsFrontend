import React from "react";
import { Paper } from "../molecules/Paper";
import styled from "@emotion/styled";
import { Typography } from "../atoms/Typography";

const StyledBlogDetails = styled(Paper)({
  display: "flex",
  padding: 10,
  marginTop: 80,
  flexDirection: "column",
  position: "sticky",
  top: 0,
  right: 0,
});
export const BlogDetails = () => {
  return (
    <StyledBlogDetails>
      <Typography style={{ paddingTop: 10 }} title={"Blog Details"} />
    </StyledBlogDetails>
  );
};
