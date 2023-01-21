import { useMutation } from "react-query";

export const useBaseMutation = (callbackfn, options) => {
  return useMutation(callbackfn, {
    ...options,
  });
};
