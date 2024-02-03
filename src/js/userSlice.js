import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    filteredUsers: [],
    hasMore: true,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
    },
    setFilteredUsers: (state, action) => {
      state.filteredUsers = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
});

export const { setUsers, setFilteredUsers, setHasMore } = userSlice.actions;
export const selectUsers = (state) => state.user.users;
export const selectFilteredUsers = (state) => state.user.filteredUsers;
export const selectHasMore = (state) => state.user.hasMore;
export default userSlice.reducer;
