import { Paper } from "../molecules/Paper";
import React from "react";
import { Typography } from "../atoms/Typography";
import { Stack } from "../atoms/Stack";

const MyBlogs = () => {
  return (
    <Paper elevation={0}>
      <Stack>
        <Typography title="Welcome ToDo WebPage" />
        <Typography title="Manage your todos" variant="h6" />
      </Stack>
    </Paper>
  );
};

export default MyBlogs;
