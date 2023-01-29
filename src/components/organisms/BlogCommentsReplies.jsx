import React from "react";
import styled from "@emotion/styled";
import { Paper } from "../molecules/Paper";
import { Typography } from "../atoms/Typography";
import { Avatar } from "@mui/material";
import { useFetchBlogReviewsComments } from "../../api/queries/useFetchBlogReviewsComments";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  paddingBlock: 10,
  borderRadius: 0,
  paddingInline: 0,
  flexDirection: "column",
  paddingInlineStart: 30,
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

export const BlogCommentsReplies = ({ reviewId }) => {
  console.log("reviewId~~~~~~~~~~~~~~~>", reviewId);
  const { data, isSuccess, isError, isLoading } =
    useFetchBlogReviewsComments(reviewId);

  if (isLoading) {
    return (
      <StyledPaper elevation={0}>
        <Typography
          sx={{
            fontSize: 15,
            color: "rgba(41, 41, 41, 1)",
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            fontWeight: 700,
            paddingInline: 2,
          }}
          variant="h6"
        >
          Loading...
        </Typography>
      </StyledPaper>
    );
  }

  if (isSuccess && data?.data) {
    return (
      <StyledPaper elevation={0}>
        {data?.data.map((item) => (
          <div
            className="avatarAndUsername"
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              marginBlock: 5,
            }}
          >
            <Avatar
              sx={{
                marginBottom: 2,
                padding: 1,
                width: 12,
                height: 12,
              }}
              alt="username"
              {...stringAvatar(`${item.user.firstName} ${item.user.lastName}`)}
            />
            <div
              className="commentsAndReviewas"
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  color: "rgba(41, 41, 41, 1)",
                  fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
                  fontWeight: 700,
                  paddingInline: 2,
                }}
                variant="h6"
              >
                {`${item.user.firstName} ${item.user.lastName}`}
              </Typography>
              <StyledBlogCommentsAndReviews variant="body1">
                {item.blogReviewComment}
              </StyledBlogCommentsAndReviews>
            </div>
          </div>
        ))}
      </StyledPaper>
    );
  }
};
