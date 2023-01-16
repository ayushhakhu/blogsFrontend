import React from "react";
import { ToDoList } from "../organisms/ToDoList";
import { BlogDetails } from "../organisms/BlogDetails";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ToDoList />
      </Grid>
      <Grid item xs={8}>
        <BlogDetails />
      </Grid>
    </Grid>
  );
};

export default HomePage;
