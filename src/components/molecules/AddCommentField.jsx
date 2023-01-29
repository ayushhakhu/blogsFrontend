import React, { useState, useRef } from "react";
import { TextField } from "../atoms/TextField";
import Chip from "@mui/material/Chip";
import { Controller, useForm } from "react-hook-form";

export const AddCommentField = ({
  placeholder,
  label,
  blogId = "",
  reviewId = "",
  onSucessClick,
  ...props
}) => {
  const [showCommentButton, setShowCommentButton] = useState(false);

  const setUnsetChipButtons = () => {
    if (!showCommentButton) {
      setShowCommentButton(true);
    } else {
      setShowCommentButton(false);
    }
  };

  const { control, getValues } = useForm({
    defaultValues: {
      Comment: "",
      Reply: "",
    },
  });

  const onClickButton = () => {
    if (label === "Comment") {
      if (getValues("Comment")) {
        let payload = { blogReview: getValues("Comment") };
        onSucessClick({ blogId: blogId, payload: payload });
      }
    } else {
      if (getValues("Reply")) {
        let payload = { blogReviewComment: getValues("Reply") };

        onSucessClick({ reviewId: reviewId, payload: payload });
      }
    }
  };

  return (
    <>
      <Controller
        name={label}
        control={control}
        rules={{ minLength: { value: 1, message: "This is a required Field" } }}
        render={({ field: { onChange } }) => (
          <TextField
            required
            onChange={(event) => {
              onChange(event.target.value);
            }}
            onClick={setUnsetChipButtons}
            placeholder={placeholder}
            sx={{ width: 500, marginBottom: 2 }}
          />
        )}
      />
      {showCommentButton && (
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            width: 530,
            justifyContent: "flex-end",
          }}
        >
          <Chip
            label={"Cancel"}
            variant="outlined"
            onClick={setUnsetChipButtons}
            color="primary"
            sx={{
              color: "rgba(41, 41, 41, 1)",
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontWeight: 400,
              marginTop: 2,
              marginInline: 2,
              width: 100,
              border: 0,
            }}
          />
          <Chip
            type="submit"
            label={label}
            variant="outlined"
            onClick={onClickButton}
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
          />
        </div>
      )}
    </>
  );
};
