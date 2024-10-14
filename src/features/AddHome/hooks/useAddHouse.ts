import { useMutation } from "@tanstack/react-query";
import axiosRequest from "../../../libs/axiosRequest";
import { AddHouseFormData } from "../../../types/FormDataTypes";
import { toast } from "react-toastify";

export const useAddHouse = () => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (data: AddHouseFormData) => {
      await axiosRequest.post("post", {
        postData: {
          title: data.title,
          images: data.images,
          bedroom: data.bedroom,
          bathroom: data.bathroom,
          price: data.price,
          city: data.city,
          type: data.type,
          property: data.property,
          address: data.address,
          latitude: data.latitude,
          longitude: data.longitude,
        },
        postDetails: {
          desc: data.desc,
          pet: data.pet,
          income: data.income,
          size: data.size,
          school: data.school,
          bus: data.bus,
          restaurant: data.restaurant,
        },
      });
    },
    onSuccess: () => {
      toast.success("House added successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
  return {
    mutate,
    isPending,
    isSuccess,
  };
};
