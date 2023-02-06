import React from "react";
import { Paper } from "../molecules/Paper";
import styled from "@emotion/styled";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const StyledBlogCategorySelection = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    paddingInline: 110,
  },
  [theme.breakpoints.down("sm")]: {
    paddingInline: 15,
  },
  [theme.breakpoints.up("md")]: {
    paddingInline: 0,
  },
  display: "flex",
  padding: 10,
  flexDirection: "column",
  position: "sticky",
  top: 0,
  right: 0,
}));

const categoriesList = ["Science", "Philosophy", "Technology"];

export const BlogCategorySelection = () => {
  const navigate = useNavigate();
  return (
    <StyledBlogCategorySelection elevation={0}>
      <Typography
        variant={"body1"}
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.083em",
          fontSize: 12,
          paddingInline: 1,
          marginBottom: 2,
          color: "rgba(41, 41, 41, 1)",
          fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
        }}
        style={{ paddingTop: 10 }}
      >
        {"Discover more of what matters to you"}
      </Typography>
      <div style={{ margin: 0, padding: 0 }}>
        {categoriesList.map((item, index) => (
          <Button
            onClick={() => navigate(`/category/${item}`)}
            key={index}
            sx={{
              textTransform: "none",
              margin: 1,
              fontSize: 10,
              color: `rgba(117, 117, 117, 1)`,
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontWeight: "inherit",
            }}
            disableRipple
            color="inherit"
            variant="outlined"
          >
            {item}
          </Button>
        ))}
      </div>
    </StyledBlogCategorySelection>
  );
};
