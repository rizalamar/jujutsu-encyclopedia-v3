import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import CharacterPage from "./pages/CharacterPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import ShowPage from "./pages/ShowPage";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="pt-16">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<CharacterPage />} />
					<Route path="/characters/:id" element={<CharacterDetailPage />} />
					<Route path="/shows" element={<ShowPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
