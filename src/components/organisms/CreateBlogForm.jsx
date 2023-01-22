import React, { useMemo, useCallback } from "react";
import { Stack } from "../atoms/Stack";
import { Paper } from "../molecules/Paper";
import { TextField } from "../atoms/TextField";
import { AutoComplete } from "../atoms/AutoComplete";
import { TextareaAutosize } from "@mui/base";
import { Controller } from "react-hook-form";

export const CreateBlogForm = ({ control }) => {
  const AutoCompleteInput = useCallback(
    (props) => <TextField label={"Category"} {...props} />,
    []
  );

  const AutoCompleteOptions = useMemo(
    () => ["Science", "Philosophy", "Art"],
    []
  );
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        paddingBlock: 10,
        borderRadius: 0,
        justifyContent: "center",
      }}
    >
      <Stack direction="column" spacing={5} sx={{ width: 400 }}>
        <Controller
          name="blogTitle"
          control={control}
          rules={{
            required: { value: true, message: "This is a required Field" },
            minLength: {
              value: 3,
              message: "Minimum Length of 3 chars are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum allowed Length is of 10 chars",
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <>
              <TextField
                onChange={onChange}
                sx={{ width: "inherit" }}
                label={"Title"}
              />
              {error && (
                <span style={{ color: "red", marginTop: 10 }}>
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <Controller
          name="blogCategory"
          control={control}
          rules={{
            required: { value: true, message: "This is a required Field" },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <>
              <AutoComplete
                onChange={(_, value, reason) => onChange(value)}
                variant="solid"
                sx={{ width: "inherit" }}
                options={AutoCompleteOptions}
                renderInput={AutoCompleteInput}
              />
              {error && (
                <span style={{ color: "red", marginTop: 10 }}>
                  {error.message}
                </span>
              )}
            </>
          )}
        />
        <Controller
          name="blogDetails"
          control={control}
          rules={{
            required: { value: true, message: "This is a required Field" },
            minLength: {
              value: 250,
              message: "Minimum of 250 chars are required",
            },
            maxLength: {
              value: 2500,
              message: "We support maximum of 2500 chars",
            },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <>
              <TextareaAutosize
                onChange={onChange}
                aria-label="minimum height"
                minRows={10}
                style={{ width: "inherit" }}
                placeholder="Blog Details"
              />
              {error && (
                <span style={{ color: "red", marginTop: 10 }}>
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </Stack>
    </Paper>
  );
};
