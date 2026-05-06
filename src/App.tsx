import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="pt-16">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
