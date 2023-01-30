import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";
import { useQueryClient } from "react-query";

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  const deleteBlog = (blogId) => {
    return axiosInstance.delete(`/blogs/${blogId}`);
  };

  return useBaseMutation(deleteBlog, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(`fetchBlogs`);
    },
  });
};
