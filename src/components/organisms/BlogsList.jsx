import React, { useState, useEffect } from "react";
import { Paper } from "../molecules/Paper";
import { BlogItem } from "../molecules/BlogItem";
import styled from "@emotion/styled";
import { useFetchBlogs } from "../../api/queries/useFetchBlogs";
import { useFetchBlogsCount } from "../../api/queries/useFetchBlogsCount";
import { AlertProvider } from "../atoms/AlertProvider";
import { Typography } from "../atoms/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Pagination } from "../atoms/Pagination";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: 0,
  borderRadius: 0,
  flexDirection: "column",
}));

export const BlogsList = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setpageCount] = useState(1);

  const { data, isSuccess, isError, error, status } = useFetchBlogs(page);
  const { data: blogsCountData, isSuccess: blogsCountSuccess } =
    useFetchBlogsCount();

  const changePageIndex = (pageIndex) => {
    setPage(pageIndex);
  };

  useEffect(() => {
    if (blogsCountSuccess && blogsCountData) {
      const countVal = Math.ceil(blogsCountData?.data.blogs / 10);
      setpageCount(countVal);
    }
  }, [blogsCountSuccess, blogsCountData]);

  if (status === "error") {
    return <AlertProvider severity="info" text={error.message} />;
  }

  if (status === "success" && data?.data.length === 0) {
    return (
      <StyledPaper elevation={0}>
        <Typography
          sx={{ display: "flex", justifyContent: "center", padding: 10 }}
          variant="body1"
        >
          No Data Available
        </Typography>
      </StyledPaper>
    );
  }

  if (isSuccess && !isError) {
    return (
      <StyledPaper elevation={0}>
        {data?.data.map((item, index) => (
          <BlogItem
            key={index}
            blogTitle={item.blogTitle}
            blogCategory={item.blogCategory}
            blogAuthor={item.blogAuthor?.username}
            blogDetails={item.blogDetails}
            _id={item._id}
          />
        ))}
        <Pagination
          page={page}
          count={pageCount}
          onChange={(_, page) => changePageIndex(page)}
        />
      </StyledPaper>
    );
  }
  if (status === "loading") {
    return (
      <StyledPaper
        elevation={0}
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CircularProgress />
        <Typography variant="body1">Loading....</Typography>
      </StyledPaper>
    );
  }
};
