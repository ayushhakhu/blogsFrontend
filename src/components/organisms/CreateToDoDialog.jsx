import { Dialog } from "../atoms/Dialog";
import React from "react";
import { DialogTitle } from "../atoms/DialogTitle";
import { DialogActions } from "../atoms/DialogActions";
import { DialogContent } from "../atoms/DialogContent";
import { Button } from "../atoms/Button";
import { TextField } from "../atoms/TextField";
import { useCreatePost } from "../../api/mutations/useCreatePost";
import { useForm, Controller } from "react-hook-form";

export const CreateToDoDialog = (props) => {
  const { onClickHandler, showState } = props;

  const { mutate } = useCreatePost();

  const onSubmitHandler = (data) => {
    const payload = { todoItem: data.TODO };
    mutate(payload);
    onClickHandler();
  };

  const { control, handleSubmit } = useForm();

  return (
    <Dialog dialog={showState} handleClose={onClickHandler}>
      <DialogTitle title={"Add your New To Do Item"} />
      <DialogContent>
        <Controller
          name={"TODO"}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type={"text"}
              {...field}
              label="TODO"
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button
          buttonContent="Save"
          type="submit"
          onClick={handleSubmit(onSubmitHandler)}
        />
        <Button buttonContent="Cancel" onClick={onClickHandler} />
      </DialogActions>
    </Dialog>
  );
};
