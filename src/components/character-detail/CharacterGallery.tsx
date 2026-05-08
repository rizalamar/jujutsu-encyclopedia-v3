import { ImageIcon } from "lucide-react";
import { useCharacterPictures } from "../../hooks/useCharacterPictures";

interface Props {
	characterId: string;
	characterName: string;
}

export default function CharacterGallery({ characterId, characterName }: Props) {
	const { pictures, loading: loadingPics } = useCharacterPictures(characterId);
	return (
		<div>
			<h3 className="flex items-center gap-3 pl-4 mb-8 text-2xl font-bold border-l-4 border-jjk-purple font-space italic">
				<ImageIcon size={24} className="text-jjk-purple" />
				<p>Official Gallery</p>
			</h3>
			{loadingPics ? (
				<div className="animate-pulse flex gap-4 overflow-hidden">
					{[...Array(4)].map((_, i) => (
						<div key={i} className="min-w-37.5 aspect-square bg-white/5 rounded-2xl" />
					))}
				</div>
			) : (
				<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
					{pictures?.length > 0 ? (
						pictures.map((pic, idx) => (
							<div
								key={idx}
								className="min-w-45 h-45 rounded-2xl overflow-hidden border border-white/10 hover:border-jjk-purple transition-all shrink-0"
							>
								<img
									src={pic.jpg.image_url}
									alt={`${characterName} art ${idx}`}
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
								/>
							</div>
						))
					) : (
						<p className="text-gray-500 italic">No additional imagery found in records.</p>
					)}
				</div>
			)}
		</div>
	);
}
