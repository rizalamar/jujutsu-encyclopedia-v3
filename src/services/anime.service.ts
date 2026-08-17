import type { JJKResponse } from "../@types/anime";
import { api } from "../api/api";

export const animeService = {
	getJJKData: async (id: number = 40748): Promise<JJKResponse> => {
		const response = api.get<JJKResponse>(`/anime/${id}/full`);
		return (await response).data;
	},
};
