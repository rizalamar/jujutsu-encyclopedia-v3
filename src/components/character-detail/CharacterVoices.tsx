import { Languages } from "lucide-react";
import type { CharacterDetail } from "../../@types/character.types";

interface Props {
	voices: CharacterDetail["voices"];
}

export default function CharacterVoices({ voices }: Props) {
	return (
		<div className="">
			<h3 className="flex items-center gap-2 pl-4 mb-8 text-2xl font-bold border-l-4 border-jjk-purple font-space italic">
				<Languages size={24} />
				<p>Voice Casting</p>
			</h3>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
				{voices.slice(0, 6).map((voice, index) => (
					<div
						key={index}
						className="flex items-center gap-4 p-3 border bg-white/5 rounded-xl border-white/5 hover:bg-white/10 transition-all"
					>
						<img
							src={voice.person.images.jpg.image_url}
							alt={voice.person.name}
							className="object-cover w-12 h-12 rounded-full border border-white/10"
						/>
						<div className="overflow-hidden">
							<p className="text-xs font-bold truncate">{voice.person.name}</p>
							<p className="text-[10px] text-jjk-accent uppercase">{voice.language}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
