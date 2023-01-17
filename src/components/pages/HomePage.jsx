import React from "react";
import { BlogsList } from "../organisms/BlogsList";
import { BlogCategorySelection } from "../organisms/BlogCategorySelection";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <BlogsList />
      </Grid>
      <Grid item xs={4}>
        <BlogCategorySelection />
      </Grid>
    </Grid>
  );
};

export default HomePage;
