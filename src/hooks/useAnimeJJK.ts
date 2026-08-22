import { useEffect, useState } from "react";
import type { JJKBaseData } from "../@types/anime";
import { animeService } from "../services/anime.service";

export const useAnimeJJK = (initialId: number = 40748) => {
	const [data, setData] = useState<JJKBaseData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [currentId, setCurrentId] = useState<number>(initialId);

	useEffect(() => {
		const fetchAnimeData = async () => {
			setLoading(true);
			try {
				const res = await animeService.getAnimeBaseData(currentId);
				setData(res);
				setError(null);
			} catch (error) {
				setError(error instanceof Error ? error.message : "An unexpected error occurred");
			} finally {
				setLoading(false);
			}
		};
		fetchAnimeData();
	}, [currentId]);

	return { data, loading, error, currentId, setCurrentId };
};
