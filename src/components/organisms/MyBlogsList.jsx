import React from "react";
import { Paper } from "../molecules/Paper";
import { Typography } from "../atoms/Typography";
import styled from "@emotion/styled";
import { useFetchUserBlogs } from "../../api/queries/useFetchUserBlogs";
import { BlogItem } from "../molecules/BlogItem";

const StyledPaper = styled(Paper)(() => ({
  display: "flex",
  padding: 0,
  borderRadius: 0,
  flexDirection: "column",
}));

export const MyBlogsList = ({ username }) => {
  const { isError, isSuccess, data } = useFetchUserBlogs(username);

  if (isError) {
    <StyledPaper elevation={0}>
      <Typography sx={{ paddingInline: 14, paddingBlock: 5 }} variant={"h6"}>
        Unable to fetch Blogs
      </Typography>
    </StyledPaper>;
  }
  if (data?.data && isSuccess) {
    const authorName = `${data?.data[0].blogAuthor?.firstName} ${data?.data[0].blogAuthor.lastName}`;

    return (
      <StyledPaper elevation={0}>
        <Typography sx={{ paddingInline: 14, paddingBlock: 5 }} variant={"h6"}>
          {authorName}
        </Typography>
        {data?.data.map((item) => (
          <BlogItem
            key={item._id}
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
