import { Briefcase, Heart, Info, Star, Zap } from "lucide-react";
import type { CharacterDetail } from "../../@types/character.types";
import type { CursedPower } from "../../@types/cursedPower";

interface Props {
	id: string;
	character: CharacterDetail;
	staticData?: CursedPower;
	isFavorite: boolean;
	onFavoriteToggle: () => void;
}

export default function CharacterHero({ id, character, staticData, isFavorite, onFavoriteToggle }: Props) {
	return (
		<section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
			{/* Background Blur */}
			<div className="absolute inset-0">
				<img
					src={character.images.webp.image_url}
					alt={character.name}
					className="object-cover object-[center_20%] w-full h-full opacity-20 blur-3xl"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-jjk-dark via-jjk-dark/60 to-transparent" />
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-8 pb-12 md:flex-row md:items-end md:justify-start md:px-16">
				{/* Potrait */}
				<div className="w-48 overflow-hidden border-4 shadow-2xl md:w-64 aspect-3/4 rounded-2xl border-jjk-blue shadow-jjk-accent/20 group">
					<img
						src={character.images.webp.image_url}
						alt={character.name}
						className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
					/>
				</div>

				{/* Identity & Stats Grid */}
				<div className="text-center md:text-left flex-1">
					<div className="flex items-center justify-center md:justify-start gap-4 mb-4">
						<h2 className="text-2xl text-jjk-accent font-permanent md:text-3xl opacity-80">
							{character.name_kanji}
						</h2>
						<button
							onClick={onFavoriteToggle}
							className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
								isFavorite
									? "bg-red-500 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] text-white"
									: "bg-white/5 border-white/10 text-gray-400 hover:border-red-500/50 hover:text-red-500"
							}`}
						>
							<Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
						</button>
					</div>
					<h1 className="mb-4 text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl font-space leading-none">
						{character.name}
					</h1>

					{/* Quick Stats Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
						<div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
							<p className="text-[10px] text-gray-300 uppercase font-bold mb-1 flex items-center gap-1 justify-center md:justify-start">
								<Zap size={10} /> Status
							</p>
							<p className="font-bold text-sm">{staticData?.status || "Unknown"}</p>
						</div>
						<div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
							<p className="text-[10px] text-gray-300 uppercase font-bold mb-1 flex items-center gap-1 justify-center md:justify-start">
								<Briefcase size={10} /> Grade
							</p>
							<p className="font-bold text-sm">{staticData?.grade || "Unknown"}</p>
						</div>
						<div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
							<p className="text-[10px] text-gray-300 uppercase font-bold mb-1 flex items-center gap-1 justify-center md:justify-start">
								<Star size={10} /> Fans
							</p>
							<p className="font-bold text-sm">{character.favorites}</p>
						</div>
						<div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
							<p className="text-[10px] text-gray-300 uppercase font-bold mb-1 flex items-center gap-1 justify-center md:justify-start">
								<Info size={10} /> MAL ID
							</p>
							<p className="font-bold text-sm text-jjk-accent">#{id}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
