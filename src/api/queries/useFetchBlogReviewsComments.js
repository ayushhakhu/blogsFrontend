import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchBlogReviewsComments = (reviewId) => {
  const fetchBlogReviewsComments = () => {
    return axiosInstance.get(`/blog_reviews_comments/${reviewId}?page=1`);
  };

  return useBaseQuery(`blogReviewsComments`, fetchBlogReviewsComments);
};
