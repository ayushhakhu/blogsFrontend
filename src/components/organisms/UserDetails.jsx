import React from "react";
import { Paper } from "../molecules/Paper";
import styled from "@emotion/styled";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";

const StyledBlogCategorySelection = styled(Paper)({
  display: "flex",
  padding: 10,
  marginTop: 80,
  flexDirection: "column",
  position: "sticky",
  top: 0,
  right: 0,
});

const categoriesList = [
  "Science",
  "Philosophy",
  "Technology",
  "Science",
  "Philosophy",
  "Technology",
];

export const UserDetails = () => {
  return (
    <StyledBlogCategorySelection>
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
        title={"Discover more of what matters to you"}
      />
      <div style={{ margin: 0, padding: 0 }}>
        {categoriesList.map((item) => (
          <Button
            sx={{
              textTransform: "none",
              margin: 1,
              fontSize: 10,
              color: `rgba(117, 117, 117, 1)`,
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontWeight: "inherit",
            }}
            buttonContent={item}
            disableRipple
            color="inherit"
            variant="outlined"
          />
        ))}
      </div>
    </StyledBlogCategorySelection>
  );
};
