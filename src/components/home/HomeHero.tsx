import { Monitor, PlayCircle } from "lucide-react";
import { JJK_SHOWS } from "../../data/shows";
import type { JJKData } from "../../@types/anime";

interface Props {
	data: JJKData | null;
	loading: boolean;
	currentId: number;
	setCurrentId: (id: number) => void;
	onExplore: () => void;
}

export default function HomeHero({ data, loading, currentId, setCurrentId, onExplore }: Props) {
	const activeShow = JJK_SHOWS.find((show) => show.id === currentId);
	return (
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
								onClick={onExplore}
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
	);
}
