import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchBlogs = (pageIndex) => {
  pageIndex = 1;
  const fetchTodosList = () => {
    return axiosInstance.get(`/blogs?page=${pageIndex}`);
  };

  return useBaseQuery(`fetchBlogs`, fetchTodosList);
};
