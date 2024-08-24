import { useForm } from "react-hook-form";
import BackgroundImageLayout from "../layouts/BackgroundImage/BackgroundImageLayout";
import { z } from "zod";
import { RegisterFormValidation } from "../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData } from "../types/FormDataTypes";
import CustomForm from "../components/CustomForm";
import { FormFieldType } from "../types/CustomFormTypes";
import FormErrors from "../components/FormErrors";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormValidation>>({
    resolver: zodResolver(RegisterFormValidation),
    mode: "onSubmit",
  });

  const submitHandler = (data: RegisterFormData) => {
    console.log(data);
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
          type="submit"
          className="border border-black bg-accent px-2 py-2 transition duration-200 ease-in-out hover:bg-black hover:text-accent lg:px-3"
        >
          Sign up
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
