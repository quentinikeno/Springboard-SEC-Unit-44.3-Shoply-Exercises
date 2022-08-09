import { useSelector, shallowEqual } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
	const { products } = useSelector(
		(state) => state.products.inventory,
		shallowEqual
	);
	const cart = useSelector((state) => state.products.cart);
	const cartIds = Object.keys(cart);
	const cartItems = cartIds.map((id) => (
		<CartItem key={id} id={id} quantity={cart[id].quantity} />
	));
	const total = cartIds.reduce(
		(total, id) => total + cart[id].quantity * products[id].price,
		0
	);
	const totalDiv = (
		<div className="total">
			<hr />
			<p className="has-text-right">
				<span className="subtitle">Total </span>
				<span className="title">${total}</span>
			</p>
		</div>
	);
	return (
		<div>
			{cartItems.length ? (
				[cartItems, totalDiv]
			) : (
				<p className="title my-3">No items in your cart!</p>
			)}
		</div>
	);
};

export default Cart;
