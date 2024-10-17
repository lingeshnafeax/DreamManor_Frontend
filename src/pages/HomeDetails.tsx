import {
  BathIcon,
  Bed,
  Bookmark,
  Bus,
  Calendar,
  CoinsIcon,
  HotelIcon,
  Loader,
  MapPin,
  MessagesSquare,
  PawPrintIcon,
  School,
  WrenchIcon,
} from "lucide-react";
import ImageViewer from "react-simple-image-viewer";
import FeaturesCard from "../features/HomeDetails/FeaturesCard";
import HomeMap from "../components/HomeMap";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHomeDetails } from "../features/HomeDetails/hooks/useHomeDetails";
import TextEditor from "../components/TextEditor";

const HomeDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const { data, isLoading } = useHomeDetails({ id: id || "" });
  console.log(data);
  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  if (isLoading) {
    return (
      <div className="flex h-96 w-96 items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (!data) {
    return <div>Something went wrong</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-3 px-5 py-4 pt-20 lg:grid-cols-3 lg:pt-28">
      <div className="lg:col-span-2">
        <div className="space-y-6">
          <div className="flex gap-3">
            <div className="group w-4/5 overflow-hidden">
              {data.images.slice(0, 1).map((img, index) => (
                <div className="h-full object-cover">
                  <img
                    className="aspect-video h-full rounded-lg object-cover transition-transform duration-300 ease-linear group-hover:scale-105"
                    src={img}
                    onClick={() => {
                      openImageViewer(index);
                    }}
                    alt=""
                    key={img}
                  />
                </div>
              ))}
            </div>
            <div className="relative grid w-1/5 grid-rows-3 gap-y-3 overflow-hidden">
              {data.images.slice(1, 5).map((img, index) => (
                <img
                  className="aspect-video h-full rounded-lg object-cover transition-transform duration-300 ease-linear hover:scale-105"
                  src={img}
                  onClick={() => {
                    openImageViewer(index + 1);
                  }}
                  alt=""
                  key={img}
                />
              ))}
              {data.images.length > 4 && (
                <p className="absolute bottom-2 right-2 rounded-lg bg-accent px-2 py-0.5">
                  {data.images.length - 4} more
                </p>
              )}
            </div>
          </div>
          {isViewerOpen && (
            <div className="relative z-50">
              <ImageViewer
                src={data.images}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            </div>
          )}
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-2 lg:gap-y-4">
              <h1 className="text-2xl font-semibold">{data.title}</h1>
              <p className="flex items-center text-xs">
                <MapPin />
                {data.address}
              </p>
              <span className="w-fit border border-black bg-accent p-2">
                ₹ {data.price}
              </span>
            </div>
            <Link
              to={`/profile`}
              className="group flex w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg bg-accent/20 lg:w-1/6"
            >
              <img
                src="/src/assets/Mine.jpg"
                className="h-14 w-14 rounded-full object-cover transition-transform duration-300 ease-linear group-hover:scale-105"
                alt=""
              />
              <p>Lingesh</p>
            </Link>
          </div>
          <div>
            <TextEditor readOnly initialValue={data.PostDetails.desc} />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-y-6">
        <div className="flex flex-col lg:gap-y-3">
          <h1 className="text-xl font-semibold">Features</h1>
          <div className="flex flex-col gap-y-2">
            <FeaturesCard
              logo={<WrenchIcon />}
              heading="Utilities"
              description={data.PostDetails.utilities}
            />
            <FeaturesCard
              logo={<PawPrintIcon />}
              heading="Pet Policy"
              description={data.PostDetails.pet}
            />
            <FeaturesCard
              logo={<CoinsIcon />}
              heading="Property Fees"
              description={data.PostDetails.income}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl font-semibold">Room Info</h1>
          <div className="grid gap-3 lg:grid-cols-3">
            <FeaturesCard
              logo={<Calendar />}
              description={`${Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(new Date(data.createdAt))}`}
            />
            <FeaturesCard
              logo={<Bed />}
              description={`${data.bedroom} bedroom${data.bedroom > 1 ? "s" : ""}`}
            />
            <FeaturesCard
              logo={<BathIcon />}
              description={`${data.bathroom} bathroom${data.bathroom > 1 ? "s" : ""}`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl font-semibold">Nearby places</h1>
          <div className="grid gap-3 lg:grid-cols-3">
            <FeaturesCard
              logo={<School />}
              heading="School"
              type="distance"
              description={data.PostDetails.school}
            />
            <FeaturesCard
              logo={<Bus />}
              heading="Bus"
              type="distance"
              description={data.PostDetails.bus}
            />
            <FeaturesCard
              logo={<HotelIcon />}
              heading="Restaurant"
              type="distance"
              description={data.PostDetails.restaurant}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-semibold">Location</h1>
          <HomeMap data={data} className="z-10 w-full lg:h-52" />
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-x-2">
            <MessagesSquare />
            <p>Send a Message</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Bookmark />
            <p>Save the place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
