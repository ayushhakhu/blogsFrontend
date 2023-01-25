import React from "react";
import styled from "@emotion/styled";
import { Paper } from "../molecules/Paper";
import { Typography } from "../atoms/Typography";
import { Avatar, Badge } from "@mui/material";
import { IconButton } from "../atoms/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

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
    children: `${name.split(" ")[0][0]}${name.split(".")[1][0]}`,
  };
};

const comments = [
  {
    _id: "63d0fccf29741b7161396231",
    blogReview: "Nice Prod - 1",
    reviewCommentsCount: 0,
  },
  {
    _id: "63d0fccf29741b7161396231",
    blogReview: "Nice Prod - 2",
    reviewCommentsCount: 10,
  },
  {
    _id: "63d0fccf29741b7161396231",
    blogReview: "Nice Prod - 3",
    reviewCommentsCount: 0,
  },
];

export const BlogComments = () => {
  return (
    <StyledPaper elevation={0}>
      {comments.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBlock: 10,
            alignItems: "flex-start",
          }}
        >
          {/* <Avatar
              alt="username"
              {...stringAvatar(`${data?.blogAuthor?.username?.split("@")[0]}`)}
            /> */}
          <Avatar
            sx={{
              width: 24,
              height: 24,
              marginInlineStart: 2,
              marginBottom: 2,
            }}
            alt="username"
            {...stringAvatar(`ayush.hakhu`)}
          />

          <Typography
            sx={{
              fontSize: 15,
              color: "rgba(41, 41, 41, 1)",
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontWeight: 400,
              paddingInline: 2,
            }}
            variant="body1"
          >
            {item.blogReview}
          </Typography>
          {item.reviewCommentsCount > 0 && (
            <Typography
              sx={{
                paddingInline: 2,
                fontFamily: `source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif`,
              }}
              variant="body1"
            >
              {`Comments - ${item.reviewCommentsCount}`}
            </Typography>
          )}
        </div>
      ))}
    </StyledPaper>
  );
};
