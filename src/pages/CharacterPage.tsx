import { useCharacters } from "../hooks/useCharacters";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import SearchInput from "../components/ui/SearchInput";
import CharacterListHeader from "../components/character-list/CharacterListHeader";
import CharacterListGrid from "../components/character-list/CharacterListGrid";
import CharacterListPagination from "../components/character-list/CharacterListPagination";
import { useSearchParams } from "react-router-dom";
import { JJK_SHOWS } from "../data/shows";

export default function CharacterPage() {
	const { loading, error, pagination, goToPage, totalPages, currentPage, searchQuery, handleSearch, totalResult } =
		useCharacters();
	const [searchParams, setSearchParams] = useSearchParams();
	const currentAnimeId = parseInt(searchParams.get("animeId") || "40748");

	const handleSeasonChange = (id: number) => {
		searchParams.set("animeId", id.toString());
		searchParams.set("page", "1");
		setSearchParams(searchParams);
	};

	if (loading) {
		return <Loading summon="Summoning Sorceres..." />;
	}

	if (error || !pagination) {
		return <Error error={error} />;
	}

	return (
		<main className="min-h-screen px-8 py-12 text-white bg-jjk-dark md:px-16">
			{/* Header & Search input */}
			<div className="flex flex-col justify-between gap-6 mb-12 md:flex-row md:items-end">
				<CharacterListHeader totalResult={totalResult} />
				<SearchInput query={searchQuery} onSearch={handleSearch} />
			</div>

			{/* Selection Selector Tabs */}
			<div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
				{JJK_SHOWS.map((show) => (
					<button
						key={show.id}
						onClick={() => handleSeasonChange(show.id)}
						className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all cursor-pointer whitespace-nowrap ${
							currentAnimeId === show.id
								? "bg-jjk-accent text-jjk-dark shadow-[0_0_15px_rgba(0,210,255,0.3)]"
								: "bg-white/5 text-gray-500 border border-white/10 hover:bg-white/10"
						}`}
					>
						{show.title}
					</button>
				))}
			</div>

			{/* Character Grid */}
			<CharacterListGrid pagination={pagination} />

			{/* Pagination */}
			<CharacterListPagination page={currentPage} onPage={goToPage} totalPages={totalPages} />

			{pagination.length === 0 && (
				<div className="py-20 text-center">
					<p className="text-gray-500">No sorcerers found matching search.</p>
				</div>
			)}
		</main>
	);
}
