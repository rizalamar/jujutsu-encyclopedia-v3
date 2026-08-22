export interface JJKBaseData {
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
	title_english: string | null;
	title_japanese: string | null;
	type: string;
	source: string;
	season: string | null;
	episodes: number | null;
	status: string;
	airing: boolean;
	synopsis: string | null;
	genres: [
		{
			mal_id: number;
			type: string;
			name: string;
			url: string;
		}
	];
	studios: [
		{
			mal_id: number;
			type: string;
			name: string;
			url: string;
		}
	];
	aired: {
		from: string | null;
		to: string | null;
		string: string;
	};
	year: number | null;
	demographics: [
		{
			mal_id: number;
			type: string;
			name: string;
			url: string;
		}
	];
	themes: [
		{
			mal_id: number;
			type: string;
			name: string;
			url: string;
		}
	];
	producers: [
		{
			mal_id: number;
			type: string;
			name: string;
			url: string;
		}
	];
	duration: string;
	rating: string;
	score: number | null;
	scored_by: number | null;
	rank: number | null;
	popularity: number | null;
	members: number | null;
}

export interface JJKBaseResponse {
	data: JJKBaseData;
}
