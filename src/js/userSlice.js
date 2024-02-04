import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    filteredUsers: [],
    hasMore: true,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
