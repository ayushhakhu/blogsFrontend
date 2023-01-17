import React from "react";
import { BlogsDetails } from "../organisms/BlogsDetails";
import { UserDetails } from "../organisms/UserDetails";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const BlogDetailsPage = (props) => {
  let params = useParams();

  const { blogId } = params;

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <BlogsDetails blogId={blogId} a={"b"} />
      </Grid>
      <Grid item xs={4}>
        <UserDetails />
      </Grid>
    </Grid>
  );
};

export default BlogDetailsPage;
