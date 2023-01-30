import React, { useState, useContext } from "react";
import { TextField } from "../atoms/TextField";
import Chip from "@mui/material/Chip";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AddCommentField = ({
  placeholder,
  label,
  blogId = "",
  reviewId = "",
  onSucessClick,
  isPostBlogReviewError,
  isPostBlogReviewSucess,
  isPostBlogReviewCommentError,
  isPostBlogReviewCommentSucess,
  ...props
}) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [showCommentButton, setShowCommentButton] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);

  const { control, getValues } = useForm({
    defaultValues: {
      Comment: "",
      Reply: "",
    },
  });

  const handleClickOnTextField = () => {
    if (!showCommentButton) {
      setShowCommentButton(() => true);
    }
  };

  const handleClickOnCancelButton = () => {
    setShowCommentButton(() => false);
  };

  const handleOnSubmitClick = () => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
    if (label === "Comment" && getValues("Comment")) {
      let payload = { blogReview: getValues("Comment") };
      onSucessClick(
        { blogId: blogId, payload: payload },
        {
          onSuccess: (data) => {
            queryClient.invalidateQueries(`fetchBlogReviews${blogId}`);
          },
        }
      );
    }

    if (label === "Reply" && getValues("Reply")) {
      let payload = { blogReviewComment: getValues("Reply") };

      onSucessClick(
        { reviewId: reviewId, payload: payload },
        {
          onSuccess: (data) => {
            queryClient.invalidateQueries(`blogReviewsComments${reviewId}`);
          },
        }
      );
    }
  };

  const StyledTextFiedld = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 800,
    },
    marginBottom: 2,
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 800,
    },
    display: "flex",
    marginBottom: 10,
    justifyContent: "flex-end",
  }));

  return (
    <>
      <Controller
        name={label}
        control={control}
        rules={{
          required: {
            value: true,
            message: `${label} is a required field`,
          },
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <StyledTextFiedld
              required
              onChange={(event) => {
                onChange(event.target.value);
              }}
              onClick={handleClickOnTextField}
              placeholder={placeholder}
            />
            {error && (
              <span style={{ margin: 0, padding: 0, color: "red" }}>
                {error.message}
              </span>
            )}
          </>
        )}
      />
      {showCommentButton && (
        <StyledBox>
          <Chip
            label={"Cancel"}
            variant="outlined"
            onClick={handleClickOnCancelButton}
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
            label={label}
            variant="outlined"
            onClick={handleOnSubmitClick}
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
        </StyledBox>
      )}
    </>
  );
};
