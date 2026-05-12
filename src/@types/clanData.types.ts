export interface ClanInfo {
	id: string;
	name: string;
	kanji: string;
	title: string;
	color: string;
	accentColor: string;
	history: string;
	philosophy: string;
	techniques: {
		name: string;
		description: string;
	}[];
	memberIds: number[];
}
