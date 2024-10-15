import { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const HomeMapPin = ({
  position,
  image,
  id,
}: {
  position: LatLngExpression;
  image: string;
  id: string;
}) => {
  return (
    <Marker position={position}>
      <Popup>
        <Link to={`/list/${id}`} className="flex flex-col gap-2 p-2">
          <h1 className="font-semibold text-black">My Dream House</h1>
          <div className="flex items-center gap-x-3">
            <img src={image} className="size-10 rounded-full border-2" alt="" />
            <span className="h-7 rounded-lg border border-black bg-accent p-1 text-center text-black">
              $ 1999
            </span>
          </div>
        </Link>
      </Popup>
    </Marker>
  );
};

export default HomeMapPin;
