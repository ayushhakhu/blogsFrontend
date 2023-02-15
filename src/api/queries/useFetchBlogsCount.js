import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchBlogsCount = () => {
  const fetchBlogsCount = () => {
    return axiosInstance.get(`/blogs/count`);
  };

  return useBaseQuery(`fetchBlogsCount`, fetchBlogsCount);
};
