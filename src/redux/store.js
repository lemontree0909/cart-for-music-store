import { configureStore } from "@reduxjs/toolkit";
import instruments from './instrumentsSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        instruments,
        cart
    },
})