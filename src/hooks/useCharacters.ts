import { useEffect, useState } from "react";
import type { Character } from "../@types/character.types";
import { characterService } from "../services/character.service";

export const useCharacters = () => {
	const [characters, setCharacters] = useState<Character[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const res = await characterService.getAllCharacters();
				setCharacters(res.data);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchCharacters();
	}, []);

	return { characters, loading, error };
};
