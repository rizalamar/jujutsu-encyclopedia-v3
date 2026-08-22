import { ChevronDown, ChevronUp, Monitor, PlayCircle } from "lucide-react";
import { JJK_SHOWS } from "../../data/shows";
import type { JJKBaseData } from "../../@types/anime";
import { useState } from "react";

interface Props {
	data: JJKBaseData | null;
	loading: boolean;
	currentId: number;
	setCurrentId: (id: number) => void;
	onExplore: () => void;
}

export default function HomeHero({ data, loading, currentId, setCurrentId, onExplore }: Props) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const activeShow = JJK_SHOWS.find((show) => show.id === currentId);
	return (
		<section className="relative flex flex-col justify-center w-full h-screen overflow-hidden">
			{/* Dynamic Background */}
			<div className="absolute inset-0 z-0">
				<img
					src={activeShow?.image || ""}
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
							onClick={() => {
								setCurrentId(show.id);
								setIsExpanded(false);
							}}
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

							<div className="relative max-w-5xl mb-10 group">
								<div
									className={`relative transition-all duration-700 ease-in-out overflow-hidden ${
										isExpanded ? "max-h-125" : "max-h-32"
									}`}
								>
									<p
										className={`mb-1 text-base font-medium leading-relaxed text-gray-300 md:text-lg`}
									>
										{data.synopsis}
									</p>
									{!isExpanded && (
										<div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none bg-linear-to-t from-jjk-dark to-transparent" />
									)}
								</div>

								<button
									onClick={() => setIsExpanded(!isExpanded)}
									className="flex items-center gap-2 mb-4 text-sm font-black tracking-widest uppercase transition-colors cursor-pointer text-jjk-accent hover:text-white group/btn"
								>
									{isExpanded ? (
										<>
											Read Less{" "}
											<ChevronUp
												size={14}
												className="transition-transform group-hover/btn:-translate-y-1"
											/>
										</>
									) : (
										<>
											Read Full synopsis{" "}
											<ChevronDown
												size={14}
												className="transition-transform group-hover/btn:translate-y-1"
											/>
										</>
									)}
								</button>
							</div>

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
