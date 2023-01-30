import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { IconButton } from "../../atoms/IconButton";
import { Typography } from "../../atoms/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { AuthContext } from "../../../hooks/AuthContext";
import { useDeleteBlog } from "../../../api/mutations/useDeleteBlog";
import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const stringAvatar = (name) => {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const StyledBlogDetailsHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledBlogDetailsHeaderAvatar = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

export const BlogDetailsHeader = ({ data, blogId, setshowAlert }) => {
  const { username } = useContext(AuthContext);
  const { mutate } = useDeleteBlog();
  const navigate = useNavigate();

  const onShareClickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setshowAlert(true);
  };

  const blogAuthor = data?.blogAuthor?.username;

  const onClickDeleteBlog = () => {
    mutate(blogId);
    navigate("/");
  };
  return (
    <StyledBlogDetailsHeader>
      <StyledBlogDetailsHeaderAvatar>
        <Avatar
          alt="username"
          {...stringAvatar(
            `${data?.blogAuthor?.firstName} ${data?.blogAuthor?.lastName}`
          )}
        />

        <Typography
          sx={{
            fontSize: 16,
            color: "rgba(41, 41, 41, 1)",
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            fontWeight: 400,
            paddingInline: 2,
          }}
          variant="subtitle1"
        >
          {`${data?.blogAuthor?.firstName} ${data?.blogAuthor?.lastName}`}
        </Typography>
      </StyledBlogDetailsHeaderAvatar>
      <Box>
        <IconButton onClick={onShareClickHandler}>
          <ShareIcon />
        </IconButton>
        {blogAuthor === username && (
          <IconButton onClick={onClickDeleteBlog}>
            <Delete />
          </IconButton>
        )}
      </Box>
    </StyledBlogDetailsHeader>
  );
};
