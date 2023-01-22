import { useQuery } from "react-query";

export const useBaseQuery = (key, callbackfn, options) => {
  return useQuery(key, callbackfn, {
    retry: false,
    ...options,
  });
};
