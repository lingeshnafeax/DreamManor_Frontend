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

export const SearchHomeFormValidation = z.object({
  location: z
    .string()
    .min(3, { message: "Location should be at least 3 characters" })
    .max(50, {
      message: "Location should be less than  50 characters",
    }),
  minPrice: z
    .number()
    .min(0, { message: "Minimum price should be greater than 0" })
    .max(100000000, { message: "Minimum price should be less than 100000000" }),
  maxPrice: z
    .number()
    .min(0, { message: "Maximum price should be greater than 0" })
    .max(100000000, { message: "Maximum price should be less than 100000000" }),
});

export const LoginFormValidation = z.object({
  username: z
    .string()
    .min(3, { message: "Username should be at least 3 characters" })
    .max(50, { message: "Username should be less than  50 characters" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(50, { message: "Password should be less than 50 characters" }),
});

export const RegisterFormValidation = z.object({
  username: z
    .string()
    .min(3, { message: "Username should be at least 3 characters" })
    .max(50, { message: "Username should be less than  50 characters" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(50, { message: "Password should be less than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
});

export const UpdateFormValidation = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username should be at least 3 characters" })
      .max(50, { message: "Username should be less than  50 characters" })
      .optional()
      .or(z.literal("")),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters" })
      .max(50, { message: "Password should be less than 50 characters" })
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .email({ message: "Please enter a valid email" })
      .optional()
      .or(z.literal("")),
  })
  .refine(
    (data) => {
      return (
        data.username?.trim() || data.email?.trim() || data.password?.trim()
      );
    },
    { message: "At least one field should be updated" },
  );

export const AddHouseFormDataSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  desc: z.string().min(1, { message: "Description is required" }),
  images: z
    .array(z.string().url({ message: "Invalid image URL" }))
    .min(1, { message: "At least one image is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  bedroom: z
    .number()
    .int()
    .max(6, { message: "Bedroom count should be less than 6" })
    .positive({ message: "Bedroom count must be a positive integer" }),
  bathroom: z
    .number()
    .int()
    .max(6, { message: "Bathroom count should be less than 6" })
    .positive({ message: "Bathroom count must be a positive integer" }),
  type: z.string().min(1, { message: "Type is required" }),
  property: z.string().min(1, { message: "Property is required" }),

  // Optional fields
  utilities: z.string().optional(),
  pet: z.string().optional(),
  income: z.string().optional(),
  size: z.number().int().positive().optional(),
  school: z.number().int().positive().optional(),
  bus: z.number().int().positive().optional(),
  restaurant: z.number().int().positive().optional(),

  latitude: z
    .number()
    .min(-90)
    .max(90, { message: "Latitude must be between -90 and 90" }),
  longitude: z
    .number()
    .min(-180)
    .max(180, { message: "Longitude must be between -180 and 180" }),
});
