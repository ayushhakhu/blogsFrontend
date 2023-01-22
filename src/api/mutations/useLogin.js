import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";

export const useLogin = () => {
  const { onLogin } = useContext(AuthContext);
  const fetchTodosList = (data) => {
    return axiosInstance.post("/auth/login", data);
  };

  return useBaseMutation(fetchTodosList, {
    onSuccess: (data) => {
      onLogin(data.data.token, data.data.username);
    },
  });
};
