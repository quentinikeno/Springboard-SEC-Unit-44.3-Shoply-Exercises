import reducer, { addToCart, removeFromCart } from "./productsSlice";
import inventory from "../data.json";

const initialState = {
	inventory,
	cart: {},
};

it("should return the initial state", () => {
	expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

describe("testing actions", () => {
	const tvId = "47314fa1-ae56-4eae-80be-af6691145951";

	it("should handle adding a product to the cart", () => {
		expect(reducer(initialState, addToCart({ id: tvId, qty: 1 }))).toEqual({
			inventory,
			cart: { [tvId]: { quantity: 1 } },
		});
	});

	it("should handle adding multiple of a product to the cart", () => {
		expect(reducer(initialState, addToCart({ id: tvId, qty: 3 }))).toEqual({
			inventory,
			cart: { [tvId]: { quantity: 3 } },
		});
	});

	const previousState = {
		inventory,
		cart: { [tvId]: { quantity: 3 } },
	};

	it("should handle removing a product to the cart", () => {
		expect(
			reducer(previousState, removeFromCart({ id: tvId, qty: 1 }))
		).toEqual({
			inventory,
			cart: { [tvId]: { quantity: 2 } },
		});
	});

	it("should handle removing all of a product to the cart", () => {
		expect(
			reducer(previousState, removeFromCart({ id: tvId, qty: 3 }))
		).toEqual({
			inventory,
			cart: {},
		});
	});

	it("should handle removing all of a product to the cart when qty to be removed is more than in the cart.", () => {
		expect(
			reducer(previousState, removeFromCart({ id: tvId, qty: 5 }))
		).toEqual({
			inventory,
			cart: {},
		});
	});
});
