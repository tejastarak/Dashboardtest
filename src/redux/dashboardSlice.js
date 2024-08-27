import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  widgets: [], // Initial state for widgets
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      state.widgets.push(action.payload);
    },
    removeWidget: (state, action) => {
      state.widgets = state.widgets.filter(widget => widget.id !== action.payload);
    },
  },
});

// Export the actions
export const { addWidget, removeWidget } = dashboardSlice.actions;

// Export the reducer
export default dashboardSlice.reducer;
