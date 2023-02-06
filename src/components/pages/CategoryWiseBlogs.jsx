import React from "react";
import { CategoryBlogsList } from "../organisms/CategoryBlogsList";
import { Grid } from "@mui/material";
import { AppBar } from "../organisms/AppBar";
import { useParams } from "react-router-dom";

const CategoryWiseBlogs = () => {
  const { category } = useParams();

  return (
    <>
      <AppBar />
      <Grid container>
        <Grid item lg={12} xxl={12} md={12} sm={12} xs={12}>
          <CategoryBlogsList category={category} />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryWiseBlogs;
