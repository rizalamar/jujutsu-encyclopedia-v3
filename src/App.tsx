import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import CharacterPage from "./pages/CharacterPage";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="pt-16">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<CharacterPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
