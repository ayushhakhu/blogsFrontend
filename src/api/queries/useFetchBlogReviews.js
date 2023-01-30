import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchBlogReviews = (blogId) => {
  const fetchBlogReviews = () => {
    return axiosInstance.get(`/blog_reviews/${blogId}?page=1`);
  };

  return useBaseQuery(`fetchBlogReviews${blogId}`, fetchBlogReviews);
};
