import { Pagination as MuiPagination } from "@mui/material";

export const Pagination = (props) => {
  const { count, onChange } = props;
  return <MuiPagination count={count} onChange={onChange} {...props} />;
};
