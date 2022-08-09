import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cart = useSelector((state) => state.products.cart);
	const [dropMenuActive, setDropMenuActive] = useState(false);
	const cartIds = Object.keys(cart);
	const cartQty = cartIds.reduce((acc, id) => cart[id].quantity + acc, 0);

	const toggleDropMenu = () => {
		setDropMenuActive((dropMenuActive) => !dropMenuActive);
	};

	return (
		<nav
			className="navbar is-transparent container py-4"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<Link className="navbar-item" to="https://bulma.io">
					<i className="fa-solid fa-bag-shopping mr-3"></i> Shoply
				</Link>
				<div
					role="button"
					class="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarTransparent"
					onClick={toggleDropMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div
				id="navbarTransparent"
				className={`navbar-menu ${dropMenuActive ? "is-active" : ""}`}
			>
				<div className="navbar-start">
					<NavLink className="navbar-item" to="/">
						Home
					</NavLink>
				</div>
				<div className="navbar-end">
					<NavLink className="navbar-item" to="/cart">
						<i className="fa-solid fa-cart-shopping mr-3"></i> Cart
						<span className="tag is-link ml-3">{cartQty}</span>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
