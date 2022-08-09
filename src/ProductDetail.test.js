import { render } from "@testing-library/react";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import ProductDetail from "./ProductDetail";
import { MemoryRouter, Routes, Route } from "react-router-dom";

it("renders without crashing", () => {
	render(
		<Provider store={store}>
			<MemoryRouter
				initialEntries={[
					"/products/2266b2d6-3d71-4356-8065-392f1fceab07",
				]}
			>
				<Routes>
					<Route
						path="/products/:id"
						element={<ProductDetail />}
					></Route>
				</Routes>
			</MemoryRouter>
		</Provider>
	);
});

it("renders matches snapshot", () => {
	const { asFragment } = render(
		<Provider store={store}>
			<MemoryRouter
				initialEntries={[
					"/products/2266b2d6-3d71-4356-8065-392f1fceab07",
				]}
			>
				<Routes>
					<Route
						path="/products/:id"
						element={<ProductDetail />}
					></Route>
				</Routes>
			</MemoryRouter>
		</Provider>
	);
	expect(asFragment()).toMatchSnapshot();
});
