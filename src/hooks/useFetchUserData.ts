import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "./typedRedux";
import axiosRequest from "../libs/axiosRequest";
import { UserDataType } from "../types/UserDataTypes";

export const useFetchUserData = () => {
  const token = useAppSelector((state) => state.token.token);
  const { data } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const response = await axiosRequest.get("/auth/userInfo");
      const user = response.data?.user as UserDataType;
      return {
        avatar:
          user.avatar ||
          "https://i.pinimg.com/474x/77/73/72/7773721ad7f65f74c946ba0eeee0b3a4.jpg",
        email: user.email,
        id: user.id,
        username: user.username,
      } as UserDataType;
    },
    enabled: token !== null,
  });
  return { data };
};
