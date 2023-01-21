import React from "react";
import { BlogsList } from "../organisms/BlogsList";
import { BlogCategorySelection } from "../organisms/BlogCategorySelection";
import { Grid } from "@mui/material";
import { AppBar } from "../organisms/AppBar";

const HomePage = () => {
  return (
    <>
      <AppBar />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} lg={8} md={12} xxl={8}>
          <BlogsList />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={12} xxl={4}>
          <BlogCategorySelection />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
