import { z } from "zod";

export const FilterHomeFormValidation = z.object({
  location: z
    .string()
    .min(3, { message: "Location should be at least 3 characters" })
    .max(50, {
      message: "Location should be less than  50 characters",
    }),
  type: z.enum(["Buy", "Rent"]),
  category: z.enum(["Home", "Appartment", "Plot"]),
  minPrice: z
    .number()
    .min(0, { message: "Minimum price should be greater than 0" })
    .max(100000000, { message: "Minimum price should be less than 100000000" }),
  maxPrice: z
    .number()
    .min(0, { message: "Maximum price should be greater than 0" })
    .max(100000000, { message: "Maximum price should be less than 100000000" }),
  bedroom: z
    .number()
    .min(0, { message: "Bedroom should be greater than 0" })
    .max(6, { message: "Bedroom should be less than 6" }),
});
