import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";

export const usePostBlogReview = () => {
  const postBlogReview = (data) => {
    return axiosInstance.post(`/blog_reviews/${data.blogId}`, data.payload);
  };

  return useBaseMutation(postBlogReview);
};
