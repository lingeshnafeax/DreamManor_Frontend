import { useForm } from "react-hook-form";
import CustomForm from "../../components/CustomForm";
import { FormFieldType } from "../../types/CustomFormTypes";
import { z } from "zod";
import { FilterHomeFormValidation } from "../../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import FormErrors from "../../components/FormErrors";
import { useSearchParams } from "react-router-dom";
import { DevTool } from "@hookform/devtools";

const HomeFilter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<z.infer<typeof FilterHomeFormValidation>>({
    resolver: zodResolver(FilterHomeFormValidation),
    mode: "onSubmit",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city");

  const submitHandler = (data: z.infer<typeof FilterHomeFormValidation>) => {
    setSearchParams({
      city: data.city,
      minPrice: data.minPrice.toString(),
      maxPrice: data.maxPrice.toString(),
      type: data.type,
      bedroom: data.bedroom.toString(),
      category: data.category,
    });
  };
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-6">
      <h1 className="text-2xl">
        Search results for <span className="font-bold capitalize">{city}</span>
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="border-collapse">
        <CustomForm
          register={register}
          name={"city"}
          placeholder={"City"}
          fieldType={FormFieldType.TEXT}
        />
        <div className="grid border-collapse lg:grid-cols-6">
          <CustomForm
            register={register}
            name="type"
            placeholder="Type"
            fieldType={FormFieldType.SELECT}
            selectOptions={["buy", "rent"]}
          ></CustomForm>
          <CustomForm
            register={register}
            name="category"
            placeholder="Category"
            fieldType={FormFieldType.SELECT}
            selectOptions={["apartment", "house", "condo", "land"]}
          />
          <CustomForm
            register={register}
            name="minPrice"
            placeholder="Min Price"
            fieldType={FormFieldType.NUMBER}
          />
          <CustomForm
            register={register}
            name="maxPrice"
            placeholder="Max Price"
            fieldType={FormFieldType.NUMBER}
          />
          <CustomForm
            register={register}
            name="bedroom"
            placeholder="Bedroom"
            fieldType={FormFieldType.NUMBER}
          />
          <button type="submit" className="border border-black bg-accent p-2">
            Filter
          </button>
        </div>
      </form>
      <FormErrors errors={errors} />
      <DevTool control={control} />
    </div>
  );
};

export default HomeFilter;
