import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./api";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    filteredUsers: [],
    hasMore: true,
    isFetching: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
      state.isFetching = false;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    filterUsers: (state, action) => {
      const { query } = action.payload;
      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.first.toLowerCase().includes(query.toLowerCase()) ||
          user.name.last.toLowerCase().includes(query.toLowerCase()) ||
          user.location.city.toLowerCase().includes(query.toLowerCase()) ||
          user.location.country.toLowerCase().includes(query.toLowerCase()) ||
          user.location.state.toLowerCase().includes(query.toLowerCase()) ||
          user.gender.toLowerCase() === query.toLowerCase()
      );
    },
  },
});

export const { setUsers, setIsFetching, filterUsers } = userSlice.actions;

export const fetchUsersWithCache = (results) => async (dispatch, getState) => {
  const { user } = getState();

  if (user.isFetching) {
    return;
  }

  try {
    dispatch(setIsFetching(true));
    const cachedData = await fetchUsers(results);
    dispatch(setUsers(cachedData));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export default userSlice.reducer;
