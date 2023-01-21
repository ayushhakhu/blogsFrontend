import React from "react";
import { MyBlogsList } from "../organisms/MyBlogsList";
import { Grid } from "@mui/material";
import { AppBar } from "../organisms/AppBar";

const MyBlogs = () => {
  return (
    <>
      <AppBar />
      <Grid container>
        <Grid item lg={12} xxl={12} md={12} sm={12} xs={12}>
          <MyBlogsList />
        </Grid>
      </Grid>
    </>
  );
};

export default MyBlogs;
