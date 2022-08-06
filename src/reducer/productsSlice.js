import { createSlice } from "@reduxjs/toolkit";
import inventory from "../data.json";

const initialState = {
	inventory,
	cart: [],
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export default productsSlice.reducer;
