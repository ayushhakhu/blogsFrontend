import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";
import { useQueryClient } from "react-query";

export const useDeleteReview = (blogId) => {
  const queryClient = useQueryClient();

  const deleteBlogReview = (reviewId) => {
    return axiosInstance.delete(`/blog_reviews/${reviewId}`);
  };

  return useBaseMutation(deleteBlogReview, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(`fetchBlogReviews${blogId}`);
    },
  });
};
