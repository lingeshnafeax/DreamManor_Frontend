import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/typedRedux";
import { useMutation } from "@tanstack/react-query";
import axiosRequest from "../../../libs/axiosRequest";
import { setToken } from "../../../store/slices/tokenSlice";

export const useUserLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isPending, mutate: Logout } = useMutation({
    mutationKey: ["logoutUser"],
    mutationFn: async () => {
      await axiosRequest.post("auth/logout");
      navigate("/signin");
    },
    onSuccess: () => {
      dispatch(setToken(null));
    },
  });
  return { isPending, Logout };
};
