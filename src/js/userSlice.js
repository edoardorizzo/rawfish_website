import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./api";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    filteredUsers: [],
    hasMore: true,
    isFetching: false, // Nuova variabile di stato
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
      state.isFetching = false; // Imposta isFetching a false dopo aver ricevuto i dati
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});

export const { setUsers, setIsFetching } = userSlice.actions;

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
