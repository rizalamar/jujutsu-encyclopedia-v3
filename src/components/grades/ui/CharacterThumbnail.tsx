import { useEffect, useState } from "react";
import type { CharacterDetail } from "../../../@types/character.types";
import { useNavigate } from "react-router-dom";
import { characterService } from "../../../services/character.service";
import { ArrowRight } from "lucide-react";

interface Props {
	id: number;
}

export default function CharacterThumbnail({ id }: Props) {
	const [data, setData] = useState<CharacterDetail | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchCharacterDetail = async () => {
			try {
				const res = await characterService.getCharacterById(id.toString());
				setData(res.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchCharacterDetail();
	}, [id]);

	if (!data) return <div className="aspect-square bg-white/5 animate-pulse rounded-xl" />;

	return (
		<div onClick={() => navigate(`/characters/${id}`)} className="space-y-3 cursor-pointer group">
			<div className="relative overflow-hidden transition-all border rounded-xl border-white/10 group-hover:border-jjk-accent">
				<img
					src={data.images.webp.image_url}
					alt={data.name}
					className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute inset-0 transition-colors bg-jjk-dark/20 group-hover:bg-transparent" />
				<div className="absolute p-1 transition-opacity rounded-md opacity-0 bottom-2 right-2 bg-jjk-accent text-jjk-dark group-hover:opacity-100">
					<ArrowRight size={14} />
				</div>
			</div>
			<p className="text-sm font-black tracking-tight text-center text-gray-500 uppercase truncate transition-colors group-hover:text-white">
				{data.name}
			</p>
		</div>
	);
}
