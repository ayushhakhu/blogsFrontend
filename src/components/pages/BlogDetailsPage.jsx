import React, { useMemo } from "react";
import { BlogsDetails } from "../organisms/BlogDetailsSection/BlogsDetails";
import { UserDetails } from "../organisms/UserDetails";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { AppBar } from "../organisms/AppBar";
import { useFetchBlog } from "../../api/queries/useFetchBlog";
import { BlogComments } from "../organisms/BlogCommentsSection/BlogComments";

const BlogDetailsPage = (props) => {
  let params = useParams();

  const { blogId } = params;

  const { data, isSuccess, isError, isLoading } = useFetchBlog(blogId);

  const memoMizedData = useMemo(() => data?.data, [data]);

  return (
    <>
      <AppBar />
      <Grid container>
        <Grid item xs={12} sm={12} lg={8} md={8} xxl={8}>
          <BlogsDetails
            blogId={blogId}
            data={memoMizedData}
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
      <BlogComments blogId={blogId} />
    </>
  );
};

export default BlogDetailsPage;
