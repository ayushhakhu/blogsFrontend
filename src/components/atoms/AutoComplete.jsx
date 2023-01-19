import React from "react";
import { Autocomplete } from "@mui/material";

export const AutoComplete = ({ options, renderInput, ...props }) => {
  return (
    <Autocomplete options={options} renderInput={renderInput} {...props} />
  );
};
