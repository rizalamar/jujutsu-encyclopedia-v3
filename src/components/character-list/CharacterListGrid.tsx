import { User } from "lucide-react";
import { Link } from "react-router-dom";
import type { Character } from "../../@types/character.types";

interface Props {
	pagination: Character[];
	fromShow?: string;
}

export default function CharacterListGrid({ pagination, fromShow }: Props) {
	return (
		<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
			{pagination.map((char) => (
				<div key={char.character.mal_id} className="relative flex flex-col items-center group">
					{/* Character Image */}
					<Link
						to={`/characters/${char.character.mal_id}`}
						state={{ fromShow: fromShow }}
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
	);
}
