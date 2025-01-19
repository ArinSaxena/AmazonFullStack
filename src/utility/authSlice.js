import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "User",
  initialState: {
    userData: "",
  },
  reducers: {
    setCurrentUser: (state, action) => {
    const user = action.payload;
    state.userData = user;
    },
    removeCurrentUser: (state) => {
      state.userData=""
    },
  },
});

export const {setCurrentUser,removeCurrentUser  } = authSlice.actions;

export default authSlice.reducer;
