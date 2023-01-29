import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchBlogReviews = (reviewId) => {
  const fetchBlogReviews = () => {
    return axiosInstance.get(`/blog_reviews/${reviewId}?page=1`);
  };

  return useBaseQuery(`fetchBlogReviews${reviewId}`, fetchBlogReviews);
};
