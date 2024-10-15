import { useForm } from "react-hook-form";
import CustomForm from "../components/CustomForm";
import { FormFieldType } from "../types/CustomFormTypes";
import TextEditor from "../components/TextEditor";
import { useEffect, useState } from "react";
import UploadWidget from "../components/UploadWidget";
import FormErrors from "../components/FormErrors";
import { useAddHouse } from "../features/AddHome/hooks/useAddHouse";
import { z } from "zod";
import { AddHouseFormDataSchema } from "../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";

const AddHome = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<z.infer<typeof AddHouseFormDataSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(AddHouseFormDataSchema),
  });
  const [postImages, setPostImages] = useState<string[]>([]);

  const descriptionOnChange = (value: string) => {
    setValue("desc", value);
  };
  const { mutate, isSuccess, isPending } = useAddHouse();

  const submitHandler = (data: z.infer<typeof AddHouseFormDataSchema>) => {
    mutate(data);
    if (isSuccess) {
      reset();
    }
  };

  useEffect(() => {
    register("desc", { required: "Description is required" });
    register("images", { required: "Images are required" });
    register("latitude", { required: "Latitude is required" });
    register("longitude", { required: "Longitude is required" });
  }, [register]);

  useEffect(() => {
    setValue("images", postImages);
  }, [postImages, setValue]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setValue("latitude", latitude);
        setValue("longitude", longitude);
      });
    }
  });

  return (
    <div className="mx-4 flex flex-col pt-20 lg:gap-y-3 lg:pb-12 lg:pt-24">
      <h1 className="text-3xl font-semibold">List a new house 👋</h1>
      <p>Please ensure to fill all the necessary fields!!</p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-y-3"
      >
        <CustomForm
          register={register}
          label="Title"
          name="title"
          isRequired
          fieldType={FormFieldType.TEXT}
        />

        <div className="flex flex-col gap-y-3">
          <label className="text-xl font-semibold">Description</label>
          <TextEditor onChange={descriptionOnChange} />
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-xl font-semibold">Images</label>
          <p className="text-sm">Please upload at least 4 images 🥺</p>
          <div className="flex flex-wrap gap-3">
            {postImages &&
              postImages.length > 0 &&
              postImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="post"
                  className="h-52 w-52 object-cover"
                />
              ))}
          </div>
          <UploadWidget
            uwConfig={{
              cloudName: "dhj4k72me",
              uploadPreset: "uw_test",
              multiple: true,
              folders: "posts",
            }}
            setState={setPostImages}
          />
        </div>
        <div className="grid gap-x-5 lg:grid-cols-2">
          <CustomForm
            register={register}
            label="Price"
            name="price"
            isRequired
            fieldType={FormFieldType.NUMBER}
          />
          <CustomForm
            register={register}
            label="Size"
            defaultValue=""
            name="size"
            fieldType={FormFieldType.NUMBER}
          />
        </div>
        <div className="grid gap-x-5 lg:grid-cols-2">
          <CustomForm
            register={register}
            label="Address"
            name="address"
            isRequired
            fieldType={FormFieldType.TEXT}
          />
          <CustomForm
            register={register}
            label="City"
            name="city"
            isRequired
            fieldType={FormFieldType.TEXT}
          />
        </div>
        <div className="grid gap-x-5 lg:grid-cols-2">
          <CustomForm
            register={register}
            label="Bedrooms"
            name="bedroom"
            isRequired
            defaultValue=""
            fieldType={FormFieldType.NUMBER}
          />
          <CustomForm
            register={register}
            label="Bathrooms"
            name="bathroom"
            isRequired
            defaultValue=""
            fieldType={FormFieldType.NUMBER}
          />
        </div>
        <div className="grid gap-x-5 lg:grid-cols-2">
          <CustomForm
            register={register}
            label="Type"
            name="type"
            isRequired
            fieldType={FormFieldType.SELECT}
            selectOptions={["buy", "rent"]}
          />
          <CustomForm
            register={register}
            label="Property"
            name="property"
            isRequired
            fieldType={FormFieldType.SELECT}
            selectOptions={["apartment", "house", "condo", "land"]}
          />
        </div>
        <div className="grid gap-x-5 lg:grid-cols-2">
          <CustomForm
            register={register}
            label="Utilities"
            name="utilities"
            fieldType={FormFieldType.TEXT}
          />
          <CustomForm
            register={register}
            label="Pets"
            name="pet"
            fieldType={FormFieldType.TEXT}
          />
        </div>
        <div className="grid gap-x-5 lg:grid-cols-2">
          <CustomForm
            register={register}
            label="Income"
            name="income"
            fieldType={FormFieldType.TEXT}
          />
          <CustomForm
            register={register}
            label="Restaurant"
            name="restaurant"
            defaultValue=""
            fieldType={FormFieldType.NUMBER}
          />
        </div>
        <div className="grid gap-x-5 lg:grid-cols-2">
          <CustomForm
            register={register}
            label="School"
            name="school"
            defaultValue=""
            fieldType={FormFieldType.NUMBER}
          />
          <CustomForm
            register={register}
            label="Bus"
            name="bus"
            defaultValue=""
            fieldType={FormFieldType.NUMBER}
          />
        </div>

        <div className="flex justify-center pt-6">
          <button
            disabled={isPending}
            className="h-fit w-full border border-black bg-accent p-2"
            type="submit"
          >
            {`${isPending ? "Adding..." : "Add Home"}`}
          </button>
        </div>
      </form>
      <FormErrors errors={errors} />
    </div>
  );
};

export default AddHome;
