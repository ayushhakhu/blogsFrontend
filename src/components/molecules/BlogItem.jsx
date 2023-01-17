import React from "react";
import { Typography } from "../atoms/Typography";
import { ListItemText } from "../atoms/ListItemText";
import { Paper } from "./Paper";
import { Stack } from "../atoms/Stack";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "start",
  padding: 10,
});

const StyledUsername = styled(Typography)({
  overflow: "hidden",
  width: 600,
  fontSize: 13,
  fontWeight: 500,
  color: `rgba(41, 41, 41, 1)`,
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
});

const StyledBlogTitle = styled(Typography)({
  overflow: "hidden",
  width: 600,
  fontSize: 22,
  fontWeight: 700,
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
});

const StyledBlogCategory = styled(Typography)({
  color: "rgba(117, 117, 117, 1)",
  backgroundColor: "rgba(242, 242, 242, 1)",
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontWeight: 400,
  borderRadius: 100,
  paddingInline: "5px !important",
});

const StyledBlogDetails = styled(Typography)({
  overflow: "hidden",
  width: 600,
  fontSize: 16,
  fontWeight: 400,
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  color: "rgba(117, 117, 117, 1)",
});

export const BlogItem = (props) => {
  const { blogTitle, blogCategory, blogAuthor, blogDetails, _id } = props;

  const navigate = useNavigate();
  return (
    <Paper
      elevation={0}
      sx={{ display: "flex", margin: 1 }}
      onClick={() => navigate(`/${_id}`)}
    >
      <StyledStack>
        <ListItemText>
          <StyledUsername variant="h4" title={blogAuthor} />
        </ListItemText>
        <ListItemText>
          <StyledBlogTitle variant="h3" title={blogTitle} />
        </ListItemText>
        <ListItemText>
          <StyledBlogCategory
            variant="subtitle2"
            title={`Category: ${blogCategory}`}
          />
        </ListItemText>
        <ListItemText>
          <StyledBlogDetails noWrap variant="body1" title={blogDetails} />
        </ListItemText>
      </StyledStack>
    </Paper>
  );
};
