import { Award, Hash, Star, TrendingUp, Users } from "lucide-react";
import type { JJKData } from "../../@types/anime";
import DossierItem from "./ui/DossierItem";
import StatRow from "./ui/StatRow";

interface Props {
	data: JJKData | null;
	loading: boolean;
}

export default function FranchiseDossier({ data, loading }: Props) {
	if (loading || !data) return null;

	return (
		<section className="relative px-8 py-24 border-t md:px-16 border-white/50">
			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-jjk-dark border border-white/50 rounded-full text-sm font-black tracking-[0.3em] text-white
   uppercase"
			>
				Anime Information
			</div>

			<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
				{/* Info List */}

				<div className="space-y-12 lg:col-span-7">
					<div className="pt-10 border-t border-white/50">
						<p className="text-[10px] font-black text-jjk-accent uppercase tracking-[0.3em] mb-4">
							Classification Tags
						</p>
						<div className="flex flex-wrap gap-2">
							{data.genres.map((g) => (
								<span
									key={g.mal_id}
									className="px-4 py-2 bg-jjk-blue border border-jjk-blue/20 rounded-md text-[11px] font-bold text-white uppercase"
								>
									{g.name}
								</span>
							))}
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
						<DossierItem label="Studios" value="Studio MAPPA" />
						<DossierItem label="Source" value={data.source} />
						<DossierItem label="Rating" value={data.rating} />
						<DossierItem label="Release" value={`${data.season || ""} ${data.year || ""}`} />
						<DossierItem label="Episodes" value={data.episodes || "TBA"} />
						<DossierItem label="Duration" value={data.duration} />
					</div>
				</div>

				{/* Big Stats */}
				<div className="relative flex flex-col justify-between p-10 overflow-hidden border lg:col-span-5 bg-white/2 border-white/5 rounded-3xl">
					<div className="absolute top-0 right-0 p-4 opacity-[0.03]">
						<Award size={200} />
					</div>

					<div className="space-y-10">
						<StatRow icon={<Star className="text-yellow-500" />} label="MAL Score" value={data.score} />
						<StatRow
							icon={<Hash className="text-jjk-accent" />}
							label="Global Rank"
							value={`#${data.rank}`}
						/>
						<StatRow
							icon={<TrendingUp className="text-green-500" />}
							label="Popularity"
							value={`#${data.popularity}`}
						/>
						<StatRow
							icon={<Users className="text-purple-500" />}
							label="Members"
							value={(data.members / 1000000).toFixed(2) + "M"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
