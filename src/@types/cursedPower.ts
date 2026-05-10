export interface CursedPower {
	id: string;
	characterId: number;
	ownerName: string;
	techniqueName: string;
	type: "Innate Technique" | "Inherited Technique" | "Barrier Technique" | "Shikigami Ability" | "None";
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
	status?: "Active" | "Deceased" | "Sealed" | "Unknown";
	grade: "Special Grade" | "Grade 1" | "Grade 2" | "Grade 3" | "Grade 4" | "Non-Sorcerer";
}

export interface PowerSystemInfo {
	id: string;
	title: string;
	description: string;
	details: string[];
	icon: string;
}
