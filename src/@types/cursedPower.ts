export interface CharacterTraits {
	age?: string;
	birthday?: string;
	height?: string;
	occupation?: string;
}

export interface CursedPower {
	id: string;
	characterId: number;
	ownerName: string;
	techniqueName: string;
	type: "Innate Technique" | "Inherited Technique" | "Barrier Technique";
	description: string;
	abilities: {
		name: string;
		description: string;
	}[];
	domainExpansion?: {
		name: string;
		description: string;
		appearance: string;
	};
	traits?: CharacterTraits;
	grade: "Special Grade" | "Grade 1" | "Grade 2" | "Grade 3" | "Grade 4";
}
