import { render } from "@testing-library/react";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import App from "./App";

it("renders without crashing.", () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
});
