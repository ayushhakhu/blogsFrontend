import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";

export const useSignup = () => {
  const signupUser = (data) => {
    return axiosInstance.post("/auth/signup", data);
  };

  return useBaseMutation(signupUser);
};
