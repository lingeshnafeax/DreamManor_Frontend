import { useQuery } from "@tanstack/react-query";

import axiosRequest from "../../../libs/axiosRequest";
import { HouseWithDetailsType } from "../../../types/HouseDataTypes";

export const useHomeDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery<HouseWithDetailsType>({
    queryKey: ["homeDetail", id],
    queryFn: async () => {
      const response = await axiosRequest.get(`post/${id}`);
      return response.data.data;
    },
    enabled: Boolean(id),
  });
  return { data, isLoading };
};
