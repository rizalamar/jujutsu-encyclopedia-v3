import type { JJKBaseData } from "../@types/anime";
import { api } from "../api/api";

export const animeService = {
	getAnimeBaseData: async (id: number = 40748): Promise<JJKBaseData> => {
		const res = await api.get<JJKBaseData>(`/anime/${id}/full`);
		return res.data;
	},
};
