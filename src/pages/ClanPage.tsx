import { useState } from "react";
import { Info, Scroll, Shield, User } from "lucide-react";
import { clanData } from "../data/clanData";
import CharacterThumbnail from "../components/grades/ui/CharacterThumbnail";

export default function ClanPage() {
	const [hoveredClan, setHoveredClan] = useState<string | null>(null);

	return (
		<main className="min-h-screen text-white bg-jjk-dark pt-12 flex flex-col">
			<section className="px-8 md:px-16 mb-12 bg-jjk-blue/5">
				<div className="max-w-4xl">
					<div className="flex items-center gap-3 mb-4 text-xs font-black tracking-wider uppercase text-jjk-accent">
						<Info /> Technical Archive
					</div>
					<h1 className="text-4xl md:text-6xl font-black font-space uppercase italic tracking-tighter mb-6 leading-none">
						The Big Three <span className="text-jjk-accent">Families</span>
					</h1>
					<p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
						In the Jujutsu world, the Big Three Families—
						<span className="text-white font-bold">Gojo</span>,{" "}
						<span className="text-white font-bold">Zenin</span>, and{" "}
						<span className="text-white font-bold">Kamo</span>
						—represent the pinnacle of political power and sorcery tradition. Possessing vast influence
						within the Jujutsu headquarters, these clans are characterized by their powerful{" "}
						<span className="text-jjk-accent">Inherited Techniques</span> and their historical role in
						maintaining (or destabilizing) the balance of the supernatural world.
					</p>
				</div>
			</section>

			<div className="flex flex-1 w-full overflow-hidden min-h-175">
				{clanData.map((clan) => (
					<div
						key={clan.id}
						className={`relative h-full clan-transition flex flex-col border-r border-white/10 last:border-0 overflow-hidden ${
							hoveredClan === clan.id ? "flex-2" : hoveredClan === null ? "flex-1" : "flex-[0.5]"
						}`}
						onMouseEnter={() => setHoveredClan(clan.id)}
						onMouseLeave={() => setHoveredClan(null)}
					>
						{/* Background Kanji */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
							<span
								className={`text-[40vh] font-black opacity-[0.03] text-center leading-none transition-all duration-1000 ${
									hoveredClan === clan.id ? "opacity-[0.07] scale-110" : ""
								}`}
							>
								{clan.kanji}
							</span>
						</div>

						{/* Gradient Overlay */}
						<div className={`absolute inset-0 bg-linear-to-b ${clan.color} opacity-40`} />

						{/* Content Container */}
						<div className="relative z-10 flex flex-col h-full p-8 md:p-12 overflow-y-auto no-scrollbar">
							{/* Header */}
							<div className="mb-12">
								<h2 className="text-5xl md:text-7xl font-black font-space uppercase tracking-tighter mb-4 leading-none">
									{clan.name}
								</h2>
								<p className="text-gray-400 font-bold text-lg">{clan.title}</p>
							</div>

							{/* Lore & Details */}
							<div
								className={`space-y-12 transition-all duration-700 ${
									hoveredClan === clan.id ? "opacity-100" : "opacity-0"
								}`}
							>
								<section className="max-w-xl">
									<h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 mb-4">
										<Scroll size={14} /> Clan History
									</h3>
									<p className="text-gray-300 leading-relaxed text-sm md:text-base">{clan.history}</p>
								</section>

								{/* Techiques */}
								<section className="max-w-xl">
									<h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 mb-4">
										<Shield size={14} /> Inherited Techniques
									</h3>
									<div className="grid gap-4">
										{clan.techniques.map((tech) => (
											<div
												key={tech.name}
												className="p-4 bg-jjk-dark/90 border border-white/10 rounded-xl"
											>
												<p className={`font-black uppercase text-sm mb-1 ${clan.accentColor}`}>
													{tech.name}
												</p>
												<p className="text-sm text-gray-400 leading-relaxed">
													{tech.description}
												</p>
											</div>
										))}
									</div>
								</section>

								{/* Member */}
								<section>
									<h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 mb-6">
										<User /> Clan Personel
									</h3>
									<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
										{clan.memberIds.map((id) => (
											<CharacterThumbnail key={id} id={id} />
										))}
									</div>
								</section>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
