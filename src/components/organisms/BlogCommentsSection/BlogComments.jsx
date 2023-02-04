import React, { useState } from "react";
import styled from "@emotion/styled";
import { Paper } from "../../molecules/Paper";
import { Typography } from "../../atoms/Typography";
import { Avatar, Box } from "@mui/material";
import { AddCommentField } from "../../molecules/AddCommentField";
import { BlogCommentsAndReviewsActions } from "../../molecules/BlogCommentsAndReviewsActions";
import { useFetchBlogReviews } from "../../../api/queries/useFetchBlogReviews";
import AlertProvider from "../../atoms/AlertProvider";
import { usePostBlogReview } from "../../../api/mutations/usePostBlogReview";
import { usePostBlogReviewComments } from "../../../api/mutations/usePostBlogReviewComments";
import { BlogCommentsRepliesActionHandlers } from "./BlogCommentsRepliesActionHandlers";

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

export const BlogComments = ({ blogId }) => {
  const [showReplyIdButton, setshowReplyIdButton] = useState(null);

  const { isSuccess, isError, data } = useFetchBlogReviews(blogId);

  const {
    isSuccess: isPostBlogReviewSucess,
    isError: isPostBlogReviewError,
    mutate: postBlogReviewMethod,
  } = usePostBlogReview();
  const {
    isSuccess: isPostBlogReviewCommentSucess,
    isError: isPostBlogReviewCommentError,
    mutate: postBlogReviewCommentsMethod,
  } = usePostBlogReviewComments();

  if (isError) {
    return (
      <AlertProvider severity={"warning"} text="Unable to fetch comments" />
    );
  }
  if (isSuccess && data?.data.length === 0) {
    return (
      <StyledPaper elevation={0}>
        <Typography variant="body1">No Comments Add a new One</Typography>
        <AddCommentField
          blogId={blogId}
          label="Comment"
          placeholder="Add a comment..."
          isPostBlogReviewSucess={isPostBlogReviewSucess}
          isPostBlogReviewError={isPostBlogReviewError}
          onSucessClick={postBlogReviewMethod}
        />
      </StyledPaper>
    );
  }

  if (isSuccess && data.data) {
    return (
      <StyledPaper elevation={0}>
        <AddCommentField
          blogId={blogId}
          isPostBlogReviewSucess={isPostBlogReviewSucess}
          isPostBlogReviewError={isPostBlogReviewError}
          label="Comment"
          placeholder="Add a comment..."
          onSucessClick={postBlogReviewMethod}
        />
        {data?.data.map((item, index) => (
          <StyledCommentsSection key={index}>
            <Avatar
              sx={{
                marginBottom: 2,
              }}
              alt="username"
              {...stringAvatar(`${item.user.firstName} ${item.user.lastName}`)}
            />
            <StyledCommentDetails>
              <StyledCommentsUsername variant="h6">
                {`${item.user.firstName} ${item.user.lastName}`}
              </StyledCommentsUsername>
              <StyledBlogCommentsAndReviews variant="body1">
                {item.blogReview}
              </StyledBlogCommentsAndReviews>
              <BlogCommentsAndReviewsActions
                setshowReplyIdButton={setshowReplyIdButton}
                showReplyIdButton={showReplyIdButton}
                id={item._id}
                username={item?.user?.username}
                blogId={blogId}
              />
              {showReplyIdButton === item._id && (
                <AddCommentField
                  reviewId={showReplyIdButton}
                  blogId={blogId}
                  label="Reply"
                  isPostBlogReviewCommentSucess={isPostBlogReviewCommentSucess}
                  isPostBlogReviewCommentError={isPostBlogReviewCommentError}
                  placeholder="Add a reply..."
                  onSucessClick={postBlogReviewCommentsMethod}
                />
              )}
              {item.reviewCommentsCount > 0 && (
                <BlogCommentsRepliesActionHandlers
                  id={item._id}
                  reviewCommentsCount={item.reviewCommentsCount}
                  bodyUsername={item?.user?.username}
                />
              )}
            </StyledCommentDetails>
          </StyledCommentsSection>
        ))}
      </StyledPaper>
    );
  }
};
