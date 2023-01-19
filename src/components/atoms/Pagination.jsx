import { Pagination as MuiPagination } from "@mui/material";

export const Pagination = ({ count, onChange, ...props }) => {
  return <MuiPagination count={count} onChange={onChange} {...props} />;
};
