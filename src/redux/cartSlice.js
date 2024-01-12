import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push({
                instrumentId: action.payload.quantity,
                quantity: action.payload.quantity
            })
        },
    }
})

export const getCartItems = state => state.cart.CartItems;
export const {addItemToCart} = slice.actions;
export default slice.reducer;