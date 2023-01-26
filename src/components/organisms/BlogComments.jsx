import React, { useState } from "react";
import styled from "@emotion/styled";
import { Paper } from "../molecules/Paper";
import { Typography } from "../atoms/Typography";
import { Avatar } from "@mui/material";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BlogCommentsReplies } from "../organisms/BlogCommentsReplies";

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
    _id: "63d0fccf29741b7161396231",
    blogReview: "Nice Prod - 2",
    reviewCommentsCount: 10,
    username: "Test User",
  },
  {
    _id: "63d0fccf29741b7161396231",
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

export const BlogComments = () => {
  const [replyButton, setreplyButton] = useState(false);
  const onClickReply = () => {
    setreplyButton((prevState) => !prevState);
  };
  return (
    <StyledPaper elevation={0}>
      {comments.map((item) => (
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
            }}
            alt="username"
            {...stringAvatar(item.username)}
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
              {item.username}
            </Typography>
            <StyledBlogCommentsAndReviews variant="body1">
              {item.blogReview}
            </StyledBlogCommentsAndReviews>
            {item.reviewCommentsCount > 0 && (
              <>
                <Chip
                  size="small"
                  label={`${item.reviewCommentsCount} replies`}
                  variant="outlined"
                  onClick={onClickReply}
                  color="primary"
                  sx={{
                    color: "rgba(41, 41, 41, 1)",
                    fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
                    fontWeight: 200,
                    marginTop: 2,
                    marginInline: 2,
                    width: 100,
                    border: 0,
                  }}
                  icon={
                    replyButton ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />
                  }
                />
                {replyButton && <BlogCommentsReplies />}
              </>
            )}
          </div>
        </div>
      ))}
    </StyledPaper>
  );
};
