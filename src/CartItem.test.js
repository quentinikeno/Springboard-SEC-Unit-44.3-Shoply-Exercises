import { render } from "@testing-library/react";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CartItem from "./CartItem";

const tvId = "2266b2d6-3d71-4356-8065-392f1fceab07";

it("renders without crashing", () => {
	render(
		<Provider store={store}>
			<MemoryRouter initialEntries={["/cart"]}>
				<Routes>
					<Route
						path="/cart"
						element={<CartItem id={tvId} quantity={1} />}
					></Route>
				</Routes>
			</MemoryRouter>
		</Provider>
	);
});

it("renders matches snapshot", () => {
	const { asFragment } = render(
		<Provider store={store}>
			<MemoryRouter initialEntries={["/cart"]}>
				<Routes>
					<Route
						path="/cart"
						element={<CartItem id={tvId} quantity={1} />}
					></Route>
				</Routes>
			</MemoryRouter>
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
