import React from "react";
import { Paper } from "../molecules/Paper";
import { BlogItem } from "../molecules/BlogItem";
import { Typography } from "../atoms/Typography";
import styled from "@emotion/styled";
import { useFetchCategoryBlogs } from "../../api/queries/useFetchCategoryBlogs";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: 0,
  borderRadius: 0,
  flexDirection: "column",
}));

export const CategoryBlogsList = ({ category }) => {
  const { isError, isSuccess, data } = useFetchCategoryBlogs(category);

  if (isError) {
    <StyledPaper elevation={0}>
      <Typography sx={{ paddingInline: 14, paddingBlock: 5 }} variant={"h6"}>
        Unable to fetch Blogs
      </Typography>
    </StyledPaper>;
  }

  if (data?.data.length === 0 && isSuccess) {
    return (
      <StyledPaper elevation={0}>
        <Typography sx={{ paddingInline: 14, paddingBlock: 5 }} variant={"h6"}>
          No Blogs
        </Typography>
      </StyledPaper>
    );
  }
  if (data?.data && isSuccess) {
    return (
      <StyledPaper elevation={0}>
        {data?.data.map((item) => (
          <BlogItem
            key={item.blogTitle}
            blogTitle={item.blogTitle}
            blogCategory={item.blogCategory}
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
};
