import { UserRoundSearch } from "lucide-react";
import type { CharacterDetail } from "../../@types/character.types";

interface Props {
	anime: CharacterDetail["anime"];
	manga: CharacterDetail["manga"];
}

export default function CharacterMedia({ anime, manga }: Props) {
	return (
		<div className="">
			<h3 className="flex items-center gap-2 pl-4 mb-8 text-2xl font-bold border-l-4 border-jjk-blue font-space italic">
				<UserRoundSearch size={24} />
				<p>Chronicles</p>
			</h3>

			<div className="space-y-6">
				{/* Anime List */}
				{anime.length > 0 && (
					<div className="">
						<p className="mb-3 text-sm font-bold tracking-widest text-gray-500 uppercase">Anime Series</p>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							{anime.map((item, idx) => (
								<div
									key={idx}
									className="flex items-center gap-3 p-2 transition-all border bg-white/5 rounded-xl border-white/5 hover:border-jjk-accent/30 group"
								>
									<img
										src={item.anime.images.webp.image_url}
										alt={item.anime.title}
										className="object-cover w-12 h-16 transition-transform rounded-lg shadow-lg group-hover:scale-105"
									/>

									<div className="overflow-hidden">
										<p className="text-[10px] font-bold text-jjk-accent uppercase tracking-normal">
											{item.role}
										</p>
										<p className="text-sm font-bold transition-colors line-clamp-1 group-hover:text-white">
											{item.anime?.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Manga List */}
				{manga.length > 0 && (
					<div className="">
						<p className="mb-3 text-sm font-bold tracking-widest text-gray-500 uppercase">
							Manga Appearances
						</p>

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							{manga.map((item, idx) => (
								<div
									key={idx}
									className="flex items-center gap-3 p-2 transition-all border bg-white/5 rounded-xl border-white/5 hover:border-jjk-accent/30 group"
								>
									<img
										src={item.manga.images.webp.image_url}
										alt={item.manga.title}
										className="object-cover w-12 h-16 transition-transform rounded-lg shadow-lg group-hover:scale-105"
									/>

									<div className="overflow-hidden">
										<p className="text-[10px] font-bold text-jjk-accent uppercase tracking-normal">
											{item.role}
										</p>
										<p className="text-sm font-bold transition-colors line-clamp-1 group-hover:text-white">
											{item.manga?.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
