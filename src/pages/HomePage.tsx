import { Calendar, Monitor, PlayCircle, Star } from "lucide-react";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loading";
import { useAnimeJJK } from "../hooks/useAnimeJJK";
import heroImage from "../assets/poster.jpg";
import JujutsuPowerSystem from "../components/ui/JujutsuPowerSystem";
import { useNavigate } from "react-router-dom";
import { JJK_SHOWS } from "../data/shows";

export default function Home() {
	const { data, loading, error } = useAnimeJJK();
	const navigate = useNavigate();

	if (loading) {
		return <Loading summon="Loading Cursed Energy..." />;
	}

	if (error || !data) {
		return <Error error={error} />;
	}

	return (
		<div className="min-h-screen text-white bg-jjk-dark">
			{/* General Hero Section */}
			<section className="relative h-[85vh] w-full overflow-hidden flex flex-col md:flex-row">
				{/* Left Side: Content */}
				<div className="relative z-20 flex flex-col justify-center h-full px-8 py-12 md:w-1/2 md:px-16 lg:w-2/5 bg-jjk-dark">
					<div className="flex items-center gap-4 mb-4 text-xs font-medium tracking-widest uppercase text-jjk-accent/80">
						<span>Supernatural | Action | Dark Fantasy</span>

						<span className="rounded border border-jjk-accent/30 px-2 py-0.5">Franchise Portal</span>
					</div>

					<h1 className="mb-4 text-5xl font-bold tracking-tight font-space md:text-6xl lg:text-7xl">
						{data.title_english || data.title}
					</h1>

					<div className="flex items-center gap-2 mb-6">
						<div className="flex text-yellow-500">
							{[...Array(5)].map((_, i) => (
								<Star key={i} size={16} fill="currentColor" />
							))}
						</div>
						<span className="ml-2 font-bold text-jjk-accent">World's Top Rated Series</span>
					</div>

					<p className="mb-10 text-base leading-relaxed text-gray-400 line-clamp-4">
						In a world where negative human emotions manifest as deadly Cursed Spirits, secret Jujutsu
						Sorcerers stand as the only line of defense. Follow the journey of sorcerers as they navigate a
						world of domain expansions, cursed techniques, and the search for Sukuna's fingers.
					</p>

					<div className="flex flex-wrap gap-4">
						<button
							onClick={() => navigate("/shows")}
							className="flex items-center gap-2 px-8 py-3 font-bold transition-all rounded-full cursor-pointer bg-jjk-accent text-jjk-dark hover:scale-105 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]"
						>
							<PlayCircle size={23} />
							<span>Explore Chronicles</span>
						</button>
					</div>
				</div>

				{/* Right Side: Image with focused positioning */}
				<div className="relative h-[50vh] md:h-full md:w-1/2 lg:w-3/5 overflow-hidden">
					<img
						src={heroImage}
						alt={data.title}
						className="object-cover w-full h-full object-[center_5%] transition-transform duration-1000 hover:scale-110"
					/>
					{/* Gradient Masks */}
					<div className="absolute inset-0 bg-linear-to-t from-jjk-dark via-jjk-dark/20 to-transparent" />
					<div className="absolute inset-0 bg-linear-to-r from-jjk-dark via-jjk-dark/20 to-transparent" />
				</div>
			</section>

			{/* Cinematic Franchise Stats */}
			<section className="relative z-30 px-8 -mt-10 md:px-16">
				<div className="py-10 bg-jjk-dark/80 backdrop-blur-xl border-y border-white/5">
					<div className="flex flex-wrap justify-between mx-auto max-w-7xl gap-y-10">
						{/* Stat Item 1 */}
						<div className="flex flex-col items-center justify-center px-6 min-w-[150px] border-r border-white/5 last:border-0 flex-1">
							<span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-2">
								Global Rank
							</span>
							<div className="relative">
								<h2 className="text-4xl font-black md:text-5xl text-jjk-accent font-space">
									#{data.rank}
								</h2>
								<div className="absolute rounded-full -inset-2 bg-jjk-accent/20 blur-xl -z-10" />
							</div>
						</div>

						{/* Stat Item 2 */}
						<div className="flex flex-col items-center justify-center px-6 min-w-[150px] border-r border-white/5 last:border-0 flex-1">
							<span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-2">
								MAL Score
							</span>
							<h2 className="text-4xl font-black text-white md:text-5xl font-space">{data.score}</h2>
						</div>

						{/* Stat Item 3 */}
						<div className="flex flex-col items-center justify-center px-6 min-w-[150px] border-r border-white/5 last:border-0 flex-1">
							<span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-2">
								Episodes
							</span>
							<h2 className="text-4xl font-black text-white md:text-5xl font-space">
								47<span className="text-jjk-accent">+</span>
							</h2>
						</div>

						{/* Stat Item 4 */}
						<div className="flex flex-col items-center justify-center px-6 min-w-[150px] border-r border-white/5 last:border-0 flex-1">
							<span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-2">
								Members
							</span>
							<h2 className="text-4xl font-black text-white md:text-5xl font-space">
								{(data.members / 1000000).toFixed(1)}
								<span className="ml-1 text-sm text-gray-500">M</span>
							</h2>
						</div>

						{/* Stat Item 5 */}
						<div className="flex flex-col items-center justify-center px-6 min-w-[150px] last:border-0 flex-1">
							<span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-2">
								Studio
							</span>
							<h2 className="text-4xl font-black tracking-tighter text-white md:text-5xl font-space">
								MAPPA
							</h2>
						</div>
					</div>
				</div>
			</section>

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
							onClick={() => navigate(`/characters/animeId=${show.id}`)}
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
