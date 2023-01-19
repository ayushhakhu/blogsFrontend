import React from "react";
import { Paper } from "../molecules/Paper";
import styled from "@emotion/styled";
import { Typography } from "../atoms/Typography";
import { Avatar } from "@mui/material";
import { Stack } from "../atoms/Stack";
import { useNavigate } from "react-router-dom";

const StyledBlogCategorySelection = styled(Paper)({
  display: "flex",
  padding: 10,
  // marginTop: 80,
  flexDirection: "column",
  position: "sticky",
  top: 0,
  right: 0,
});

const bloge = {
  _id: "1",
  blogTitle: "First Blog",
  blogDetails:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  blogAuthor: "ayush.hakhu",
  blogCategory: "Science",
  blogReviews: 1,
};

export const UserDetails = () => {
  const stringAvatar = (name) => {
    return {
      children: `${name.split(" ")[0][0]}${name.split(".")[1][0]}`,
    };
  };

  const navigate = useNavigate();

  return (
    <StyledBlogCategorySelection elevation={0}>
      <Stack
        spacing={2}
        direction={"column"}
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: 40,
          marginInline: 10,
        }}
      >
        <Avatar
          sx={{ width: 88, height: 88 }}
          alt="username"
          {...stringAvatar(`${bloge.blogAuthor}`)}
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
        >{`${bloge.blogAuthor}`}</Typography>
        <Typography
          onClick={() => navigate(`/user/${bloge.blogAuthor}`)}
          sx={{
            fontFamily: `medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
            color: "rgba(0,0,0,0.8)",
            fontSize: 16,
            fontWeight: 400,
            marginTop: 4,
          }}
          variant="body1"
        >{`10  Posts`}</Typography>
      </Stack>
    </StyledBlogCategorySelection>
  );
};
