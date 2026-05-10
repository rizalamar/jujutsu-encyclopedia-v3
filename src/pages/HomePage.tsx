import { Award, Calendar, Hash, Monitor, PlayCircle, Star, TrendingUp, Users } from "lucide-react";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loading";
import { useAnimeJJK } from "../hooks/useAnimeJJK";
import JujutsuPowerSystem from "../components/ui/JujutsuPowerSystem";
import { useNavigate } from "react-router-dom";
import { JJK_SHOWS } from "../data/shows";

export default function Home() {
	const { data, loading, error, currentId, setCurrentId } = useAnimeJJK();
	const navigate = useNavigate();

	const activeShow = JJK_SHOWS.find((show) => show.id === currentId);

	if (loading) {
		return <Loading summon="Loading Cursed Energy..." />;
	}

	if (error || !data) {
		return <Error error={error} />;
	}

	return (
		<div className="min-h-screen text-white bg-jjk-dark">
			{/* HERO SECTION */}
			<section className="relative flex flex-col justify-center w-full h-screen overflow-hidden">
				{/* Dynamic Background */}
				<div className="absolute inset-0 z-0">
					<img
						src={activeShow.image}
						alt="Background"
						className="w-full h-full object-cover object-center transition-all duration-300 brightness-[0.3]"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-jjk-dark via-jjk-dark/40 to-transparent" />
					<div className="absolute inset-0 bg-linear-to-t from-jjk-dark via-transparent to-transparent" />
				</div>

				<div className="relative z-20 max-w-5xl px-8 md:px-16">
					{/* 1. Chapter Selector (Tabs) */}
					<div className="flex flex-wrap gap-3 mb-8">
						{JJK_SHOWS.map((show) => (
							<button
								key={show.id}
								onClick={() => setCurrentId(show.id)}
								className={`px-5 py-2 rounded-lg text-[10px] font-black tracking-[0.2em] uppercase transition-all border cursor-pointer ${
									currentId === show.id
										? "bg-jjk-accent border-jjk-accent text-jjk-dark shadow-[0_0_15px_rgba(0,210,255,0.4)]"
										: "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"
								}`}
							>
								{show.title}
							</button>
						))}
					</div>

					{loading ? (
						<div className="space-y-6 animate-pulse">
							<div className="w-3/4 h-20 bg-white/10 rounded-2xl" />
							<div className="w-full h-32 bg-white/10 rounded-2xl" />
						</div>
					) : (
						data && (
							<div className="duration-700 animate-in fade-in slide-in-from-left-8">
								<div className="flex items-center gap-4 mb-4 text-xs font-bold tracking-[0.3em] uppercase text-jjk-accent">
									<span className="flex items-center gap-2">
										<Monitor size={14} /> {data.type}
									</span>
									<span className="w-1 h-1 rounded-full bg-white/30" />
									<span>{data.status}</span>
								</div>

								<h1 className="mb-6 text-6xl md:text-8xl font-black tracking-tighter font-space uppercase italic leading-[0.9]">
									{data.title_english || data.title}
								</h1>

								<p className="max-w-3xl mb-10 text-lg font-medium leading-relaxed text-gray-300 md:text-xl line-clamp-3">
									{data.synopsis}
								</p>

								<button
									onClick={() => navigate(`/characters?animeId=${currentId}`)}
									className="flex items-center gap-4 px-10 py-5 text-sm font-black tracking-widest uppercase transition-all bg-white group text-jjk-dark rounded-xl hover:bg-jjk-accent hover:scale-105"
								>
									<PlayCircle size={24} />
									<span>Explore Characters</span>
								</button>
							</div>
						)
					)}
				</div>
			</section>
			{/* 2. FRANCHISE DOSSIER (Stats) */}
			{!loading && data && (
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
								<StatRow
									icon={<Star className="text-yellow-500" />}
									label="MAL Score"
									value={data.score}
								/>
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
			)}{" "}
			<section className="px-8 py-20 md:px-16 bg-jjk-blue/5">
				<div className="mb-12">
					<h2 className="mb-2 text-3xl italic font-bold tracking-tighter uppercase font-space">
						The <span className="text-jjk-accent">Chronicles</span>
					</h2>
					<p className="text-gray-400">
						Select a chapter to unveil its specific characters and cursed history.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{JJK_SHOWS.map((show) => (
						<div
							key={show.id}
							onClick={() => navigate(`/characters?animeId=${show.id}`)}
							className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-jjk-dark transition-all duration-300 ${show.accent} hover:-translate-y-2`}
						>
							<div className="overflow-hidden aspect-3/4">
								<img
									src={show.image}
									alt={show.title}
									className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-2 mb-1 text-[10px] font-bold text-jjk-accent/60 uppercase">
									<Calendar size={10} /> {show.year} | <Monitor size={10} /> {show.type}
								</div>
								<h3 className="text-lg font-bold transition-colors group-hover:text-jjk-accent">
									{show.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="px-8 py-16 md:px-16 bg-jjk-dark/50">
				<div className="mb-12">
					<h2 className="pl-6 mb-2 text-3xl font-bold tracking-tighter border-l-8 font-space border-jjk-accent">
						System of Power
					</h2>
					<p className="text-gray-400">
						A comprehensive guide to the mystical laws, energy sources, and deadly techiniques that govern
						the world of Jujutsu.
					</p>
				</div>

				<JujutsuPowerSystem />
			</section>
		</div>
	);
}

// Sub-components
function DossierItem({ label, value }: { label: string; value: string | number }) {
	return (
		<div className="space-y-1">
			<p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</p>
			<p className="text-base font-bold text-gray-200">{value}</p>
		</div>
	);
}

function StatRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-4">
				<div className="p-2 rounded-lg bg-white/5">{icon}</div>
				<span className="text-xs font-black tracking-widest text-gray-500 uppercase">{label}</span>
			</div>
			<span className="text-3xl italic font-black font-space">{value}</span>
		</div>
	);
}
