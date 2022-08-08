import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reducer/productsSlice";

const useAddRemoveCart = (id, qty = 1) => {
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(addToCart({ id, qty }));
	};

	const handleRemoveFromCart = () => {
		dispatch(removeFromCart({ id, qty }));
	};
	return [handleAddToCart, handleRemoveFromCart];
};

export default useAddRemoveCart;
