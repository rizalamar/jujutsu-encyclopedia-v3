import { useEffect, useState } from "react";
import type { JJKData } from "../@types/anime";
import { animeService } from "../services/anime.service";

export const useAnimeJJK = (initialId: number = 40748) => {
	const [data, setData] = useState<JJKData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [currentId, setCurrentId] = useState<number>(initialId);

	useEffect(() => {
		const fetchJJKData = async () => {
			setLoading(true);
			try {
				const res = await animeService.getJJKData(currentId);
				setData(res.data);
				setError(null);
			} catch (error) {
				setError(error instanceof Error ? error.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		};
		fetchJJKData();
	}, [currentId]);

	return { data, loading, error, currentId, setCurrentId };
};
