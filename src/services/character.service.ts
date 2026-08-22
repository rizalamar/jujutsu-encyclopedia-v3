import type { CharacterDetailResponse, CharacterPicturesResponse, CharacterResponse } from "../@types/character.types";
import { api } from "../api/api";

export const characterService = {
	getAllCharacters: async (id: number = 40748): Promise<CharacterResponse> => {
		const res = await api.get<CharacterResponse>(`anime/${id}/characters`);
		return res.data;
	},
	getCharacterById: async (id: string): Promise<CharacterDetailResponse> => {
		const res = await api.get<CharacterDetailResponse>(`/characters/${id}/full`);
		return res.data;
	},
	getCharacterPictures: async (id: string): Promise<CharacterPicturesResponse> => {
		const res = await api.get<CharacterPicturesResponse>(`/characters/${id}/pictures`);
		return res.data;
	},
};
