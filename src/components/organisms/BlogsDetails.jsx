import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "../atoms/Typography";
import { Paper } from "../molecules/Paper";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "../atoms/IconButton";
import { AlertProvider } from "../atoms/AlertProvider";

const bloge = {
  _id: "1",
  blogTitle: "First Blog",
  blogDetails:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  blogAuthor: "ayush.hakhu",
  blogCategory: "Science",
  blogReviews: 1,
};

export const BlogsDetails = ({ blogId, ...props }) => {
  const [showAlert, setshowAlert] = useState(false);

  const stringAvatar = (name) => {
    return {
      children: `${name.split(" ")[0][0]}${name.split(".")[1][0]}`,
    };
  };

  const onClickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setshowAlert(true);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        padding: 10,
        borderRadius: 0,
        flexDirection: "column",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Avatar alt="username" {...stringAvatar(`${bloge.blogAuthor}`)} />
          <Typography
            sx={{
              fontSize: 16,
              color: "rgba(41, 41, 41, 1)",
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontWeight: 400,
              paddingInline: 2,
            }}
            variant="subtitle1"
          >{`${bloge.blogAuthor}`}</Typography>
        </div>
        <div className="media_Links">
          <IconButton onClick={onClickHandler}>
            <ShareIcon />
          </IconButton>
        </div>
      </header>
      <section style={{ marginTop: 20, marginInline: 20 }}>
        <Typography
          sx={{
            wordBreak: "break-word",
            wordWrap: "break-word",
            fontWeight: 700,
            paddingBlock: 5,
            fontSize: 32,
            fontFamily: `source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif`,
            color: "rgba(41, 41, 41, 1)",
          }}
        >
          {`${bloge.blogTitle}`}
        </Typography>
        <Typography
          sx={{
            marginTop: 5,
            wordBreak: "break-word",
            wordWrap: "break-word",
            letterSpacing: 1,
            lineHeight: 2,
            fontWeight: 400,
            fontSize: 20,
            fontFamily: `source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif`,
            color: "rgba(41, 41, 41, 1)",
          }}
          variant="body1"
        >
          {`${bloge.blogDetails}`}
        </Typography>
      </section>
      {showAlert && <AlertProvider severity="info" text="Copied Url" />}
    </Paper>
  );
};
