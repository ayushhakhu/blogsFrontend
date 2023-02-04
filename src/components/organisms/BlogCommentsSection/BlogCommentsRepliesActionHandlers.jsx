import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BlogCommentsReplies } from "./BlogCommentsReplies";

export const BlogCommentsRepliesActionHandlers = ({
  id,
  reviewCommentsCount,
}) => {
  const [repliesButtonState, setrepliesButtonState] = useState(false);
  const [reviewId, setReviewId] = useState(null);

  function onClickRepliesHandler(id) {
    setReviewId(id);
    setrepliesButtonState((prevState) => !prevState);
  }

  return (
    <>
      <Chip
        size="small"
        label={`${reviewCommentsCount} replies`}
        variant="outlined"
        onClick={() => onClickRepliesHandler(id)}
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
        icon={reviewId === id ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}
      />
      {repliesButtonState && reviewId === id && (
        <BlogCommentsReplies reviewId={reviewId} />
      )}
    </>
  );
};
