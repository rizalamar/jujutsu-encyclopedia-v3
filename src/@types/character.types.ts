export interface Character {
	character: {
		mal_id: number;
		url: string;
		images: {
			webp: {
				image_url: string;
				small_image_url: string;
			};
		};
		name: string;
	};
	role: string;
	favorites: number;
}

export interface CharacterResponse {
	data: Character[];
}
