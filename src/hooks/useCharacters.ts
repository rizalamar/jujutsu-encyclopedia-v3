import { useEffect, useMemo, useState } from "react";
import type { Character } from "../@types/character.types";
import { characterService } from "../services/character.service";
import { useSearchParams } from "react-router-dom";

export const useCharacters = () => {
	const [characters, setCharacters] = useState<Character[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [searchParams, setSearchParam] = useSearchParams();
	const currentPage = parseInt(searchParams.get("page") || "1");
	const CHARS = 20;
	const [searchQuery, setSearchQuery] = useState<string>("");

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

	const filteredCharacter = useMemo(() => {
		if (!characters) return [];
		return characters?.filter((char) => char.character.name.toLowerCase().includes(searchQuery.toLowerCase()));
	}, [characters, searchQuery]);

	const pagination = useMemo(() => {
		const startIndex = (currentPage - 1) * CHARS;
		return filteredCharacter?.slice(startIndex, startIndex + CHARS);
	}, [currentPage, filteredCharacter]);

	const totalPages = Math.ceil(characters?.length / CHARS);

	const goToPage = (page: number) => {
		searchParams.set("page", page.toString());
		setSearchParam(searchParams);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		searchParams.set("page", "1");
		setSearchParam(searchParams);
	};

	return { loading, error, pagination, goToPage, totalPages, currentPage, searchQuery, handleSearch };
};
