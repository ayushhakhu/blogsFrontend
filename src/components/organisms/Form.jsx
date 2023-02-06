import { Paper } from "../molecules/Paper";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "../atoms/TextField";
import { Stack } from "../atoms/Stack";
import { Typography } from "../atoms/Typography";

export const Form = ({ fields, onClickHandler, formtitle, ...props }) => {
  const { control, handleSubmit } = useForm();
  return (
    <Paper elevation={10}>
      <form onSubmit={handleSubmit(onClickHandler)}>
        <Stack spacing={5}>
          <Typography>{formtitle}</Typography>
          {fields.map((item) => (
            <Controller
              key={item.name}
              name={item.name}
              control={control}
              rules={{
                required: {
                  value: item.required,
                  message: `${item.name} is a required field`,
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    {...field}
                    // inputRef={ref}
                    type={item.type}
                    label={item.name}
                    variant="outlined"
                  />
                  {error && (
                    <span style={{ margin: 0, padding: 0, color: "red" }}>
                      {error.message}
                    </span>
                  )}
                </>
              )}
            />
          ))}
          <TextField type="submit" variant="outlined" />
        </Stack>
      </form>
    </Paper>
  );
};
