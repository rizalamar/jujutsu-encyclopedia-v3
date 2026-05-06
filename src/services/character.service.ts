import type { Character, CharacterDetail, CharacterDetailResponse, CharacterResponse } from "../@types/character.types";
import { api } from "../api/api";

export const characterService = {
	getAllCharacters: async (): Promise<CharacterResponse> => {
		return api.get<Character[]>("anime/40748/characters");
	},
	getCharacterById: async (id: string): Promise<CharacterDetailResponse> => {
		return api.get<CharacterDetail>(`/characters/${id}/full`);
	},
};
