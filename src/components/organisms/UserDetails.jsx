import React from "react";
import { Paper } from "../molecules/Paper";
import styled from "@emotion/styled";
import { Typography } from "../atoms/Typography";
import { Avatar } from "@mui/material";
import { Stack } from "../atoms/Stack";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  position: "sticky",
  top: 0,
  right: 0,
  paddingBlock: 20,
  borderRadius: 0,
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    paddingInlineStart: 100,
  },
  [theme.breakpoints.down("sm")]: {
    paddingInlineStart: 10,
  },
  [theme.breakpoints.up("md")]: {
    paddingInlineStart: 100,
  },
}));

export const UserDetails = ({ data, isSuccess, isError, isLoading }) => {
  const stringAvatar = (name) => {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  const navigate = useNavigate();

  if (isLoading) {
    return <>Loading..........</>;
  }

  if (isSuccess && !isError) {
    return (
      <StyledPaper elevation={0}>
        <Stack
          spacing={2}
          direction={"column"}
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginInline: 10,
          }}
        >
          <Avatar
            sx={{ width: 88, height: 88 }}
            alt="username"
            {...stringAvatar(
              `${data?.blogAuthor?.firstName} ${data?.blogAuthor?.lastName}`
            )}
          />

          <Typography
            sx={{
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              color: "rgba(41, 41, 41, 1)",
              fontSize: 16,
              fontWeight: 500,
              marginTop: 40,
            }}
            variant="body1"
          >{`${data?.blogAuthor?.username}`}</Typography>
          <Typography
            onClick={() => navigate(`/user/${data?.blogAuthor?.username}`)}
            sx={{
              fontFamily: `medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
              color: "rgba(0,0,0,0.8)",
              fontSize: 16,
              fontWeight: 400,
              marginTop: 4,
            }}
            variant="body1"
          >{`${data?.blogAuthor?.noOfBlogs} Posts`}</Typography>
        </Stack>
      </StyledPaper>
    );
  }
};
