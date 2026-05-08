import { useEffect, useState } from "react";
import type { CharacterPicture } from "../@types/character.types";
import { characterService } from "../services/character.service";

export const useCharacterPictures = (id: string) => {
	const [pictures, setPictures] = useState<CharacterPicture[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPictures = async () => {
			if (!id) return;
			try {
				const res = await characterService.getCharacterPictures(id);
				setPictures(res.data);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPictures();
	}, [id]);

	return { pictures, loading, error };
};
