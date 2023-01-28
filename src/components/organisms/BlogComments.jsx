import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { Paper } from "../molecules/Paper";
import { Typography } from "../atoms/Typography";
import { Avatar, Box } from "@mui/material";
import { AddCommentField } from "../molecules/AddCommentField";
import { BlogCommentsAndReviewsActions } from "../molecules/BlogCommentsAndReviewsActions";
import { ShowCommentReplies } from "../molecules/ShowCommentReplies";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  paddingBlock: 20,
  borderRadius: 0,
  paddingInline: 0,
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    paddingInlineStart: 100,
  },
  [theme.breakpoints.down("sm")]: {
    paddingInlineStart: 10,
  },
  [theme.breakpoints.up("md")]: {
    paddingInlineStart: 110,
  },
}));

const stringAvatar = (name) => {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const comments = [
  {
    _id: "63d0fccf29741b7161396231",
    blogReview:
      "Very Big review comments Very Big review commentsVery Big review commentsVery Big review commentsVery Big review commentsVery Big review commentsVery Big review commentsVery Big review comments1Very Big review comments Very Big review commentsVery Big review commentsVery Big review commentsVery Big review commentsVery Big review commentsVery Big review commentsVery Big review comments1",
    reviewCommentsCount: 0,
    username: "Ayush Hakhu",
  },
  {
    _id: "63d0fccf29741b7161396232",
    blogReview: "Nice Prod - 2",
    reviewCommentsCount: 10,
    username: "Test User",
  },
  {
    _id: "63d0fccf29741b7161396233",
    blogReview: "Nice Prod - 3",
    reviewCommentsCount: 0,
    username: "One India",
  },
];

const StyledBlogCommentsAndReviews = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    maxWidth: 300,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 800,
  },
  overflowWrap: "break-word",
  fontSize: 15,
  color: "rgba(41, 41, 41, 1)",
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontWeight: 200,
  paddingInline: 18,
  marginTop: 10,
}));

const StyledCommentsSection = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  marginBlock: 5,
}));

const StyledCommentDetails = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
}));

const StyledCommentsUsername = styled(Typography)(() => ({
  fontSize: 15,
  color: "rgba(41, 41, 41, 1)",
  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontWeight: 700,
  paddingInline: 15,
}));

export const BlogComments = () => {
  const [replyButton, setreplyButton] = useState(false);
  const [showReplyIdButton, setshowReplyIdButton] = useState(null);

  const onClickReply = useCallback(() => {
    setreplyButton((prevState) => !prevState);
  }, []);

  return (
    <StyledPaper elevation={0}>
      <AddCommentField label="Comment" placeholder="Add a comment..." />
      {comments.map((item) => (
        <StyledCommentsSection>
          <Avatar
            sx={{
              marginBottom: 2,
            }}
            alt="username"
            {...stringAvatar(item.username)}
          />
          <StyledCommentDetails>
            <StyledCommentsUsername variant="h6">
              {item.username}
            </StyledCommentsUsername>
            <StyledBlogCommentsAndReviews variant="body1">
              {item.blogReview}
            </StyledBlogCommentsAndReviews>
            <BlogCommentsAndReviewsActions
              setshowReplyIdButton={setshowReplyIdButton}
              showReplyIdButton={showReplyIdButton}
              id={item._id}
            />
            {showReplyIdButton === item._id && (
              <AddCommentField label="Reply" placeholder="Add a reply..." />
            )}
            {item.reviewCommentsCount > 0 && (
              <ShowCommentReplies
                replyButton={replyButton}
                onClickReply={onClickReply}
                reviewCommentsCount={item.reviewCommentsCount}
              />
            )}
          </StyledCommentDetails>
        </StyledCommentsSection>
      ))}
    </StyledPaper>
  );
};
