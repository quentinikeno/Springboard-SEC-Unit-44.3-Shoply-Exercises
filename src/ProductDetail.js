import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./reducer/productsSlice";
import { useParams, Navigate, Link } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
	const { id } = useParams();
	const product = useSelector(
		(state) => state.products.inventory.products[id]
	);
	const productInCart = useSelector((state) => state.products.cart[id]);
	const dispatch = useDispatch();

	if (!product) return <Navigate to="/" />;

	const { name, price, description, image_url } = product;

	const handleAddToCart = () => {
		dispatch(addToCart({ id, qty: 1 }));
	};

	const handleRemoveFromCart = () => {
		dispatch(removeFromCart({ id, qty: 1 }));
	};

	return (
		<div className="ProductDetail columns is-desktop my-3">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<Link to="/">Products</Link>
					</li>
					<li class="is-active">
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
					<img src={image_url} className="mx-auto" />
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
