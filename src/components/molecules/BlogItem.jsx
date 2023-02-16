import React from "react";
import { Typography } from "../atoms/Typography";
import { ListItemText } from "../atoms/ListItemText";
import { Paper } from "./Paper";
import { Stack } from "../atoms/Stack";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "start",
  [theme.breakpoints.down("md")]: {
    maxWidth: 300,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 300,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 600,
  },
}));

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

const StyledBlogDetails = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    maxWidth: 300,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 600,
  },
  maxHeight: 50,
  overflowWrap: "break-word",
  fontSize: 16,
  fontWeight: 400,
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  color: "rgba(117, 117, 117, 1)",
}));

const StyledItem = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    paddingInline: 110,
  },
  [theme.breakpoints.down("sm")]: {
    paddingInline: 15,
  },
  display: "flex",
  justifyContent: "flex-start",
  margin: 1,
  paddingBlock: 10,
}));

export const BlogItem = ({
  blogTitle,
  blogCategory,
  blogAuthor,
  blogDetails,
  _id,
  ...props
}) => {
  const navigate = useNavigate();
  return (
    <StyledItem elevation={0} onClick={() => navigate(`/blog/${_id}`)}>
      <StyledStack>
        {blogAuthor && (
          <ListItemText>
            <StyledUsername variant="h4">{blogAuthor}</StyledUsername>
          </ListItemText>
        )}
        <ListItemText>
          <StyledBlogTitle variant="h3">{blogTitle}</StyledBlogTitle>
        </ListItemText>
        <ListItemText>
          <StyledBlogCategory variant="subtitle2">{`Category: ${blogCategory}`}</StyledBlogCategory>
        </ListItemText>
        <ListItemText>
          <StyledBlogDetails variant="body1">{blogDetails}</StyledBlogDetails>
        </ListItemText>
      </StyledStack>
    </StyledItem>
  );
};
