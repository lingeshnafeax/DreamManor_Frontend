import { Frown, Loader, MapPin } from "lucide-react";
import HomeMap from "../components/HomeMap";
import HomeCard from "../features/ListHomes/HomeCard";
import HomeFilter from "../features/ListHomes/HomeFilter";
import { ListHouseDataType } from "../types/HouseDataTypes";
import {
  ListedHomeQueryParams,
  useListedHouseData,
} from "../features/ListHomes/hooks/useListedHouses";
import { useSearchParams } from "react-router-dom";

const ListHomes = () => {
  const [searchParams] = useSearchParams();
  const queryParams: ListedHomeQueryParams = {
    ...(searchParams.get("city") && {
      city: searchParams.get("city") || undefined,
    }),
    ...(searchParams.get("minPrice") && {
      minPrice: Number(searchParams.get("minPrice")),
    }),
    ...(searchParams.get("maxPrice") && {
      maxPrice: Number(searchParams.get("maxPrice")),
    }),
    ...(searchParams.get("type") && {
      type: searchParams.get("type") || undefined,
    }),
    ...(searchParams.get("category") && {
      category: searchParams.get("category") || undefined,
    }),
    ...(searchParams.get("userId") && {
      userId: searchParams.get("userId") || undefined,
    }),
    ...(searchParams.get("bedroom") && {
      bedroom: Number(searchParams.get("bedroom")),
    }),
  };
  const { data: HouseData, isLoading } = useListedHouseData(queryParams);
  if (isLoading) {
    return (
      <div className="flex h-96 w-96 items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="relative grid h-full px-5 pt-16 lg:grid-cols-3 lg:pt-24">
      <div className="flex flex-col gap-y-3 overflow-y-auto lg:col-span-2 lg:gap-y-6">
        <HomeFilter />
        {HouseData && HouseData.length > 0 ? (
          HouseData.map((data: ListHouseDataType) => (
            <HomeCard key={data.id} data={data} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-3">
            <Frown size={50} />
            No houses found
          </div>
        )}
      </div>

      <div className="relative">
        {HouseData && HouseData.length > 0 && (
          <div className="fixed hidden flex-col gap-y-6 lg:col-span-1 lg:ml-8 lg:mt-32 lg:flex">
            <h1 className="flex items-center gap-x-1 text-lg">
              <MapPin />
              <span className="font-semibold">Nearby houses</span>
            </h1>

            <HomeMap data={HouseData!} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListHomes;
