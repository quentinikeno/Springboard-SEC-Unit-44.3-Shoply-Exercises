import { render } from "@testing-library/react";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import Inventory from "./Inventory";

it("renders without crashing", () => {
	render(
		<Provider store={store}>
			<Inventory />
		</Provider>
	);
});

it("renders matches snapshot", () => {
	const { asFragment } = render(
		<Provider store={store}>
			<Inventory />
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
