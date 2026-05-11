import { useState } from "react";
import type { GradeLore } from "../@types/gradingLore.types";
import { gradingLoreData } from "../data/gradingLoreData";
import { ShieldAlert, User, Zap } from "lucide-react";
import CharacterThumbnail from "../components/grades/ui/CharacterThumbnail";

export default function GradingPage() {
	const [activeGrade, setActiveGrade] = useState<GradeLore>(gradingLoreData[0]);

	return (
		<main className="flex min-h-screen pt-24 pb-20 text-white bg-jjk-dark">
			{/* Left: Grade */}
			<div className="fixed bottom-0 left-0 z-10 flex flex-col items-center w-24 gap-8 py-10 border-r md:w-32 top-24 bg-jjk-dark border-white/5">
				<div className="absolute top-0 bottom-0 w-px -translate-x-1/2 bg-white/10 left-1/2" />

				{gradingLoreData.map((item) => (
					<button
						key={item.grade}
						onClick={() => setActiveGrade(item)}
						className={`relative z-10 h-12 w-12 rounded-full border-2 transition-all duration-500 flex items-center justify-center font-black text-xs cursor-pointer ${
							activeGrade.grade === item.grade
								? "bg-white border-white text-jjk-dark shadow-[0_0_20px_white]"
								: "bg-jjk-dark border-white/20 text-white/40 hover:border-white/50"
						}`}
					>
						{item.grade === "Special Grade" ? "S" : item.grade.split(" ")[1]}
					</button>
				))}
			</div>

			{/* Right: Tactical Display */}
			<div
				key={activeGrade.grade}
				className="flex-1 px-8 ml-24 duration-700 md:ml-32 md:px-16 animate-in fade-in slide-in-right-10"
			>
				{/* Grader Header */}
				<div className="mb-12">
					<div className={`text-xs font-black tracking-[0.2em] uppercase mb-2 ${activeGrade.color}`}>
						Rank Classification
					</div>
					<h1 className="mb-6 text-6xl italic font-black leading-none tracking-tighter uppercase md:text-8xl font-space">
						{activeGrade.grade}
					</h1>
					<h2 className="mb-8 text-2xl italic font-bold text-gray-400">"{activeGrade.title}"</h2>
				</div>

				{/* Information Grid */}
				<div className="grid grid-cols-1 gap-12 mb-20 gc1 md:grid-cols-2">
					<div className="space-y-6">
						<div className="p-6 border-l-4 bg-white/5 border-white/20 rounded-r-2xl">
							<p className="flex items-center gap-2 mb-3 text-sm font-bold tracking-widest text-gray-500 uppercase">
								<ShieldAlert size={16} /> Definition
							</p>
							<p className="text-lg leading-relaxed text-gray-300">{activeGrade.description}</p>
						</div>
					</div>

					<div className="space-y-6">
						<div className="p-6 border-l-4 bg-jjk-blue/50 border-jjk-accent/50 rounded-r-2xl">
							<p className="flex items-center gap-2 mb-3 text-sm font-bold tracking-widest uppercase text-jjk-accent">
								<Zap size={16} /> Combat Analogy
							</p>
							<p className="text-lg leading-relaxed text-gray-300">{activeGrade.analogy}</p>
						</div>
					</div>
				</div>

				{/* Personel Section */}
				<div className="">
					<div className="flex items-center justify-between pb-4 mb-8 border-b border-white/5">
						<h2 className="text-sm font-black tracking-[0.3em] uppercase text-gray-500 flex items-center gap-2">
							<User size={16} /> Active Personel
						</h2>
						<span className="text-[10px] font-bold text-gray-500 uppercase">*Among them are...</span>
					</div>

					<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						{activeGrade.iconicIds.map((id) => (
							<CharacterThumbnail key={id} id={id} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
