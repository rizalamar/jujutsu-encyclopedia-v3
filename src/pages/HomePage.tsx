import Error from "../components/ui/Error";
import Loading from "../components/ui/Loading";
import { useAnimeJJK } from "../hooks/useAnimeJJK";
import { useNavigate } from "react-router-dom";
import HomeHero from "../components/home/HomeHero";
import FranchiseDossier from "../components/home/FranchiseDossier";
import SeriesList from "../components/home/SeriesList";
import PowerSystem from "../components/home/PowerSystem";

export default function Home() {
	const { data, loading, error, currentId, setCurrentId } = useAnimeJJK();
	const navigate = useNavigate();

	if (loading) {
		return <Loading summon="Loading Cursed Energy..." />;
	}

	if (error || !data) {
		return <Error error={error} />;
	}

	return (
		<div className="min-h-screen text-white bg-jjk-dark">
			{/* HERO SECTION */}
			<HomeHero
				data={data}
				loading={loading}
				currentId={currentId}
				setCurrentId={setCurrentId}
				onExplore={() => navigate(`/characters?animeId=${currentId}`)}
			/>
			{/* 2. FRANCHISE DOSSIER (Stats) */}
			<FranchiseDossier data={data} loading={loading} />

			{/* Series List */}
			<SeriesList onExplore={(id) => navigate(`/characters?animeId=${id}`)} />

			{/* Power System */}
			<PowerSystem />
		</div>
	);
}
