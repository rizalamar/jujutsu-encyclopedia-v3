import { useEffect, useState } from "react";
import type { CharacterDetail } from "../@types/character.types";

export const useFavorites = () => {
	const [favorites, setFavorites] = useState<CharacterDetail[]>(() => {
		const saved = localStorage.getItem("jjk-favorites");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("jjk-favorites", JSON.stringify(favorites));
	}, [favorites]);

	const toggleFavorite = (character: CharacterDetail) => {
		const exists = favorites.find((fav) => fav.mal_id === character.mal_id);

		if (exists) {
			setFavorites(favorites.filter((fav) => fav.mal_id !== character.mal_id));
		} else {
			setFavorites([...favorites, character]);
		}
	};

	const isFavorite = (id: number) => {
		return favorites.some((fav) => fav.mal_id === id);
	};

	return { favorites, toggleFavorite, isFavorite };
};
