import { useForm } from "react-hook-form";
import BackgroundImageLayout from "../layouts/BackgroundImage/BackgroundImageLayout";
import { z } from "zod";
import { LoginFormValidation } from "../utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData } from "../types/FormDataTypes";
import CustomForm from "../components/CustomForm";
import { FormFieldType } from "../types/CustomFormTypes";
import FormErrors from "../components/FormErrors";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosRequest from "../libs/axiosRequest";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import Cookie from "js-cookie";
import { useAppDispatch } from "../hooks/typedRedux";
import { setToken } from "../store/slices/tokenSlice";
import { setUser } from "../store/slices/userSlice";
import { UserDataType } from "../types/UserDataTypes";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    mode: "onSubmit",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate: loginUser, isPending } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: async (data: LoginFormData) => {
      return await axiosRequest.post("/auth/login", data);
    },
    onSuccess: (data: AxiosResponse) => {
      const token = Cookie.get("token");
      dispatch(setToken(token));
      dispatch(setUser(data.data.user as UserDataType));
      navigate("/");
      toast.success("Sucessfully logged in");
    },
    onError: (error: AxiosError) => {
      switch (error.status) {
        case 404:
          toast.error("User not found");
          break;
        case 401:
          toast.error("Wrong password");
          break;
        default:
          toast.error("Something went wrong");
          break;
      }
    },
  });

  const submitHandler = (data: LoginFormData) => {
    loginUser({ ...data, username: data.username.toLocaleLowerCase() });
  };

  return (
    <BackgroundImageLayout>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col lg:mx-48"
      >
        <h1 className="text-center text-2xl font-bold lg:my-10">Login</h1>
        <p className="my-3 ">Login to explore your dream house</p>
        <CustomForm
          register={register}
          fieldType={FormFieldType.TEXT}
          name="username"
          placeholder="Username"
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
          {isPending ? "Loading..." : "Login"}
        </button>
        <FormErrors errors={errors} />
        <p className="py-2">
          New user?
          <Link to="/signup" className="mx-2">
            Register
          </Link>
        </p>
      </form>
    </BackgroundImageLayout>
  );
};

export default Signin;
