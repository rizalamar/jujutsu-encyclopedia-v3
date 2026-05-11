import type { GradeLore } from "../@types/gradingLore.types";

export const gradingLoreData: GradeLore[] = [
	{
		grade: "Special Grade",
		title: "The Anomalies of Nature",
		description:
			"Reserved for beings with such immense power that they fall completely outside the standard ranking system. They are national-scale threats capable of overthrowing entire countries single-handedly.",
		analogy: "Conventional weaponry is useless; cluster bombs are the bare minimum to even scratch them.",
		color: "text-purple-500",
		iconicIds: [164471, 175198, 168067, 175542, 164481], // Gojo, Sukuna, Yuta, Geto, Mahito
	},
	{
		grade: "Grade 1",
		title: "The Elite Standard",
		description:
			"The highest rank most sorcerers can realistically achieve. Grade 1 sorcerers are the backbone of Jujutsu High, entrusted with the most dangerous and critical missions.",
		analogy: "A tank's firepower is the baseline comparison for a sorcerer of this rank.",
		color: "text-red-500",
		iconicIds: [164473, 164484, 180766, 184437, 163847], // Nanami, Todo, Mei Mei, Kusakabe, Yuji
	},
	{
		grade: "Grade 2",
		title: "Experienced Combatants",
		description:
			"Sorcerers who have moved past the introductory phase and possess significant combat experience. They can handle most common curses without assistance.",
		analogy: "A shotgun or a small tactical squad represents the threat level here.",
		color: "text-jjk-accent",
		iconicIds: [164470, 164476, 184438], // Megumi, Panda, Ino
	},
	{
		grade: "Grade 3",
		title: "Active Duty Sorcerers",
		description:
			"The standard rank for young sorcerers. They are capable of handling basic curses and assisting in larger operations under supervision.",
		analogy: "Equivalent to an individual with a handgun or basic military training.",
		color: "text-gray-400",
		iconicIds: [164472, 164483, 164485], // Nobara, Mai, Miwa
	},
	{
		grade: "Grade 4",
		title: "Auxiliary Personnel",
		description:
			"The entry-level rank. These sorcerers often handle low-level investigations or provide logistical support for higher-ranked missions.",
		analogy: "Equivalent to a wooden bat; barely enough to handle the weakest spirits.",
		color: "text-green-500",
		iconicIds: [164482, 164479], // Maki, Ijichi
	},
];
