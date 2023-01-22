import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";
import { useQueryClient } from "react-query";

export const useCreateNewBlogs = () => {
  const queryClient = useQueryClient();

  const createBlog = (blogDetails) => {
    return axiosInstance.post(`/blogs`, blogDetails);
  };

  return useBaseMutation(createBlog, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(`fetchBlogs`);
    },
  });
};
