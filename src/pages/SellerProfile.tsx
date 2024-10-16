import { Link } from "react-router-dom";
import HomeCard from "../features/ListHomes/HomeCard";
import Message from "../features/Profile/Message";
import UserProfile from "../features/Profile/UserProfile";
import { useFetchUserData } from "../hooks/useFetchUserData";
import { useListedHouseData } from "../features/ListHomes/hooks/useListedHouses";
import { Frown, Loader } from "lucide-react";

const SellerProfile = () => {
  const { data: UserData, isLoading: isUserLoading } = useFetchUserData();
  const { data: HouseData, isLoading: isHouseLoading } = useListedHouseData();
  if (isUserLoading || isHouseLoading) {
    return (
      <div className="flex h-96 w-96 items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (!HouseData || !UserData) {
    return (
      <div className="flex h-96 w-96 items-center justify-center">
        <Frown size={40} />
        <h1>Something went wrong</h1>
      </div>
    );
  }
  return (
    <div className="relative grid grid-cols-1 gap-y-6 px-5 pt-24 lg:grid-cols-3 lg:pt-28">
      <div className="space-y-6 lg:col-span-2">
        <UserProfile profile={UserData!} />
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="my-5 text-2xl font-semibold">My List</h1>
            <Link
              to="/addHouse"
              className="h-fit border border-black bg-accent p-2"
            >
              Add House
            </Link>
          </div>
          <div className="flex flex-col gap-y-6">
            {HouseData.map((HouseData, index) => {
              return <HomeCard key={index} data={HouseData!} />;
            })}
          </div>
        </div>
      </div>
      <div className="relative top-0 grid-cols-1 px-4 lg:px-8">
        <div className="space-y-3 lg:fixed lg:w-96">
          <h1 className="text-xl font-semibold">Messages</h1>
          {UserData.avatar && (
            <div className="flex flex-col gap-y-6 py-5">
              <Message text="Hello how are you?" img={UserData.avatar} />
              <Message text="Hello how are you?" img={UserData.avatar} />
              <Message text="Hello how are you?" img={UserData.avatar} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
