import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import CharacterPage from "./pages/CharacterPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import GradingPage from "./pages/GradingPage";
import ClanPage from "./pages/ClanPage";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="pt-16">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<CharacterPage />} />
					<Route path="/characters/:id" element={<CharacterDetailPage />} />
					<Route path="/grades" element={<GradingPage />} />
					<Route path="/clans" element={<ClanPage />} />
					<Route path="/favorites" element={<FavoritesPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
