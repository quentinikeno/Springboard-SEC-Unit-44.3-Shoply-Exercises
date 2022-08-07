import "./Product.css";

const Product = ({ id, product }) => {
	const { name, price, image_url } = product;
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
							<p className="title is-3 is-capitalized">{name}</p>
							<p className="subtitle is-5">${price}</p>
						</div>
					</div>
				</div>
				<footer className="card-footer">
					<div className="card-footer-item">
						<button className="button is-primary is-rounded is-outlined">
							Add <i className="fa-solid fa-cart-plus ml-2"></i>
						</button>
					</div>
					<div className="card-footer-item">
						<button className="button is-danger is-rounded is-outlined">
							Remove{" "}
							<i className="fa-solid fa-cart-shopping ml-2"></i>
						</button>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Product;
