import React from "react";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BlogCommentsReplies } from "../organisms/BlogCommentsReplies";

export const ShowCommentReplies = ({
  reviewCommentsCount,
  onClickReply,
  replyButton,
  reviewId = "",
}) => {
  return (
    <>
      <Chip
        size="small"
        label={`${reviewCommentsCount} replies`}
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
        icon={replyButton ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}
      />
      {replyButton && <BlogCommentsReplies reviewId={reviewId} />}
    </>
  );
};
