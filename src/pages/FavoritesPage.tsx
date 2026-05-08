import { Heart, Trash2 } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
	const { favorites, toggleFavorite } = useFavorites();
	return (
		<main className="min-h-screen px-8 md:px-16 py-12 text-white bg-jjk-dark pt-24">
			{/* Header */}
			<div className="flex flex-col justify-between gap-6 mb-12 md:flex-row md:items-end border-b border-white/10 pb-8">
				<div className="">
					<h1 className="mb-4 text-5xl tracking-wider text-white font-permanent">
						My <span className="text-red-500">Favorites</span>
					</h1>
					<p className="max-w-md text-gray-400">
						Your personal collection of sorcerers and cursed spirits you've marked as favorites.
					</p>
				</div>
			</div>
			{/* Empty State */}
			{favorites?.length === 0 ? (
				<div className="flex flex-col items-center justify-center py-32 text-center">
					<div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-dashed border-white/20">
						<Heart size={40} className="text-gray-600" />
					</div>
					<h2 className="text-2xl font-bold mb-2">Your collection is empty</h2>
					<p className="text-gray-500 mb-8 max-w-xs">
						Start exploring and tap the heart icon to save your favorite character here.
					</p>
					<Link
						to={"/characters"}
						className="px-8 py-3 bg-jjk-accent text-jjk-dark font-bold rounded-full hover:scale-105 transition-transform"
					>
						Explore Characters
					</Link>
				</div>
			) : (
				<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
					{favorites?.map((char) => (
						<div key={char.mal_id} className="relative flex flex-col items-center group">
							{/* Remove Button */}
							<button
								onClick={() => toggleFavorite(char)}
								className="absolute -top-2 -right-2 z-20 p-2 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 cursor-pointer"
								title="Remove from favorites"
							>
								<Trash2 size={16} />
							</button>

							{/* Character Grid */}
							<Link
								to={`/characters/${char.mal_id}`}
								className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-white/10 bg-jjk-blue/20 transition-all duration-500 group-hover:scale-[1.02] cursor-pointer"
							>
								<img
									src={char.images.webp.image_url}
									alt={char.name}
									className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-jjk-dark via-transparent to-transparent opacity-60" />
							</Link>

							<div className="mt-4 text-center">
								<h3 className="text-sm font-bold transition-colors md:text-base group-hover:text-red-400 line-clamp-1">
									{char.name}
								</h3>
								<p className="flex items-center justify-center gap-1 mt-1 text-xs text-gray-500">
									{char.favorites.toLocaleString()} Fans
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</main>
	);
}
