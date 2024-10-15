import { useQuery } from "@tanstack/react-query";

import axiosRequest from "../../../libs/axiosRequest";
import { ListHouseDataType } from "../../../types/HouseDataTypes";

export const useListedHouseData = () => {
  const { data, isLoading } = useQuery<ListHouseDataType[]>({
    queryKey: ["listedHomes"],
    queryFn: async () => {
      const response = await axiosRequest.get("/post");
      return response.data.data;
    },
  });
  return { data, isLoading };
};
