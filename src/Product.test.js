import { fireEvent, render } from "@testing-library/react";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import { clearCart } from "./reducer/productsSlice";
import Product from "./Product";

const tvId = "47314fa1-ae56-4eae-80be-af6691145951";
const tv = {
	name: "tv",
	price: 219.99,
	description:
		"A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
	image_url:
		"https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue",
};
const addTV = () => {
	const { queryByText, getByText } = render(
		<Provider store={store}>
			<Product id={tvId} product={tv} />
		</Provider>
	);
	// Remove from cart button not in the document
	expect(queryByText("Remove")).not.toBeInTheDocument();

	// Test clicking on the add to cart button.
	const addToCartBtn = getByText("Add");
	fireEvent.click(addToCartBtn);
	return { getByText, queryByText };
};

afterEach(() => {
	clearCart();
});

describe("Smoke and snapshot tests.", () => {
	it("renders without crashing", () => {
		render(
			<Provider store={store}>
				<Product id={tvId} product={tv} />
			</Provider>
		);
	});

	it("renders matches snapshot", () => {
		const { asFragment } = render(
			<Provider store={store}>
				<Product id={tvId} product={tv} />
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

it("Adds the TV to cart when the add to cart button is clicked.", () => {
	const { queryByText, getByText } = render(
		<Provider store={store}>
			<Product id={tvId} product={tv} />
		</Provider>
	);
	// Remove from cart button not in the document
	expect(queryByText("Remove")).not.toBeInTheDocument();

	// Test clicking on the add to cart button.
	const addToCartBtn = getByText("Add");
	fireEvent.click(addToCartBtn);
	expect(getByText("Remove")).toBeInTheDocument();
	expect(getByText("1")).toBeInTheDocument();

	const removeFromCartBtn = getByText("Remove");
	fireEvent.click(removeFromCartBtn);
	expect(queryByText("Remove")).not.toBeInTheDocument();
	expect(queryByText("1")).not.toBeInTheDocument();
});
