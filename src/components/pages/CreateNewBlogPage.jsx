import React from "react";
import { CreateBlogForm } from "../organisms/CreateBlogForm";
import { AppBar } from "../organisms/AppBar";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState, useCallback } from "react";

const CreateNewBlogPage = () => {
  const { control, handleSubmit, clearErrors } = useForm({
    defaultValues: {
      blogCategory: "",
      blogDetails: "",
      blogTitle: "",
    },
  });

  const [showPublishButton, setShowPulishButton] = useState(false);

  const handleShowPublishButton = useCallback(() => {
    setShowPulishButton((prevState) => !prevState);
  }, []);

  return (
    <>
      <AppBar
        handleSubmit={handleSubmit}
        showPublishButton={showPublishButton}
        handleShowPublishButton={handleShowPublishButton}
      />
      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={12} xxl={12}>
          <CreateBlogForm control={control} />
        </Grid>
      </Grid>
    </>
  );
};

export default CreateNewBlogPage;
