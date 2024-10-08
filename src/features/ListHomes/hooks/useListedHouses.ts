import { useQuery } from "@tanstack/react-query";

import axiosRequest from "../../../libs/axiosRequest";

export const useListedHouseData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const response = await axiosRequest.get("/post");
      return response.data.data;
    },
  });
  return { data, isLoading };
};
