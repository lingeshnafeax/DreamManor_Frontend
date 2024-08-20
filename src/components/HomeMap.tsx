import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HomeMapPin from "./HomeMapPin";
import { dummyListData } from "../data/dummyData";
import { ListHouseDataType } from "../types/HouseDataTypes";
import { cn } from "../utils/tailwindMerge";

const HomeMap = ({ className }: { className?: string }) => {
  return (
    <div>
      <MapContainer
        className={cn("h-72 w-72 lg:h-96 lg:w-96", className)}
        center={[dummyListData[0].latitude, dummyListData[0].longitude]} // Position of your location or serached locations
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dummyListData.map((data: ListHouseDataType) => (
          <HomeMapPin
            id={data.id}
            key={data.id}
            position={[data.latitude, data.longitude]}
            image={data.image}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default HomeMap;
