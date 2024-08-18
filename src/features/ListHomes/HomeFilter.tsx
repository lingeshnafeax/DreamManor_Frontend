import { useForm } from "react-hook-form";
import CustomForm from "../../components/CustomForm";
import { FormFieldType } from "../../types/CustomFormTypes";
import { FilterFormDataType } from "../../types/FormDataTypes";
import { z } from "zod";
import { FilterHomeFormValidation } from "../../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
const HomeFilter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FilterHomeFormValidation>>({
    resolver: zodResolver(FilterHomeFormValidation),
    mode: "onSubmit",
  });

  const submitHandler = (data: FilterFormDataType) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-6">
      <h1 className="text-2xl">
        Search results for <span className="font-bold">Tirunelveli</span>
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="border-collapse">
        <CustomForm
          register={register}
          name={"location"}
          placeholder={"Location"}
          fieldType={FormFieldType.TEXT}
        />
        <div className="grid border-collapse lg:grid-cols-6">
          <CustomForm
            register={register}
            name="type"
            placeholder="Type"
            fieldType={FormFieldType.SELECT}
            selectOptions={["Buy", "Rent"]}
          ></CustomForm>
          <CustomForm
            register={register}
            name="category"
            placeholder="Category"
            fieldType={FormFieldType.SELECT}
            selectOptions={["Home", "Appartment", "Plot"]}
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
      {errors && (
        <div className="flex flex-col gap-y-2">
          {Object.values(errors).map((err) => (
            <div className="flex items-center gap-x-3">
              <X className="text-red-500" />
              <p>{err.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeFilter;
