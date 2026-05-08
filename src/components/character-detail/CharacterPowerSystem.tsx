import { Info } from "lucide-react";
import type { CursedPower } from "../../@types/cursedPower";
import TechniqueAccordion from "../ui/TechniqueAccordion";

interface Props {
	cursedTechniqueChar: CursedPower[];
}

export default function CharacterPowerSystem({ cursedTechniqueChar }: Props) {
	return (
		<div className="space-y-8">
			<h3 className="flex items-center gap-2 pl-4 text-2xl font-bold tracking-tighter uppercase border-l-4 border-red-500 font-space italic">
				<Info size={24} />
				<p>Power System</p>
			</h3>

			{cursedTechniqueChar.length > 0 ? (
				<TechniqueAccordion powers={cursedTechniqueChar} />
			) : (
				<div className="p-8 text-center border bg-red-500/10 border-red-500/20 rounded-3xl">
					<Info className="mx-auto mb-4 text-red-500 opacity-50" size={32} />
					<p className="mb-2 font-bold uppercase text-xs tracking-widest">Classification Pending</p>
					<p className="text-xs text-gray-500">
						Technique data for this individual is currently restricted or unobserved by Jujutsu High
						authorities.
					</p>
				</div>
			)}
		</div>
	);
}
