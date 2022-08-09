import AppRoutes from "./routes/AppRoutes";
import Navbar from "./routes/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<AppRoutes />
			</div>
		</div>
	);
}

export default App;
