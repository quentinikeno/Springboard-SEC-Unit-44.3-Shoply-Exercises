import { render } from "@testing-library/react";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import Cart from "./Cart";

it("renders without crashing", () => {
	render(
		<Provider store={store}>
			<Cart />
		</Provider>
	);
});

it("renders matches snapshot", () => {
	const { asFragment } = render(
		<Provider store={store}>
			<Cart />
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
