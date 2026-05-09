import { useState } from "react";
import { cursedTechniques } from "../../data/cursedTechniques";
import { ChevronDown, Shield, Target, Zap } from "lucide-react";

interface Props {
	powers: typeof cursedTechniques;
}

export default function TechniqueAccordion({ powers }: Props) {
	const [openId, setOpenId] = useState<string | null>(null);

	const toggle = (id: string) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<div className="space-y-4">
			{powers.map((power) => (
				<div
					key={power.id}
					className={`overflow-hidden rounded-xl border transition-all duration-300 ${
						openId === power.id
							? "border-jjk-accent/50 bg-jjk-blue/30 shadow-[0_0_15px_rgba(0,210,255,0.1"
							: "border-white/10 bg-white/5 hover:border-white/20"
					}`}
				>
					{/* Header */}
					<button
						onClick={() => toggle(power.id)}
						className="flex w-full items-center justify-between p-5 text-left"
					>
						<div className="flex items-center gap-4">
							<div
								className={`rounded-full p-2 ${
									openId === power.id ? "bg-jjk-accent text-jjk-dark" : "bg-jjk-blue text-jjk-accent"
								}`}
							>
								<Zap size={20} />
							</div>
							<div className="">
								<h3 className="font-bold text-lg">{power.techniqueName}</h3>
								<p className="text-sm text-gray-400">
									{power.ownerName} • {power.type}
								</p>
							</div>
						</div>

						<ChevronDown
							className={`transition-transform duration-300 ${
								openId === power.id ? "rotate-180 text-jjk-accent" : "text-gray-500"
							}`}
						/>
					</button>

					<div
						className={`transition-all duration-300 ease-in-out ${
							openId === power.id ? "max-h-250 opacity-100" : "max-h-0 opacity-0"
						}`}
					>
						<div className="border-t border-white/10 p-5 space-y-6">
							<div className="">
								<p className="text-gray-300 leading-relaxed italic">{power.description}</p>
							</div>

							{/* Abilities List */}
							<div
								className={`grid gap-4 ${power.domainExpansion ? "md:grid-cols-2" : "md:grid-cols-1"}`}
							>
								<div className="space-y-3">
									<h4 className="flex items-center gap-2 text-sm font-bold text-jjk-accent uppercase tracking-wider">
										<Target size={16} />
										<p className="text-sm">Key Abilities</p>
									</h4>

									<ul className="space-y-2">
										{power.abilities.map((ability, index) => (
											<li key={index} className="rounded-lg bg-white/5 p-3 border border-white/5">
												<span className="block font-bold text-white mb-1">{ability.name}</span>
												<span className="text-sm text-gray-400">{ability.description}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Domain Expansion */}
								{power.domainExpansion && (
									<div className="space-y-3">
										<h4 className="flex items-center gap-2 text-sm font-bold text-jjk-purple uppercase">
											<Shield size={16} />
											<p className="text-sm">Domain Expansion</p>
										</h4>

										<div className="rounded-lg bg-jjk-purple/10 p-4 border border-jjk-purple/20">
											<span className="block font-bold text-jjk-purple text-lg mb-2">
												{power.domainExpansion.name}
											</span>
											<p className="text-sm text-gray-300 mb-2">
												{power.domainExpansion.description}
											</p>
											<p className="text-xs text-jjk-purple font-medium">
												Visual: {power.domainExpansion.appearance}{" "}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
