import { Ghost, Home, Users } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	const navLinks = [
		{ name: "Home", path: "/", icon: <Home size={18} /> },
		{ name: "Characters", path: "/characters", icon: <Users size={18} /> },
	];
	return (
		<nav className="fixed top-0 z-50 w-full border-b glass-effect border-white/10">
			<div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl md:px-12">
				{/* Logo */}
				<Link to={"/"} className="flex items-center gap-3 cursor-pointer group">
					<div className="rounded-lg bg-jjk-accent p-1.5 transition-transform group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.5)] ">
						<Ghost size={24} className="text-jjk-dark" />
					</div>
					<span className="text-2xl tracking-wider text-white font-permanent">JJK.Wiki</span>
				</Link>

				{/* Nav Links */}
				<div className="flex items-center gap-6 md:gap-10">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							className={`flex items-center gap-2 text-sm font-bold tracking-wide transition-all hover:text-jjk-accent ${
								location.pathname === link.path ? "text-jjk-accent" : "text-gray-400"
							}`}
							to={link.path}
						>
							{link.icon} <span className="hidden uppercase sm:inline">{link.name}</span>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
