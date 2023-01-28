import React, { useState } from "react";
import { TextField } from "../atoms/TextField";
import Chip from "@mui/material/Chip";

export const AddCommentField = ({ placeholder, label, ...props }) => {
  const [showCommentButton, setShowCommentButton] = useState(false);

  return (
    <>
      <TextField
        onClick={() => setShowCommentButton((prevState) => !prevState)}
        placeholder={placeholder}
        sx={{ width: 500, marginBottom: 2 }}
      />
      {showCommentButton && (
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            width: 530,
            justifyContent: "flex-end",
          }}
        >
          <Chip
            label={"Cancel"}
            variant="outlined"
            onClick={() => setShowCommentButton((prevState) => !prevState)}
            color="primary"
            sx={{
              color: "rgba(41, 41, 41, 1)",
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontWeight: 400,
              marginTop: 2,
              marginInline: 2,
              width: 100,
              border: 0,
            }}
          />
          <Chip
            label={label}
            variant="outlined"
            onClick={() => console.log("Clicked on Comment Button")}
            color="primary"
            sx={{
              color: "rgba(41, 41, 41, 1)",
              fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontWeight: 200,
              marginTop: 2,
              marginInline: 2,
              width: 100,
              border: 0,
            }}
          />
        </div>
      )}
    </>
  );
};
