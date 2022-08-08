import { Routes, Route, Navigate } from "react-router-dom";
import Inventory from "../Inventory";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Inventory />} />
			<Route path="*" element={<Navigate replace to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
