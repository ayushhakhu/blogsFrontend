import { Dialog } from "../atoms/Dialog";
import React from "react";
import { DialogTitle } from "../atoms/DialogTitle";
import { DialogActions } from "../atoms/DialogActions";
import { DialogContent } from "../atoms/DialogContent";
import { Button } from "../atoms/Button";
import { TextField } from "../atoms/TextField";
import { useUpdatePost } from "../../api/mutations/useUpdatePost";
import { useForm, Controller } from "react-hook-form";

export const EditToDoDialog = (props) => {
  const { onClickHandler, showState, onCancelClick } = props;

  const { mutate } = useUpdatePost();

  const onSubmitHandler = (data) => {
    const payload = { objectId: showState, payload: { todoItem: data.TODO } };
    mutate(payload);
    onCancelClick();
  };

  const { control, handleSubmit } = useForm();
  return (
    <Dialog dialog={showState} handleClose={onClickHandler}>
      <DialogTitle title={"Edit Your Todo"} />
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
        <Button buttonContent="Cancel" onClick={onCancelClick} />
      </DialogActions>
    </Dialog>
  );
};
