import { axiosInstance } from "../axiosInstance";
import { useBaseQuery } from "../useBaseQuery";

export const useFetchUserBlogs = (username) => {
  const fetchUserBlogs = () => {
    return axiosInstance.get(`/user/${username}`);
  };

  return useBaseQuery([`fetchUserBlogs`,username], fetchUserBlogs);
};
