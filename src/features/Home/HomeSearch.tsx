import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "../../utils/tailwindMerge";

import CustomForm from "../../components/CustomForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchHomeFormValidation } from "../../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldType } from "../../types/CustomFormTypes";
import FormErrors from "../../components/FormErrors";
import { useNavigate } from "react-router-dom";

const HomeSearch = () => {
  const [searchType, setSearchType] = useState<"rent" | "buy">("rent");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SearchHomeFormValidation>>({
    resolver: zodResolver(SearchHomeFormValidation),
    mode: "onSubmit",
  });

  const submitHandler = (data: z.infer<typeof SearchHomeFormValidation>) => {
    const searchParams = new URLSearchParams({
      city: data.city!,
      minPrice: data.minPrice!.toString(),
      maxPrice: data.maxPrice!.toString(),
    });

    navigate({
      pathname: "/list",
      search: `${searchParams.toString()}`,
    });
  };

  return (
    <div className="flex w-full flex-wrap">
      <button
        className={cn("px-8 py-3 transition duration-200 ease-linear", {
          "bg-black text-white": searchType === "buy",
        })}
        onClick={() => {
          setSearchType("buy");
        }}
      >
        Buy
      </button>
      <button
        className={cn("px-8 py-3 transition duration-200 ease-linear", {
          "bg-black text-white": searchType === "rent",
        })}
        onClick={() => {
          setSearchType("rent");
        }}
      >
        Rent
      </button>
      <form
        onSubmit={handleSubmit(
          (data: z.infer<typeof SearchHomeFormValidation>) => {
            submitHandler(data);
          },
        )}
        className="grid w-full flex-wrap border border-black sm:grid-cols-4"
      >
        <CustomForm
          register={register}
          fieldType={FormFieldType.TEXT}
          name="city"
          placeholder="Location City"
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.NUMBER}
          name="minPrice"
          placeholder="Min Price"
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.NUMBER}
          name="maxPrice"
          placeholder="Max Price"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center bg-accent p-2 transition duration-200 ease-in-out hover:bg-black hover:text-accent"
        >
          <SearchIcon />
        </button>
      </form>
      <FormErrors errors={errors} />
    </div>
  );
};

export default HomeSearch;
