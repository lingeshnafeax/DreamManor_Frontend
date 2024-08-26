import { useMutation } from "@tanstack/react-query";
import { UserDataType } from "../../types/UserDataTypes";
import axiosRequest from "../../libs/axiosRequest";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ profile }: { profile: UserDataType }) => {
  const navigate = useNavigate();
  const { isPending, mutate: Logout } = useMutation({
    mutationKey: ["logoutUser"],
    mutationFn: async () => {
      await axiosRequest.post("auth/logout");
      navigate("/signin");
    },
  });
  return (
    <div className="grid grid-cols-2 items-center gap-y-6 text-sm lg:w-1/4">
      <p>Avatar</p>
      <img src={profile.img} className="h-10 w-10 rounded-full" alt="" />
      <p>Username</p> <span className="font-semibold">{profile.name}</span>
      <p>Email</p> <span className="font-semibold">{profile.email}</span>
      <button
        onClick={() => Logout()}
        disabled={isPending}
        className="border border-black bg-accent p-2"
      >
        {`${isPending ? "Logging out..." : "Logout"}`}
      </button>
    </div>
  );
};

export default UserProfile;
