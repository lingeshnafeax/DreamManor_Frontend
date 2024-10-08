export type ListHouseDataType = {
  id: number;
  title: string;
  images: string[];
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};
export type SinglePostDataType = {
  id: number;
  title: string;
  images: string[];
  bedroom: number;
  bathroom: number;
  size: number;
  price: number;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  school: string;
  bus: string;
  restaurant: string;
  description: string;
};
