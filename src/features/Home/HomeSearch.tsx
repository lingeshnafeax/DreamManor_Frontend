import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "../../utils/tailwindMerge";

import CustomForm from "../../components/CustomForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchHomeFormValidation } from "../../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldType } from "../../types/CustomFormTypes";
import { SearchFormDataType } from "../../types/FormDataTypes";
import FormErrors from "../../components/FormErrors";

const HomeSearch = () => {
  const [searchType, setSearchType] = useState<"Rent" | "Buy">("Rent");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SearchHomeFormValidation>>({
    resolver: zodResolver(SearchHomeFormValidation),
    mode: "onSubmit",
  });

  const submitHandler = (data: SearchFormDataType) => {
    console.log(data);
  };

  return (
    <div className="flex w-full flex-wrap">
      <button
        className={cn("px-8 py-3 transition duration-200 ease-linear", {
          "bg-black text-white": searchType === "Buy",
        })}
        onClick={() => {
          setSearchType("Buy");
        }}
      >
        Buy
      </button>
      <button
        className={cn("px-8 py-3 transition duration-200 ease-linear", {
          "bg-black text-white": searchType === "Rent",
        })}
        onClick={() => {
          setSearchType("Rent");
        }}
      >
        Rent
      </button>
      <form
        onSubmit={handleSubmit((data) => {
          submitHandler(data);
        })}
        className="grid w-full flex-wrap border border-black sm:grid-cols-4"
      >
        <CustomForm
          register={register}
          fieldType={FormFieldType.TEXT}
          name="location"
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
