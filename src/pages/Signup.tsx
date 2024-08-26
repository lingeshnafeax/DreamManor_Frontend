import { useForm } from "react-hook-form";
import BackgroundImageLayout from "../layouts/BackgroundImage/BackgroundImageLayout";
import { z } from "zod";
import { RegisterFormValidation } from "../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData } from "../types/FormDataTypes";
import CustomForm from "../components/CustomForm";
import { FormFieldType } from "../types/CustomFormTypes";
import FormErrors from "../components/FormErrors";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosRequest from "../libs/axiosRequest";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormValidation>>({
    resolver: zodResolver(RegisterFormValidation),
    mode: "onSubmit",
  });

  const navigate = useNavigate();
  const { mutate: registerUser, isPending } = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: async (userData: RegisterFormData) => {
      return await axiosRequest.post("auth/register", userData);
    },
    onError: (error: AxiosError) => {
      if (error.status === 409) {
        toast.error("User already exists");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSuccess: () => {
      toast.success("Sucessfully registered");
      navigate("/signin");
    },
  });

  const submitHandler = async (data: RegisterFormData) => {
    registerUser({
      ...data,
      username: data.username.toLocaleLowerCase(),
    });
  };
  return (
    <BackgroundImageLayout>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col lg:mx-48"
      >
        <h1 className="text-center text-2xl font-bold lg:my-10">Register</h1>
        <CustomForm
          register={register}
          fieldType={FormFieldType.TEXT}
          name="username"
          placeholder="Username"
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.EMAIL}
          name="email"
          placeholder="Email"
        />
        <CustomForm
          register={register}
          fieldType={FormFieldType.PASSWORD}
          name="password"
          placeholder="Password"
        />
        <button
          disabled={isPending}
          type="submit"
          className="border border-black bg-accent px-2 py-2 transition duration-200 ease-in-out hover:bg-black hover:text-accent lg:px-3"
        >
          {isPending ? "Registering..." : "Register"}
        </button>
        <FormErrors errors={errors} />
        <p className="py-2">
          Already an user?
          <Link to="/signin" className="mx-2">
            Login
          </Link>
        </p>
      </form>
    </BackgroundImageLayout>
  );
};

export default Signup;
