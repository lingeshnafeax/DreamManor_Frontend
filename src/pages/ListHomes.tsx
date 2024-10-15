import { Loader, MapPin } from "lucide-react";
import HomeMap from "../components/HomeMap";
import HomeCard from "../features/ListHomes/HomeCard";
import HomeFilter from "../features/ListHomes/HomeFilter";
import { ListHouseDataType } from "../types/HouseDataTypes";
import { useListedHouseData } from "../features/ListHomes/hooks/useListedHouses";

const ListHomes = () => {
  const { data: HouseData, isLoading } = useListedHouseData();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="relative grid h-full px-5 pt-16 lg:grid-cols-3 lg:pt-24">
      <div className="flex flex-col gap-y-3 overflow-y-auto lg:col-span-2 lg:gap-y-6">
        <HomeFilter />
        {HouseData &&
          HouseData.map((data: ListHouseDataType) => (
            <HomeCard key={data.id} data={data} />
          ))}
      </div>

      <div className="relative">
        <div className="fixed hidden flex-col gap-y-6 lg:col-span-1 lg:ml-8 lg:mt-32 lg:flex">
          <h1 className="flex items-center gap-x-1 text-lg">
            <MapPin />
            <span className="font-semibold">Nearby houses</span>
          </h1>

          <HomeMap data={HouseData!} />
        </div>
      </div>
    </div>
  );
};

export default ListHomes;
