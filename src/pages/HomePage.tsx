import { Info, Play, Plus, Star } from "lucide-react";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loading";
import { useAnimeJJK } from "../hooks/useAnimeJJK";
import heroImage from "../assets/poster.jpg";

export default function Home() {
	const { data, loading, error } = useAnimeJJK();

	if (loading) {
		return <Loading />;
	}

	if (error || !data) {
		return <Error error={error} />;
	}

	return (
		<div className="min-h-screen text-white bg-jjk-dark">
			{/* Hero Section */}
			<section className="relative h-[85vh] w-full overflow-hidden flex flex-col md:flex-row">
				{/* Left Side: Content */}
				<div className="relative z-20 flex flex-col justify-center h-full px-8 py-12 md:w-1/2 md:px-16 lg:w-2/5 bg-jjk-dark">
					<div className="flex items-center gap-4 mb-4 text-xs font-medium tracking-widest uppercase text-jjk-accent/80">
						<span>
							{data.season} | {data.year}
						</span>
						<span className="rounded border border-jjk-accent/30 px-2 py-0.5">{data.rating}</span>
					</div>

					<h1 className="mb-4 text-5xl font-bold tracking-tight font-space md:text-6xl lg:text-7xl">
						{data.title_english || data.title}
					</h1>

					<div className="flex items-center gap-2 mb-6">
						<div className="flex text-yellow-500">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									size={16}
									fill={i < Math.floor(data.score / 2) ? "currentColor" : "none"}
								/>
							))}
						</div>
						<span className="ml-2 font-bold text-jjk-accent">{data.score}</span>
						<span className="text-sm text-gray-500">({data.scored_by.toLocaleString()})</span>
					</div>

					<div className="flex flex-wrap gap-2 mb-8">
						{data.genres.map((genre) => (
							<span
								key={genre.mal_id}
								className="px-3 py-1 text-xs text-gray-300 border rounded-full bg-jjk-blue border-white/5"
							>
								{genre.name}
							</span>
						))}
					</div>

					<p className="mb-10 text-base leading-relaxed text-gray-400 line-clamp-4">{data.synopsis}</p>

					<div className="flex flex-wrap gap-4">
						<button className="flex items-center gap-2 px-8 py-3 font-bold transition-all rounded-full cursor-pointer bg-jjk-accent text-jjk-dark hover:scale-105 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]">
							<Play size={20} fill="currentColor" />
							<span>WATCH NOW</span>
						</button>

						<button className="flex items-center gap-2 px-6 py-3 font-bold transition-all border rounded-full cursor-pointer bg-white/5 border-white/10 hover:bg-white/10">
							<Plus size={20} />
							<span>SAVE FOR LATER</span>
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

			<section className="px-8 py-16 md:px-16">
				<h2 className="flex items-center gap-2 mb-8 text-2xl font-bold text-jjk-accent/50">
					<Info size={24} /> Techincal Details
				</h2>

				<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
					<div className="p-6 glass-effect rounded-2xl">
						<p className="mb-1 text-sm text-gray-400">Rank</p>
						<p className="text-2xl font-bold">#{data.rank}</p>
					</div>
					<div className="p-6 glass-effect rounded-2xl">
						<p className="mb-1 text-sm text-gray-400">Popularity</p>
						<p className="text-2xl font-bold">#{data.popularity}</p>
					</div>
					<div className="p-6 glass-effect rounded-2xl">
						<p className="mb-1 text-sm text-gray-400">Episodes</p>
						<p className="text-2xl font-bold">{data.episodes}</p>
					</div>
					<div className="p-6 glass-effect rounded-2xl">
						<p className="mb-1 text-sm text-gray-400">Status</p>
						<p className="text-2xl font-bold">{data.status}</p>
					</div>
					<div className="p-6 glass-effect rounded-2xl">
						<p className="mb-1 text-sm text-gray-400">Source</p>
						<p className="text-2xl font-bold">{data.source}</p>
					</div>
				</div>
			</section>
		</div>
	);
}
