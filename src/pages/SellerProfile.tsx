import { dummyListData } from "../data/dummyData";
import HomeCard from "../features/ListHomes/HomeCard";
import Message from "../features/Profile/Message";
import UserProfile from "../features/Profile/UserProfile";
import { useFetchUserData } from "../hooks/useFetchUserData";
import { ListHouseDataType } from "../types/HouseDataTypes";

const SellerProfile = () => {
  const { data } = useFetchUserData();
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="relative grid grid-cols-1 gap-y-6 px-5 pt-24 lg:grid-cols-3 lg:pt-28">
      <div className="space-y-6 lg:col-span-2">
        <UserProfile profile={data} />
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="my-5 text-2xl font-semibold">My List</h1>
            <button className="h-fit border border-black bg-accent p-2">
              Add House
            </button>
          </div>
          <div className="flex flex-col gap-y-6">
            {dummyListData.map((data: ListHouseDataType, index) => {
              return <HomeCard key={index} data={data} />;
            })}
          </div>
        </div>
      </div>
      <div className="relative top-0 grid-cols-1 px-4 lg:px-8">
        <div className="space-y-3 lg:fixed lg:w-96">
          <h1 className="text-xl font-semibold">Messages</h1>
          <div className="flex flex-col gap-y-6 py-5">
            <Message text="Hello how are you?" img={data.avatar!} />
            <Message text="Hello how are you?" img={data.avatar!} />
            <Message text="Hello how are you?" img={data.avatar!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
