import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAddRemoveCart from "./hooks/useAddRemoveCart";
import "./Product.css";

const Product = ({ id, product }) => {
	const { name, price, image_url } = product;
	const productInCart = useSelector((state) => state.products.cart[id]);
	const [handleAddToCart, handleRemoveFromCart] = useAddRemoveCart(id);

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
				<div className="px-3">
					<Link to={`/products/${id}`}>
						<button className="button is-info is-outlined is-rounded is-fullwidth mb-3">
							Details{" "}
							<i className="fa-solid fa-circle-info ml-2"></i>
						</button>
					</Link>
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
					{productInCart && (
						<>
							<div className="card-footer-item">
								{productInCart.quantity}
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
