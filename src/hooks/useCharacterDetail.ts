import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { CharacterDetail } from "../@types/character.types";
import { characterService } from "../services/character.service";

export const useCharacterDetail = () => {
	const { id } = useParams();
	const [characterDetail, setCharacterDetail] = useState<CharacterDetail | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCharacterDetail = async () => {
			if (!id) return;
			setLoading(true);
			try {
				const res = await characterService.getCharacterById(id);
				setCharacterDetail(res.data);
				setError(null);
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
				console.log("🚀 ~ fetchCharacterDetail ~ errorMessage:", errorMessage);
				setError(errorMessage);
				setCharacterDetail(null);
			} finally {
				setLoading(false);
			}
		};
		fetchCharacterDetail();
	}, [id]);

	return { id, characterDetail, loading, error };
};
