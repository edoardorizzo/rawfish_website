import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./api";

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

export const fetchUsersWithCache = (results) => async (dispatch) => {
  try {
    const cachedData = await fetchUsers(results);
    console.log(`Fetched data for ${results} results:`, cachedData);
    dispatch(setUsers(cachedData));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export default userSlice.reducer;
