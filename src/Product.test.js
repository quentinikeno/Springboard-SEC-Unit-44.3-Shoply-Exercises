import { render } from "@testing-library/react";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
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
