import { createSlice } from "@reduxjs/toolkit";

export const instrumentsSlice = createSlice({
    name: 'instruments',
    initialState: {
        selectedCategory: "ALL"
    },
    reducers: {
        filterCategory: (state, action) => {
          state.selectedCategory = action.payload
        },
    },
})

export const getSelectedCategory = state => state.instruments.selectedCategory;
export const { filterCategory } = instrumentsSlice.actions;
export default instrumentsSlice.reducer;