import { useCharacters } from "../hooks/useCharacters";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { useLocation } from "react-router-dom";
import SearchInput from "../components/ui/SearchInput";
import CharacterListHeader from "../components/character-list/CharacterListHeader";
import CharacterListGrid from "../components/character-list/CharacterListGrid";
import CharacterListPagination from "../components/character-list/CharacterListPagination";

export default function CharacterPage() {
	const { loading, error, pagination, goToPage, totalPages, currentPage, searchQuery, handleSearch, totalResult } =
		useCharacters();
	const location = useLocation();
	const fromShow = location.state?.fromShow;

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

			{/* Character Grid */}
			<CharacterListGrid pagination={pagination} fromShow={fromShow} />

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
