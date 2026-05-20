import { useLocation, useNavigate } from "react-router-dom";
import { useCharacterDetail } from "../hooks/useCharacterDetail";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { cursedTechniques } from "../data/cursedTechniques";
import BackButton from "../components/ui/BackButton";
import CharacterHero from "../components/character-detail/CharacterHero";
import CharacterBio from "../components/character-detail/CharacterBio";
import CharacterMedia from "../components/character-detail/CharacterMedia";
import CharacterGallery from "../components/character-detail/CharacterGallery";
import CharacterVoices from "../components/character-detail/CharacterVoices";
import CharacterPowerSystem from "../components/character-detail/CharacterPowerSystem";
import { useFavorites } from "../hooks/useFavorites";

export default function CharacterDetailPage() {
	const { id, characterDetail, loading, error } = useCharacterDetail();
	const { isFavorite, toggleFavorite } = useFavorites();
	const navigate = useNavigate();
	const location = useLocation();
	const fromShow = location.state?.fromShow;

	const staticData = cursedTechniques.find((p) => p.characterId === Number(id));
	const cursedTechniquesCharacter = cursedTechniques.filter((t) => t.characterId === Number(id));

	if (loading) return <Loading summon={"Unveiling Sorcerer Files..."} />;
	if (error || !characterDetail) return <Error error={"Failed to load sorcerer data..."} />;

	return (
		<main className="min-h-screen text-white bg-jjk-dark pb-20">
			<BackButton onClick={() => navigate(-1)} />
			{fromShow && (
				<div className="px-4 py-1.5 bg-jjk-accent/10 border border-jjk-accent/20 rounded-full text-[10px] font-bold text-jjk-accent uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-500">
					Part of {fromShow} Case
				</div>
			)}

			{/* Hero Detail Section */}
			<CharacterHero
				id={id || ""}
				character={characterDetail}
				staticData={staticData}
				isFavorite={isFavorite(characterDetail.mal_id)}
				onFavoriteToggle={() => toggleFavorite(characterDetail)}
			/>

			{/* Content Section */}
			<section className="grid grid-cols-1 gap-12 px-8 py-16 md:px-16 lg:grid-cols-3">
				{/* Left: About & Voice Actor */}
				<div className="space-y-16 lg:col-span-2">
					<CharacterBio about={characterDetail.about} />

					{/* Appearances */}
					<CharacterMedia anime={characterDetail.anime} manga={characterDetail.manga} />

					{/* Gallery Section */}
					<CharacterGallery characterId={id || ""} characterName={characterDetail.name} />

					{/* Voice actors */}
					<CharacterVoices voices={characterDetail.voices} />
				</div>

				{/* Right: Cursed Techniques */}
				<CharacterPowerSystem cursedTechniqueChar={cursedTechniquesCharacter} />
			</section>
		</main>
	);
}
