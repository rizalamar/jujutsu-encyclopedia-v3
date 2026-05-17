import { Bookmark, ExternalLink, Ghost, Landmark, ShieldUser, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
	const navLinks = [
		{ name: "Characters", path: "/characters", icon: <Users size={16} /> },
		{ name: "Grades", path: "/grades", icon: <Landmark size={16} /> },
		{ name: "Clans", path: "/clans", icon: <ShieldUser size={16} /> },
		{ name: "Favorites", path: "/favorites", icon: <Bookmark size={16} /> },
	];

	const externalResources = [
		{ name: "Official JJK Site", url: "https://jujutsukaisen.jp/" },
		{ name: "Manga Plus", url: "https://mangaplus.shueisha.co.jp/titles/100034" },
		{ name: "JJK Wiki Fandom", url: "https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen_Wiki" },
	];
	return (
		<footer className="relative">
			<div className="aboslute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-jjk-accent to-transparent" />

			<div className="px-6 py-12 mx-auto max-w-7xl md:px-12">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
					{/* Branding */}
					<div className="space-y-4">
						<Link to={"/"} className="flex items-center gap-3 group">
							<div className="rounded-lg bg-jjk-accent p-1.5 transition-transform group-hover:rotate-12">
								<Ghost size={20} className="text-jjk-dark" />
							</div>
							<span className="font-permanent text-white tracking-wider text-xl">JJK.Wiki</span>
						</Link>

						<p className="max-w-xs text-sm leading-relaxed text-gray-400">
							Exploring the depths of Cursed Energy and Sorcery. Your ultimate source for Jujutsu Kaisen
							lore.
						</p>
					</div>

					{/* Quick Navigation */}
					<div className="">
						<h3 className="mb-6 text-sm font-bold tracking-widest text-white uppercase font-space">
							Navigation
						</h3>
						<ul className="space-y-3">
							{navLinks.map((link) => (
								<li key={link.name} className="">
									<Link
										to={link.path}
										className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-jjk-accent"
									>
										{link.icon} {link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* External Resources */}
					<div className="">
						<h3 className="mb-6 text-sm font-bold tracking-widest text-white uppercase font-space">
							Resources
						</h3>
						<ul className="space-y-3">
							{externalResources.map((resource) => (
								<li key={resource.name}>
									<a
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-jjk-accent"
									>
										<ExternalLink size={14} />
										<p>{resource.name}</p>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Credits */}
					<div className="space-y-6">
						<div className="">
							<h3 className="mb-4 text-sm font-bold tracking-widest text-white uppercase font-space">
								Connect
							</h3>

							<div className="flex gap-4">
								<a
									href="https://github.com/rizalamar"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 py-1 px-2 transition-all rounded-full bg-white/5 hover:bg-jjk-accent/20 hover:text-jjk-accent"
								>
									Github
								</a>
							</div>
						</div>

						<div className="space-y-2">
							<p className="text-xs text-gray-500">
								Data provided by <span className=" text-jjk-accent/80">Jikan API</span>
							</p>
							<p className="text-[10px] leading-tight text-gray-600 italic">
								Disclaimer: This is a fan-made project. Jujutsu Kaisen is owned by Gege Akutami and
								SHUEISHA.
							</p>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="pt-8 mt-12 border-t border-white/5">
					<p className="text-xs text-center text-gray-500">
						&copy; {new Date().getFullYear()} JJK.Wiki Encyclopedia. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
