import { Paper } from "../molecules/Paper";
import React from "react";
import { Image } from "../atoms/Image";
import { Typography } from "../atoms/Typography";
import { Stack } from "../atoms/Stack";

const WelcomePage = () => {
  return (
    <Paper elevation={0}>
      <Stack>
        <Image src={"test"} width={300} height={300} />
        <Typography title="Welcome ToDo WebPage" />
        <Typography title="Manage your todos" variant="h6" />
      </Stack>
    </Paper>
  );
};

export default WelcomePage;
