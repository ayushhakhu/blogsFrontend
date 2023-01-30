import React, { useState } from "react";
import { Paper } from "../../molecules/Paper";
import { AlertProvider } from "../../atoms/AlertProvider";
import styled from "@emotion/styled";
import { BlogDetailsHeader } from "./BlogDetailsHeader";
import { BlogDetailsSection } from "./BlogDetailsSection";
import { BlogDetailsFooter } from "./BlogDetailsFooter";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  paddingBlock: 20,
  borderRadius: 0,
  paddingInline: 0,
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    paddingInlineStart: 100,
  },
  [theme.breakpoints.down("sm")]: {
    paddingInlineStart: 10,
  },
  [theme.breakpoints.up("md")]: {
    paddingInlineStart: 110,
  },
}));

export const BlogsDetails = ({
  data,
  isSuccess,
  isError,
  isLoading,
  blogId,
  ...props
}) => {
  const [showAlert, setshowAlert] = useState(false);

  if (isLoading) {
    return <>Loading..........</>;
  }

  if (isSuccess && !isError) {
    return (
      <StyledPaper elevation={0}>
        <BlogDetailsHeader
          data={data}
          blogId={blogId}
          setshowAlert={setshowAlert}
        />
        <BlogDetailsSection data={data} />
        {showAlert && <AlertProvider severity="info" text="Copied Url" />}
        <BlogDetailsFooter data={data} />
      </StyledPaper>
    );
  }
};
