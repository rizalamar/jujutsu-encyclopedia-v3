import { useEffect, useState } from "react";
import type { JJKData } from "../@types/anime";
import { animeService } from "../services/anime.service";

export const useAnimeJJK = () => {
	const [data, setData] = useState<JJKData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchJJKData = async () => {
			try {
				const res = await animeService.getJJKData();
				setData(res.data);
				setError(null);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchJJKData();
	}, []);

	return { data, loading, error };
};
