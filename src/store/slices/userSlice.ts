import { createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "../../types/UserDataTypes";

const initialUserState: UserDataType = {
  id: "",
  username: "",
  email: "",
  avatar: "/Frontend/src/assets/Mine.jpg",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      const { payload }: { payload: UserDataType } = action;
      state.id = payload.id;
      state.username = payload.username;
      state.email = payload.email;
      state.avatar =
        payload.avatar ||
        "https://i1.sndcdn.com/artworks-PbERvr7S6u2rOQpO-ALIDDg-t500x500.jpg";
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
