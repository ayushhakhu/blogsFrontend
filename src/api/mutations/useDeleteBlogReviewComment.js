import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";
import { useQueryClient } from "react-query";

export const useDeleteReviewComment = (reviewId) => {
  const queryClient = useQueryClient();

  const deleteBlogReviewComment = (reviewCommentId) => {
    return axiosInstance.delete(`/blog_reviews_comments/${reviewCommentId}`);
  };

  return useBaseMutation(deleteBlogReviewComment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(`fetchBlogReviews${reviewId}`);
    },
  });
};
