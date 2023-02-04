import React from "react";
import { Paper } from "../molecules/Paper";
import { BlogItem } from "../molecules/BlogItem";
import styled from "@emotion/styled";
import { useFetchBlogs } from "../../api/queries/useFetchBlogs";
import { AlertProvider } from "../atoms/AlertProvider";
import { Typography } from "../atoms/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// import { Pagination } from "../atoms/Pagination";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: 0,
  borderRadius: 0,
  flexDirection: "column",
}));

export const BlogsList = () => {
  const { data, isSuccess, isError, error, status } = useFetchBlogs();

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
        {/* <Pagination
          page={10}
          count={1}
          onChange={(_, page) => console.log("hello")}
        /> */}
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
