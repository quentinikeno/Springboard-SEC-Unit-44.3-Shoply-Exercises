import { createSlice } from "@reduxjs/toolkit";
import inventory from "../data.json";

const initialState = {
	inventory,
	cart: {},
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { id, qty } = action.payload;
			const foundProduct = state.cart[id];
			if (foundProduct) {
				state["cart"][id]["quantity"] += qty;
			} else {
				state["cart"][id] = { quantity: qty };
			}
		},
	},
});

export const { addToCart } = productsSlice.actions;

export default productsSlice.reducer;
