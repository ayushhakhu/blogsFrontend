import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "../atoms/Typography";
import { Paper } from "../molecules/Paper";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "../atoms/IconButton";
import { AlertProvider } from "../atoms/AlertProvider";
import styled from "@emotion/styled";

const stringAvatar = (name) => {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

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

export const BlogsDetails = ({
  data,
  isSuccess,
  isError,
  isLoading,
  ...props
}) => {
  const [showAlert, setshowAlert] = useState(false);

  const onClickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setshowAlert(true);
  };

  if (isLoading) {
    return <>Loading..........</>;
  }

  if (isSuccess && !isError) {
    return (
      <StyledPaper elevation={0}>
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
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
          </div>
          <div className="media_Links">
            <IconButton onClick={onClickHandler}>
              <ShareIcon />
            </IconButton>
          </div>
        </header>
        <section style={{ marginTop: 20, paddingInline: 0 }}>
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
            {`${data.blogTitle}`}
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
            {`${data.blogDetails}`}
          </Typography>
        </section>
        {showAlert && <AlertProvider severity="info" text="Copied Url" />}
        <footer style={{ marginTop: 50 }}>
          <Typography
            sx={{
              fontFamily: `source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif`,
            }}
            variant="h6"
          >
            {/* {`Comments - ${data.blogReviews}`} */}
            {`Comments - 1`}
          </Typography>
        </footer>
      </StyledPaper>
    );
  }
};
