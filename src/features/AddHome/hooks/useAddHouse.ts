import { useMutation } from "@tanstack/react-query";
import axiosRequest from "../../../libs/axiosRequest";
import { toast } from "react-toastify";
import { AddHouseFormDataSchema } from "../../../utils/validations";
import { z } from "zod";

export const useAddHouse = () => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (data: z.infer<typeof AddHouseFormDataSchema>) => {
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
          utilities: data.utilities,
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
