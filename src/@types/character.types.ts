export interface Anime {
	mal_id: number;
	url: string;
	webp: {
		image_url: string;
		small_image_url: string;
		large_image_url: string;
	};
	title: string;
}

export interface Manga {
	role: string;
	manga: {
		mal_id: number;
		url: string;
		images: {
			webp: {
				image_url: string;
				small_image_url: string;
				large_image_url: string;
			};
		};
		title: string;
	};
}

export interface Voices {
	language: string;
	person: {
		mal_id: 0;
		url: string;
		images: {
			jpg: {
				image_url: string;
			};
		};
		name: string;
	};
}

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

export interface CharacterDetail {
	mal_id: number;
	url: string;
	images: {
		jpg: {
			image_url: string;
		};
		webp: {
			image_url: string;
			small_image_url: string;
		};
	};
	name: string;
	name_kanji: string;
	favorites: number;
	about: string;
	anime: {
		role: string;
		anime: Anime[];
	};
	manga: Manga[];
	voices: Voices[];
}

export interface CharacterResponse {
	data: Character[];
}

export interface CharacterDetailResponse {
	data: CharacterDetail;
}
