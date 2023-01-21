import React from "react";
import { Paper } from "../molecules/Paper";
import { BlogItem } from "../molecules/BlogItem";
import styled from "@emotion/styled";
import { useFetchBlogs } from "../../api/queries/useFetchBlogs";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: 0,
  borderRadius: 0,
  flexDirection: "column",
}));

export const BlogsList = (props) => {
  const { data, isSuccess, isLoading, isError } = useFetchBlogs();

  if (isSuccess && !isError) {
    return (
      <StyledPaper elevation={0}>
        {data?.data.map((item) => (
          <BlogItem
            blogTitle={item.blogTitle}
            blogCategory={item.blogCategory}
            blogAuthor={item.blogAuthor?.username}
            blogDetails={item.blogDetails}
            _id={item._id}
          />
        ))}
        {/* <Pagination
        page={10}
        count={1}
        onChange={(_, page) => console.log("hello")}
      /> */}
      </StyledPaper>
    );
  }
  if (isLoading) {
    <>Loading.............</>;
  }
};
