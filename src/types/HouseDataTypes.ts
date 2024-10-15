import { UserDataType } from "./UserDataTypes";

export type ListHouseDataType = {
  id: string;
  title: string;
  images: string[];
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  type: string;
  property: string;
  userId: string;
  createdAt: string;
};
export type PostDetailsType = {
  id: string;
  desc: string;
  utilities: string;
  pet: string;
  income: string;
  size: number;
  school: number;
  bus: number;
  restaurant: number;
  postId: string;
};

export type HouseWithDetailsType = ListHouseDataType & {
  PostDetails: PostDetailsType;
  user: Omit<UserDataType, "email">;
};
