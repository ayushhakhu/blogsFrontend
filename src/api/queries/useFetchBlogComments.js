import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchBlog = (blogId) => {
  const fetchBlog = () => {
    return axiosInstance.get(`/blogs/${blogId}`);
  };

  return useBaseQuery(`fetchBlog${blogId}`, fetchBlog);
};
