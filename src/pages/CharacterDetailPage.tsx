import { useNavigate } from "react-router-dom";
import { useCharacterDetail } from "../hooks/useCharacterDetail";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import { cursedTechniques } from "../data/cursedTechniques";
import BackButton from "../components/ui/BackButton";
import { Contact, Info, Languages, Star, UserRoundSearch } from "lucide-react";
import TechniqueAccordion from "../components/ui/TechniqueAccordion";

export default function CharacterDetailPage() {
	const { id, characterDetail, loading, error } = useCharacterDetail();
	const navigate = useNavigate();

	const cursedTechniquesCharacter = cursedTechniques.filter((t) => t.characterId === Number(id));

	if (loading) return <Loading summon={"Unveiling Sorcerer Files..."} />;
	if (error || !characterDetail) return <Error error={"Failed to load sorcerer data..."} />;

	return (
		<main className="min-h-screen text-white bg-jjk-dark">
			<BackButton onClick={() => navigate(-1)} />

			{/* Hero Detail Section */}
			<section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
				<div className="absolute inset-0">
					<img
						src={characterDetail.images.webp.image_url}
						alt={characterDetail.name}
						className="object-cover object-[center_20%] w-full h-full opacity-50 blur-lg"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-jjk-dark to-transparent" />
				</div>

				<div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-8 pb-12 md:flex-row md:items-end md:justify-start md:px-16">
					<div className="w-48 overflow-hidden border-4 shadow-2xl md:w-64 aspect-3/4 rounded-2xl border-jjk-blue shadow-jjk-accent/20">
						<img
							src={characterDetail.images.webp.image_url}
							alt={characterDetail.name}
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="">
						<h2 className="mb-2 text-2xl text-jjk-accent font-permanent md:text-3xl opacity-80">
							{characterDetail.name_kanji}
						</h2>
						<h1 className="mb-4 text-5xl font-bold tracking-tighter md:text-7xl font-space ">
							{characterDetail.name}
						</h1>
						<div className="flex items-center justify-center gap-4 text-gray-400 md:justify-start">
							<span className="flex items-center gap-1 font-bold text-yellow-500">
								<Star size={18} fill="currentColor" />
								<p>{characterDetail.favorites.toLocaleString()}</p>
							</span>
							<span className="px-3 py-1 text-xs tracking-widest uppercase border rounded-full bg-white/5 border-white/10">
								MyAnimeList ID: {id}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section className="grid grid-cols-1 gap-12 px-8 py-12 md:px-16 lg:grid-cols-3">
				{/* Left: About & Voice Actor */}
				<div className="space-y-12 lg:col-span-2">
					<div className="">
						<h3 className="flex items-center gap-2 pl-4 mb-6 text-2xl font-bold border-l-4 border-jjk-purple">
							<Contact size={24} />
							<p>Biography</p>
						</h3>
						<p>{characterDetail.about || "No biography available for this character."}</p>
					</div>

					{/* Appearances */}
					<div className="">
						<h3 className="flex items-center gap-2 pl-4 mb-6 text-2xl font-bold border-l-4 border-jjk-purple">
							<UserRoundSearch size={24} />
							<p>Appearances</p>
						</h3>

						<div className="space-y-6">
							{/* Anime List */}
							<div className="">
								<p className="mb-3 text-sm font-bold tracking-widest text-gray-500 uppercase">
									Anime Series
								</p>
								<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
									{characterDetail.anime.map((item, idx) => (
										<div
											key={idx}
											className="flex items-center gap-3 p-2 transition-all border bg-white/5 rounded-xl border-white/5 hover:border-jjk-accent/30 group"
										>
											<img
												src={item.anime.images.webp.image_url}
												alt={item.anime.title}
												className="object-cover w-12 h-16 transition-transform rounded-lg shadow-lg group-hover:scale-105"
											/>

											<div className="overflow-hidden">
												<p className="text-[10px] font-bold text-jjk-accent uppercase tracking-normal">
													{item.role}
												</p>
												<p className="text-sm font-medium transition-colors line-clamp-1 group-hover:text-white">
													{item.anime?.title}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Manga List */}
							{characterDetail.manga.length > 0 && (
								<div className="">
									<p className="mb-3 text-sm font-bold tracking-widest text-gray-500 uppercase">
										Manga Appearances
									</p>

									<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
										{characterDetail.manga.map((item, idx) => (
											<div
												key={idx}
												className="flex items-center gap-3 p-2 transition-all border bg-white/5 rounded-xl border-white/5 hover:border-jjk-accent/30 group"
											>
												<img
													src={item.manga.images.webp.image_url}
													alt={item.manga.title}
													className="object-cover w-12 h-16 transition-transform rounded-lg shadow-lg group-hover:scale-105"
												/>

												<div className="overflow-hidden">
													<p className="text-[10px] font-bold text-jjk-accent uppercase tracking-normal">
														{item.role}
													</p>
													<p className="text-sm font-medium transition-colors line-clamp-1 group-hover:text-white">
														{item.manga?.title}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Voice actors */}
					<div className="">
						<h3 className="flex items-center gap-2 pl-4 mb-6 text-2xl font-bold border-l-4 border-jjk-purple">
							<Languages size={24} />
							<p>Voice Actors</p>
						</h3>

						<div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
							{characterDetail.voices.map((voice, index) => (
								<div
									key={index}
									className="flex items-center gap-4 p-4 border bg-white/5 rounded-xl border-white/5"
								>
									<img
										src={voice.person.images.jpg.image_url}
										alt={voice.person.name}
										className="object-cover w-16 h-20"
									/>
									<div className="">
										<p className="font-bold">{voice.person.name}</p>
										<p className="text-xs text-jjk-purple">{voice.language}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Right: Cursed Techniques */}
				<div className="space-y-8">
					<h3 className="flex items-center gap-2 pl-4 text-2xl font-bold tracking-tighter uppercase border-l-4 border-red-500">
						<Info size={24} />
						<p>Power System</p>
					</h3>

					{cursedTechniquesCharacter.length > 0 ? (
						<TechniqueAccordion powers={cursedTechniquesCharacter} />
					) : (
						<div className="p-6 text-center border bg-red-500/10 border-red-500/20 rounded-2xl">
							<p className="mb-2 italic text-gray-400">Classified Information</p>
							<p className="text-sm">
								Technique data for this individual is currentlu restricted by Jujutsu High authorities.
							</p>
						</div>
					)}
				</div>
			</section>
		</main>
	);
}
