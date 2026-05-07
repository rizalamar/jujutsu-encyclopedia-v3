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
			try {
				const res = await characterService.getCharacterById(id);
				setCharacterDetail(res.data);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchCharacterDetail();
	}, [id]);

	return { id, characterDetail, loading, error };
};
