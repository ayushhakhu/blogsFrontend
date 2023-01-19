import { Snackbar as MuiSnackbar } from "@mui/material";
import { useState } from "react";
import { IconButton } from "../atoms/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const Snackbar = ({ message, ...props }) => {
  const [open, setopen] = useState(true);
  return (
    <MuiSnackbar
      autoHideDuration={2000}
      open={open}
      onClose={() => setopen(false)}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => setopen(false)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      {...props}
    />
  );
};
