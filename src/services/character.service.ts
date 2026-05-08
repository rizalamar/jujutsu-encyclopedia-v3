import type {
	Character,
	CharacterDetail,
	CharacterDetailResponse,
	CharacterPicture,
	CharacterPicturesResponse,
	CharacterResponse,
} from "../@types/character.types";
import { api } from "../api/api";

export const characterService = {
	getAllCharacters: async (id: number = 40748): Promise<CharacterResponse> => {
		return api.get<Character[]>(`anime/${id}/characters`);
	},
	getCharacterById: async (id: string): Promise<CharacterDetailResponse> => {
		return api.get<CharacterDetail>(`/characters/${id}/full`);
	},
	getCharacterPictures: async (id: string): Promise<CharacterPicturesResponse> => {
		return api.get<CharacterPicture[]>(`/characters/${id}/pictures`);
	},
};
