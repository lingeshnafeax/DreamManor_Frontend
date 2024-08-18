import HomeCard from "../features/ListHomes/HomeCard";
import HomeFilter from "../features/ListHomes/HomeFilter";

const ListHomes = () => {
  return (
    <div className="mt-16 grid px-6 lg:mt-24 lg:grid-cols-3">
      <div className="lg:col-span-2 flex flex-col gap-y-3 lg:gap-y-6">
        <HomeFilter />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
      <div>Map</div>
    </div>
  );
};

export default ListHomes;
