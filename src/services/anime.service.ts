import type { JJKData, JJKResponse } from "../@types/anime";
import { api } from "../api/api";

export const animeService = {
	getJJKData: async (): Promise<JJKResponse> => {
		return api.get<JJKData>("/anime/40748/full");
	},
};
