import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAddRemoveCart from "./hooks/useAddRemoveCart";

const CartItem = ({ id, quantity }) => {
	const product = useSelector(
		(state) => state.products.inventory.products[id]
	);

	const [handleAddToCart, handleRemoveFromCart] = useAddRemoveCart(id);

	const { name, price, image_url } = product;

	return (
		<div className="box level has-text-centered">
			<figure className="level-item">
				<img className="image is-128x128" src={image_url} alt={name} />
			</figure>

			<div className="level-item is-capitalized">
				<div>
					<p className="heading">Product</p>
					<p className="title">
						<Link to={`/products/${id}`}>{name}</Link>
					</p>
				</div>
			</div>
			<div className="level-item">
				<div>
					<p className="heading">Price</p>
					<p className="subtitle">${price}</p>
				</div>
			</div>
			<div className="level-item">
				<div>
					<p className="heading">Qty</p>

					<i
						className="fa-solid fa-angle-up"
						onClick={handleAddToCart}
					></i>
					<span className="mx-3 subtitle">{quantity}</span>
					<i
						className="fa-solid fa-chevron-down"
						onClick={handleRemoveFromCart}
					></i>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
