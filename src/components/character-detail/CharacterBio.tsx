import { Contact } from "lucide-react";

interface Props {
	about: string | null;
}

export default function CharacterBio({ about }: Props) {
	return (
		<div className="">
			<h3 className="flex items-center gap-2 pl-4 mb-8 text-2xl font-bold border-l-4 border-jjk-accent font-space italic">
				<Contact size={24} />
				<p>Biography</p>
			</h3>
			<div className="glass-effect p-8 rounded-3xl border border-white/10">
				<p className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap font-light">
					{about || "No biography available for this character."}
				</p>
			</div>
		</div>
	);
}
