import type { CharacterDetailResponse, CharacterPicturesResponse, CharacterResponse } from "../@types/character.types";
import { api } from "../api/api";

export const characterService = {
	getAllCharacters: async (id: number = 40748): Promise<CharacterResponse> => {
		const response = api.get<CharacterResponse>(`anime/${id}/characters`);
		return (await response).data;
	},
	getCharacterById: async (id: string): Promise<CharacterDetailResponse> => {
		const response = api.get<CharacterDetailResponse>(`/characters/${id}/full`);
		return (await response).data;
	},
	getCharacterPictures: async (id: string): Promise<CharacterPicturesResponse> => {
		const response = api.get<CharacterPicturesResponse>(`/characters/${id}/pictures`);
		return (await response).data;
	},
};
