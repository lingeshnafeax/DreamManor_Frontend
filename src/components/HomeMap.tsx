import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HomeMapPin from "./HomeMapPin";
import { ListHouseDataType } from "../types/HouseDataTypes";
import { cn } from "../utils/tailwindMerge";

interface HomeMapProps<T extends ListHouseDataType[] | ListHouseDataType> {
  className?: string;
  data: T;
}
function HomeMap<T extends ListHouseDataType[] | ListHouseDataType>({
  className,
  data,
}: HomeMapProps<T>) {
  const isArray = Array.isArray(data);
  return (
    <div>
      <MapContainer
        className={cn("h-72 w-72 lg:h-96 lg:w-96", className)}
        center={
          Array.isArray(data)
            ? [data[0]?.latitude, data[0]?.longitude]
            : [data.latitude, data.longitude]
        }
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {isArray ? (
          data.map((data: ListHouseDataType) => (
            <HomeMapPin
              id={data.id}
              key={data.id}
              position={[data.latitude, data.longitude]}
              image={data.images[0]}
            />
          ))
        ) : (
          <HomeMapPin
            id={data.id}
            key={data.id}
            position={[data.latitude, data.longitude]}
            image={data.images[0]}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default HomeMap;
