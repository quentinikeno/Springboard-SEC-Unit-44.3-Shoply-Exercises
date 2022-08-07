import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./reducer/productsSlice";
import "./Product.css";

const Product = ({ id, product }) => {
	const { name, price, image_url } = product;
	const cart = useSelector((state) => state.products.cart);
	const inCart = Object.keys(cart).includes(id);
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart({ id, qty: 1 }));
	};

	const handleRemoveFromCart = () => {
		dispatch(removeFromCart({ id, qty: 1 }));
	};

	return (
		<div className="Product column is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={image_url} alt={name} className="mx-auto" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-4 is-capitalized">{name}</p>
							<p className="subtitle is-5">${price}</p>
						</div>
					</div>
				</div>
				<footer className="card-footer">
					<div className="card-footer-item">
						<button
							className="button is-primary is-rounded is-outlined is-fullwidth"
							onClick={handleAddToCart}
						>
							Add <i className="fa-solid fa-cart-plus ml-2"></i>
						</button>
					</div>
					{inCart && (
						<>
							<div className="card-footer-item">
								{cart[id]["quantity"]}
							</div>
							<div className="card-footer-item">
								<button
									className="button is-danger is-rounded is-outlined is-fullwidth"
									onClick={handleRemoveFromCart}
								>
									Remove{" "}
									<i className="fa-solid fa-cart-shopping ml-2"></i>
								</button>
							</div>
						</>
					)}
				</footer>
			</div>
		</div>
	);
};

export default Product;
