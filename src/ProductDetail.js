import { useSelector } from "react-redux";
import { useParams, Navigate, Link } from "react-router-dom";
import useAddRemoveCart from "./hooks/useAddRemoveCart";
import "./ProductDetail.css";

const ProductDetail = () => {
	const { id } = useParams();
	const product = useSelector(
		(state) => state.products.inventory.products[id]
	);
	const productInCart = useSelector((state) => state.products.cart[id]);

	const [handleAddToCart, handleRemoveFromCart] = useAddRemoveCart(id);

	if (!product) return <Navigate to="/" />;

	const { name, price, description, image_url } = product;

	return (
		<div className="ProductDetail columns is-desktop my-3">
			<nav className="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<Link to="/">Products</Link>
					</li>
					<li className="is-active">
						<Link
							to="#"
							aria-current="page"
							className="is-capitalized"
						>
							{name}
						</Link>
					</li>
				</ul>
			</nav>
			<div className="column">
				<figure className="image is-4by3">
					<img src={image_url} className="mx-auto" alt={name} />
				</figure>
			</div>
			<div className="column">
				<h1 className="title is-capitalized">{name}</h1>
				<p className="subtitle">${price}</p>
				<hr />
				<p className="box">
					<span className="has-text-weight-bold">Description: </span>
					<br /> {description}
				</p>
				<hr />
				<div>
					<button
						className="button is-primary is-rounded is-outlined is-fullwidth"
						onClick={handleAddToCart}
					>
						Add <i className="fa-solid fa-cart-plus ml-2"></i>
					</button>

					{productInCart && (
						<>
							<div className="box my-3">
								<span className="has-text-weight-bold">
									Number in Cart:{" "}
								</span>
								<br /> {productInCart.quantity}
							</div>

							<button
								className="button is-danger is-rounded is-outlined is-fullwidth"
								onClick={handleRemoveFromCart}
							>
								Remove{" "}
								<i className="fa-solid fa-cart-shopping ml-2"></i>
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
