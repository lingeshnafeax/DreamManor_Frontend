import { UserDataType } from "../../types/UserDataTypes";

const UserProfile = ({ profile }: { profile: UserDataType }) => {
  return (
    <div className="grid grid-cols-2 items-center gap-y-3 text-sm lg:w-1/4">
      <p>Avatar</p>
      <img src={profile.img} className="h-10 w-10 rounded-full" alt="" />
      <p>Username</p> <span className="font-semibold">{profile.name}</span>
      <p>Email</p> <span className="font-semibold">{profile.email}</span>
    </div>
  );
};

export default UserProfile;
