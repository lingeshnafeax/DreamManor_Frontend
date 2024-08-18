import { BathIcon, Bed, Bookmark, MapPin, MessageSquare } from "lucide-react";
import House1 from "../../assets/House1.jpg";
const HomeCard = () => {
  return (
    <div className="grid transition duration-200 ease-in-out hover:scale-[101%] hover:bg-accent/10 md:grid-cols-2 lg:grid-cols-3">
      <div className="">
        <img src={House1} className="h-full w-full" alt="" />
      </div>
      <div className="flex flex-col gap-y-6 p-3 lg:col-span-2">
        <h1 className="text-xl font-semibold">My Dream House</h1>
        <p className="flex items-center gap-x-1">
          <MapPin className="lg:size-5" />
          <span>Kyoto,Japan</span>
        </p>
        <div>
          <span className="border border-black bg-accent p-2">$ 8909</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex gap-x-2">
            <div className="flex items-center gap-x-1">
              <Bed className="lg:size-5" />
              <p>2 bedroom</p>
            </div>
            <div className="flex items-center gap-x-1">
              <BathIcon className="lg:size-5" />
              <p>2 bathroom</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Bookmark className="lg:size-5" />
            <MessageSquare className="lg:size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
