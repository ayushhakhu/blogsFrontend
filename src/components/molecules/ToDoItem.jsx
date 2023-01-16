import React from "react";
import { Typography } from "../atoms/Typography";
import { ListItemText } from "../atoms/ListItemText";
import { Paper } from "./Paper";
import { Stack } from "../atoms/Stack";
import styled from "@emotion/styled";

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "start",
  padding: 10,
});

export const ToDoItem = (props) => {
  const { blogTitle, blogCategory, blogReviews, blogDetails } = props;
  return (
    <Paper elevation={10} sx={{ display: "flex", margin: 1 }}>
      <StyledStack>
        <ListItemText>
          <Typography variant="h6" title={blogTitle} />
        </ListItemText>
        <ListItemText>
          <Typography variant="subtitle2" title={`Category: ${blogCategory}`} />
        </ListItemText>
        <ListItemText>
          <Typography
            noWrap
            sx={{ overflow: "hidden", width: 200 }}
            variant="body1"
            title={blogDetails}
          />
        </ListItemText>
        <ListItemText>
          <Typography variant="caption" title={`Reviews : ${blogReviews}`} />
        </ListItemText>
      </StyledStack>
    </Paper>
  );
};
