export interface AnimeImage {
	webp: {
		image_url: string;
		small_image_url: string;
		large_image_url: string;
	};
}

export interface Genre {
	mal_id: string;
	type: string;
	name: string;
}

export interface Studio {
	name: string;
}

export interface Trailer {
	youtube_id: string;
	url: string;
	embed_url: string;
	images: {
		maximum_image_url: string;
	};
}

export interface JJKData {
	mal_id: number;
	url: string;
	images: AnimeImage;
	trailer: Trailer;
	title: string;
	title_english: string;
	title_japanese: string;
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: {
		from: string;
		to: string;
		string: string;
	};
	duration: string;
	rating: string;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	sypnosis: string;
	year: number;
	studios: Studio[];
	genres: Genre[];
	themes: Genre[];
	relations: {
		relation: string;
		entry: {
			mal_id: number;
			type: string;
			name: string;
		}[];
	}[];

	theme: {
		openings: string[];
		endings: string[];
	};
	external: {
		name: string;
		url: string;
	}[];
	streaming: {
		name: string;
		url: string;
	};
}

export interface JJKResponse {
	data: JJKData;
}
