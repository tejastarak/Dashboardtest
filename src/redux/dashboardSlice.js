import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [], // Example state
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Add your reducers here
  },
});

export const { /* actions */ } = dashboardSlice.actions;

export default dashboardSlice.reducer;
