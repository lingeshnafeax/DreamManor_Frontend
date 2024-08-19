import { BathIcon, Bed, Bookmark, MapPin, MessageSquare } from "lucide-react";
import { ListHouseData } from "../../types/HouseDataTypes";
import { Link } from "react-router-dom";
const HomeCard = ({ data }: { data: ListHouseData }) => {
  return (
    <Link
      to={`/list/${data.id}`}
      className="group grid transition duration-200 ease-in-out hover:bg-accent/10 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="overflow-hidden">
        <img
          src={data.image}
          className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-6 p-3 lg:col-span-2">
        <h1 className="text-xl font-semibold">{data.title}</h1>
        <p className="flex items-center gap-x-1">
          <MapPin className="lg:size-5" />
          <span>{data.address}</span>
        </p>
        <div>
          <span className="border border-black bg-accent p-2">
            $ {data.price}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex gap-x-2">
            <div className="flex items-center gap-x-1">
              <Bed className="lg:size-5" />
              <p>{data.bedroom} bedroom</p>
            </div>
            <div className="flex items-center gap-x-1">
              <BathIcon className="lg:size-5" />
              <p>{data.bathroom} bathroom</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Bookmark className="lg:size-5" />
            <MessageSquare className="lg:size-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
