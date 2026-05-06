import { useCharacters } from "../hooks/useCharacters";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { useState } from "react";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function CharacterPage() {
	const { characters, loading, error } = useCharacters();
	const [searchQuery, setSearchQuery] = useState<string>("");

	const filteredCharacter = characters?.filter((char) =>
		char.character.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	if (loading) {
		return <Loading summon="Summoning Sorceres..." />;
	}

	if (error || !characters) {
		return <Error error={error} />;
	}

	return (
		<main className="min-h-screen px-8 py-12 text-white bg-jjk-dark md:px-16">
			{/* Header & Search input */}
			<div className="flex flex-col justify-between gap-6 mb-12 md:flex-row md:items-end">
				<div className="">
					<h1 className="mb-4 text-5xl tracking-wider text-white font-permanent">
						Jujutsu Kaisen <span className="text-jjk-accent">Sorcerers</span>
					</h1>
					<p className="max-w-md text-gray-400">
						Explore the powerful sorceres and cursed spirits from the Jujutsu Kaisen universe.
					</p>
				</div>

				<div className="relative w-full group md:w-md">
					<Search
						size={20}
						className="absolute text-gray-500 transition-colors -translate-y-1/2 left-4 top-1/2 group-focus-within:text-jjk-accent"
					/>

					<input
						type="text"
						placeholder="Search Sorceres..."
						className="w-full py-3 pl-12 pr-6 transition-all border rounded-full outline-none bg-jjk-blue/30 border-white/20 focus: focus:border-jjk-accent/50 focus:bg-jjk-blue/50"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</div>

			{/* Character Grid */}
			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
				{filteredCharacter.map((char) => (
					<div key={char.character.mal_id} className="relative flex flex-col items-center group">
						{/* Character Image */}
						<Link
							to={`/characters/${char.character.mal_id}`}
							className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-white/10 bg-jjk-blue/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-jjk-accent/50 group-hover:shadow-[0_0_20px_rgba(0, 210, 255,0.2)]"
						>
							<img
								src={char.character.images.webp.image_url}
								alt={char.character.name}
								className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
								loading="lazy"
							/>

							{/* Role Badge */}
							<div className="absolute px-2 py-1 border rounded-lg top-3 right-3 bg-jjk-dark/80 backdrop-blur-md border-white/10">
								<p className="text-[10px] font-bold uppercase tracking-wider">{char.role}</p>
							</div>

							{/* Gradien Overlay */}
							<div className="absolute inset-0 transition-opacity bg-linear-to-t from-jjk-dark via-transparent to-transparent opacity-60 group-hover:opacity-80" />
						</Link>

						{/* Character Info */}
						<div className="mt-4 text-center">
							<h3 className="text-sm font-bold transition-colors md:text-base group-hover:text-jjk-accent line-clamp-1">
								{char.character.name}
							</h3>
							<p className="flex items-center justify-center gap-1 mt-1 text-xs text-gray-500">
								<User size={12} />
								{char.favorites.toString()} Favorites
							</p>
						</div>
					</div>
				))}
			</div>

			{filteredCharacter.length === 0 && (
				<div className="py-20 text-center">
					<p className="text-gray-500">No sorcerers found matching search.</p>
				</div>
			)}
		</main>
	);
}
