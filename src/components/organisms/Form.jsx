import { Paper } from "../molecules/Paper";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "../atoms/TextField";
import { Stack } from "../atoms/Stack";
import { Typography } from "../atoms/Typography";

export const Form = (props) => {
  const { fields, onClickHandler, formtitle } = props;

  const { control, handleSubmit } = useForm();
  return (
    <Paper elevation={10}>
      <form onSubmit={handleSubmit(onClickHandler)}>
        <Stack spacing={5}>
          <Typography title={formtitle} />
          {fields.map((item) => (
            <Controller
              name={item.name}
              control={control}
              rules={{ required: item.required }}
              render={({ field }) => (
                <TextField
                  type={item.type}
                  {...field}
                  label={item.name}
                  variant="outlined"
                />
              )}
            />
          ))}
          <TextField type="submit" variant="outlined" />
        </Stack>
      </form>
    </Paper>
  );
};
