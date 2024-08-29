import { useForm } from "react-hook-form";
import CustomForm from "../components/CustomForm";
import { useFetchUserData } from "../hooks/useFetchUserData";
import BackgroundImageLayout from "../layouts/BackgroundImage/BackgroundImageLayout";
import { FormFieldType } from "../types/CustomFormTypes";
import FormErrors from "../components/FormErrors";
import { z } from "zod";
import { Hourglass } from "react-loader-spinner";
import { UpdateFormValidation } from "../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateFormData } from "../types/FormDataTypes";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosRequest from "../libs/axiosRequest";
const UpdateProfile = () => {
  const { data, isLoading } = useFetchUserData();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof UpdateFormValidation>>({
    resolver: zodResolver(UpdateFormValidation),
    defaultValues: {
      username: data?.username,
      email: data?.email,
      password: "",
    },
  });
  const queryClient = useQueryClient();
  const updateUser = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: async (data: Partial<UpdateFormData>) => {
      await axiosRequest.patch("/user/updateInfo", data);
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["userData"] });
    },
  });
  const submitHandler = (formData: UpdateFormData) => {
    const initialData = {
      username: data?.username || "",
      email: data?.email || "",
      password: "",
    };
    const updatedFields: Partial<UpdateFormData> = {};

    if (formData.username !== initialData.username) {
      updatedFields.username = formData.username?.toLowerCase();
    }
    if (formData.email !== initialData.email) {
      updatedFields.email = formData.email;
    }
    if (formData.password !== "") {
      updatedFields.password = formData.password;
    }

    if (Object.keys(updatedFields).length > 0) {
      updateUser.mutate(updatedFields);
    } else {
      toast.error("No data has changed");
    }
  };

  if (isLoading) return <Hourglass />;

  return (
    <BackgroundImageLayout
      source={data?.avatar}
      className="flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-y-6"
      >
        <CustomForm
          register={register}
          fieldType={FormFieldType.TEXT}
          name="username"
          label="Username"
          isRequired={false}
          defaultValue={data?.username}
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.EMAIL}
          name="email"
          label="Email"
          isRequired={false}
          defaultValue={data?.email}
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.PASSWORD}
          name="password"
          label="Password"
          isRequired={false}
        />
        <button className="border border-black bg-accent p-2">Update</button>
      </form>
      <FormErrors errors={errors} />
    </BackgroundImageLayout>
  );
};

export default UpdateProfile;
