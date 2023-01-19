import React, { useMemo, useCallback } from "react";
import { Stack } from "../atoms/Stack";
import { Paper } from "../molecules/Paper";
import { TextField } from "../atoms/TextField";
import { AutoComplete } from "../atoms/AutoComplete";
import { TextareaAutosize } from "@mui/base";

export const CreateBlogForm = () => {
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
        <TextField sx={{ width: "inherit" }} label={"Title"} />
        <AutoComplete
          variant="solid"
          sx={{ width: "inherit" }}
          options={AutoCompleteOptions}
          renderInput={AutoCompleteInput}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          style={{ width: "inherit" }}
          placeholder="Blog Details"
        />
      </Stack>
    </Paper>
  );
};
