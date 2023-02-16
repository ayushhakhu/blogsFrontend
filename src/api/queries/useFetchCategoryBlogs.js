import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchCategoryBlogs = (category) => {
  const fetchCategoryBlogs = () => {
    return axiosInstance.get(`/category/${category}`);
  };

  return useBaseQuery([`fetchCategoryBlogs`,category], fetchCategoryBlogs);
};
