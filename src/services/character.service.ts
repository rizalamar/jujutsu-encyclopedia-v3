import type { Character, CharacterResponse } from "../@types/character.types";
import { api } from "../api/api";

export const characterService = {
	getAllCharacters: async (): Promise<CharacterResponse> => {
		return api.get<Character[]>("anime/40748/characters");
	},
};
