import { useForm } from "react-hook-form";
import CustomForm from "../components/CustomForm";
import { useFetchUserData } from "../hooks/useFetchUserData";
import BackgroundImageLayout from "../layouts/BackgroundImage/BackgroundImageLayout";
import { FormFieldType } from "../types/CustomFormTypes";
import FormErrors from "../components/FormErrors";
import { UpdateFormData } from "../types/FormDataTypes";

const UpdateProfile = () => {
  const { data } = useFetchUserData();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateFormData>();
  console.log(data);
  return (
    <BackgroundImageLayout
      source={data?.avatar}
      className="flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-y-6"
      >
        <CustomForm
          register={register}
          fieldType={FormFieldType.TEXT}
          name="username"
          label="Username"
          defaultValue={data?.username}
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.EMAIL}
          name="email"
          label="Email"
          defaultValue={data?.email}
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.PASSWORD}
          name="password"
          label="Password"
        />
        <button className="border border-black bg-accent p-2">Update</button>
      </form>
      <FormErrors errors={errors} />
    </BackgroundImageLayout>
  );
};

export default UpdateProfile;
