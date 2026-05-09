import { useNavigate } from "react-router-dom";
import { Calendar, Monitor, PlayCircle } from "lucide-react";
import { JJK_SHOWS } from "../data/shows";

export default function ShowPage() {
	const navigate = useNavigate();

	return (
		<main className="min-h-screen px-8 py-12 pt-24 text-white bg-jjk-dark md:px-16">
			<div className="mb-12">
				<h1 className="mb-4 text-5xl tracking-wider text-white font-permanent">
					Jujutsu Kaisen <span className="text-jjk-accent">Chronicles</span>
				</h1>
				<p className="max-w-2xl text-gray-400">
					Choose a series or movie to explore its specific case of sorcerers and cursed spirits.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{JJK_SHOWS.map((show) => (
					<div
						key={show.id}
						className={`group overflow-hidden rounded-3xl border bg-jjk-blue/20 transition-all duration-300 ${show.accent} hover:shadow-2xl`}
					>
						{/* Poster Image */}
						<div className="relative w-full overflow-hidden aspect-3/4">
							<img
								src={show.image}
								alt={show.title}
								className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-jjk-dark via-jjk-dark/20 to-transparent" />
						</div>

						{/* Content */}
						<div className="p-6">
							<div className="flex items-center gap-3 mb-3 text-xs font-bold tracking-widest uppercase text-jjk-accent/80">
								<span className="flex items-center gap-1">
									<Calendar size={14} />
									<p>{show.year}</p>
								</span>
								<span className="flex items-center gap-1">
									<Monitor size={14} />
									<p>{show.type}</p>
								</span>
							</div>

							<h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-jjk-accent">
								{show.title}
							</h3>
							<p className="mb-6 text-sm text-gray-400 line-clamp-2">{show.description}</p>

							<button
								onClick={() =>
									navigate(`/characters?animeId=${show.id}`, {
										state: { fromShow: show.title },
									})
								}
								className="flex items-center justify-center w-full gap-2 py-3 font-bold transition-all border rounded-xl bg-white/5 border-white/10 hover:bg-white hover:text-jjk-dark"
							>
								<PlayCircle size={20} />
								<p>Explore Characters</p>
							</button>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
