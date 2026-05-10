import type { JJKData, JJKResponse } from "../@types/anime";
import { api } from "../api/api";

export const animeService = {
	getJJKData: async (id: number = 40748): Promise<JJKResponse> => {
		return api.get<JJKData>(`/anime/${id}/full`);
	},
};
