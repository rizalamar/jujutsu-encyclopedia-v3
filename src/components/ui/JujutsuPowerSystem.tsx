import { useState } from "react";
import { powerSystemData } from "../../data/powerSystem";
import {
	Box,
	ChevronRight,
	Ghost,
	Heart,
	Link,
	Maximize,
	Shield,
	Sword,
	Zap,
	ZapOff,
	type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
	Zap,
	Heart,
	Shield,
	Maximize,
	ZapOff,
	Link,
	Sword,
	Box,
	Ghost,
};

export default function JujutsuPowerSystem() {
	const [activeId, setActiveId] = useState<string | null>(null);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{powerSystemData.map((item) => {
				const Icon = iconMap[item.icon];
				const isActive = activeId === item.id;

				return (
					<div
						key={item.id}
						className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 cursor-pointer ${
							isActive
								? "border-jjk-accent bg-jjk-blue/20 ring-1 ring-jjk-accent/30 shadow-[0_0_20px_rgba(0,210,255,0.15)]"
								: "border-white/10 bg-white/5 hover:border-white/20"
						} `}
						onClick={() => setActiveId(isActive ? null : item.id)}
					>
						<div className="p-8">
							{/* Icon & Title */}
							<div className="flex items-start justify-between mb-6">
								<div
									className={`p-4 rounded-2xl transition-all duration-500 ${
										isActive
											? "bg-jjk-accent text-jjk-dark scale-110"
											: "bg-white/5 text-jjk-accent group-hover:bg-jjk-accent/10"
									}`}
								>
									<Icon size={32} strokeWidth={1.5} />
								</div>
								<ChevronRight
									className={`transition-transform duration-500 ${
										isActive
											? "rotate-90 text-jjk-accent"
											: "text-gray-600 group-hover:text-gray-400"
									}`}
								/>
							</div>

							<h3 className="text-2xl font-bold mb-3 font-space tracking-tight transition-colors">
								{item.title}
							</h3>
							<p
								className={`text-sm leading-relaxed transition-colors ${
									isActive ? "text-gray-200" : "text-gray-400"
								}`}
							>
								{item.description}
							</p>

							<div
								className={`overflow-hidden transition-all duration-500 ease-in-out ${
									isActive
										? "max-h-125 opacity-100 mt-8 pt-8 border-t border-jjk-accent/20"
										: "max-h-0 opacity-0"
								}`}
							>
								<ul className="space-y-4">
									{item.details.map((detail, idx) => (
										<li key={idx} className="flex gap-3 text-sm text-gray-300">
											<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jjk-accent" />
											<span className="leading-relaxed">{detail}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Decoration for active state */}
						{isActive && (
							<div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-jjk-accent/10 blur-3xl" />
						)}
					</div>
				);
			})}
		</div>
	);
}
