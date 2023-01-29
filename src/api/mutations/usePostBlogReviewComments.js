import { axiosInstance } from "../axiosInstance";
import { useBaseMutation } from "../useBaseMutation";

export const usePostBlogReviewComments = () => {
  const postBlogReviewComment = (data) => {
    return axiosInstance.post(
      `/blog_reviews_comments/${data.reviewId}`,
      data.payload
    );
  };

  return useBaseMutation(postBlogReviewComment);
};
