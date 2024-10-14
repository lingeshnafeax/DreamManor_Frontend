import { UserDataType } from "../../types/UserDataTypes";
import { useNavigate } from "react-router-dom";
import { useUserLogout } from "./hooks/useUserLogout";

const UserProfile = ({ profile }: { profile: UserDataType }) => {
  const { isPending, Logout } = useUserLogout();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 items-center gap-x-4 gap-y-6 text-sm lg:w-1/2">
      <p>Avatar</p>
      <img src={profile.avatar} className="h-10 w-10 rounded-full" alt="" />
      <p>Username</p>
      <span className="font-semibold capitalize">{profile.username}</span>
      <p>Email</p> <span className="font-semibold">{profile.email}</span>
      <button
        onClick={() => navigate(`/profile/update`)}
        className="border border-black bg-accent p-2"
      >
        Update Profile
      </button>
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
