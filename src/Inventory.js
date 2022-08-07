import { useSelector } from "react-redux";
import Product from "./Product";

const Inventory = () => {
	const { products } = useSelector((state) => state.products.inventory);
	const productComponents = Object.keys(products).map((key) => (
		<Product key={key} id={key} product={products[key]} />
	));
	return (
		<div className="columns is-multiline is-desktop">
			{productComponents}
		</div>
	);
};

export default Inventory;
