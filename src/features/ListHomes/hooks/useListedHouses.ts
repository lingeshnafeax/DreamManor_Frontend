import { useQuery } from "@tanstack/react-query";

import axiosRequest from "../../../libs/axiosRequest";
import { ListHouseDataType } from "../../../types/HouseDataTypes";

export interface ListedHomeQueryParams {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  category?: string;
  userId?: string;
  bedroom?: number;
}

export const useListedHouseData = (queryParams: ListedHomeQueryParams = {}) => {
  const { city, minPrice, maxPrice, type, category, userId, bedroom } =
    queryParams;
  const params = {
    ...(city && { city }),
    ...(minPrice && { minPrice }),
    ...(maxPrice && { maxPrice }),
    ...(type && { type }),
    ...(category && { category }),
    ...(userId && { userId }),
    ...(bedroom && { bedroom }),
  };
  console.log(params);
  const { data, isLoading, refetch } = useQuery<ListHouseDataType[]>({
    queryKey: [
      "listedHomes",
      { city, minPrice, maxPrice, type, category, userId, bedroom },
    ],

    queryFn: async () => {
      const response = await axiosRequest.get("/post", {
        params,
      });
      return response.data.data;
    },
  });
  return { data, isLoading, refetch };
};
