import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchBlogs = (pageIndex) => {
  const fetchTodosList = () => {
    return axiosInstance.get(`/blogs?page=${pageIndex}`);
  };

  return useBaseQuery([`fetchBlogs`,pageIndex], fetchTodosList);
};
