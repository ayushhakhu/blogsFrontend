import React from "react";
import { CreateBlogForm } from "../organisms/CreateBlogForm";
import { AppBar } from "../organisms/AppBar";
import { Grid } from "@mui/material";

const CreateNewBlogPage = () => {
  return (
    <>
      <AppBar />
      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={12} xxl={12}>
          <CreateBlogForm />
        </Grid>
      </Grid>
    </>
  );
};

export default CreateNewBlogPage;
