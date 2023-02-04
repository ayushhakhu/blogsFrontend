import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Paper } from "../../molecules/Paper";
import { Typography } from "../../atoms/Typography";
import { Avatar, Box } from "@mui/material";
import { useFetchBlogReviewsComments } from "../../../api/queries/useFetchBlogReviewsComments";
import { IconButton } from "../../atoms/IconButton";
import { AuthContext } from "../../../hooks/AuthContext";
import { useDeleteReviewComment } from "../../../api/mutations/useDeleteBlogReviewComment";
import { Delete } from "@mui/icons-material";

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

const StyledAvatarAndUsername = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  marginBlock: 5,
}));

const StyledCommentsAndReviews = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
}));

export const BlogCommentsReplies = ({ reviewId }) => {
  const { data, isSuccess, isLoading } = useFetchBlogReviewsComments(reviewId);

  const { username } = useContext(AuthContext);
  const { mutate } = useDeleteReviewComment(reviewId);

  function onDeleteReviewHandler(reviewCommentId) {
    mutate(reviewCommentId);
  }

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
        {data?.data.map((item, index) => (
          <StyledAvatarAndUsername key={index}>
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
            <StyledCommentsAndReviews>
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
            </StyledCommentsAndReviews>
            {username === item?.user?.username && (
              <IconButton onClick={() => onDeleteReviewHandler(item._id)}>
                <Delete fontSize="small" />
              </IconButton>
            )}
          </StyledAvatarAndUsername>
        ))}
      </StyledPaper>
    );
  }
};
