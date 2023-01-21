import React from "react";
import { BlogsDetails } from "../organisms/BlogsDetails";
import { UserDetails } from "../organisms/UserDetails";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { AppBar } from "../organisms/AppBar";
import { useFetchBlog } from "../../api/queries/useFetchBlog";

const BlogDetailsPage = (props) => {
  let params = useParams();

  const { blogId } = params;

  const { data, isSuccess, isError, isLoading } = useFetchBlog(blogId);

  return (
    <>
      <AppBar />
      <Grid container>
        <Grid item xs={12} sm={12} lg={8} md={8} xxl={8}>
          <BlogsDetails
            blogId={blogId}
            data={data?.data}
            isSuccess={isSuccess}
            isError={isError}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4} xxl={4}>
          <UserDetails
            data={data?.data}
            isSuccess={isSuccess}
            isError={isError}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BlogDetailsPage;
