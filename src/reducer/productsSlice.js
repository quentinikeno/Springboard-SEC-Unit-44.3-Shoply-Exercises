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
		removeFromCart: (state, action) => {
			const { id, qty } = action.payload;
			const foundProduct = state.cart[id];
			if (foundProduct) {
				state["cart"][id]["quantity"] -= qty;
				if (state["cart"][id]["quantity"] < 1) delete state["cart"][id];
			} else {
				console.error("Item not found in cart.");
			}
		},
		clearCart: (state) => {
			state.cart = {};
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = productsSlice.actions;

export default productsSlice.reducer;
