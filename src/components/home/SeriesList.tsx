import { Calendar, Monitor } from "lucide-react";
import { JJK_SHOWS } from "../../data/shows";

interface Props {
	onExplore: (id: number) => void;
}

export default function SeriesList({ onExplore }: Props) {
	return (
		<section className="px-8 py-20 md:px-16 bg-jjk-blue/5">
			<div className="mb-12">
				<h2 className="mb-2 text-3xl italic font-bold tracking-tighter uppercase font-space">
					The <span className="text-jjk-accent">Chronicles</span>
				</h2>
				<p className="text-gray-400">Select a chapter to unveil its specific characters and cursed history.</p>
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{JJK_SHOWS.map((show) => (
					<div
						key={show.id}
						onClick={() => onExplore(show.id)}
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
	);
}
