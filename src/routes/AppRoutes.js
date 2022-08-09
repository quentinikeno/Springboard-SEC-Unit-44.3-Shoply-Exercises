import { Routes, Route, Navigate } from "react-router-dom";
import Inventory from "../Inventory";
import ProductDetail from "../ProductDetail";
import Cart from "../Cart";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Inventory />} />
			<Route path="/products/:id" element={<ProductDetail />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="*" element={<Navigate replace to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
