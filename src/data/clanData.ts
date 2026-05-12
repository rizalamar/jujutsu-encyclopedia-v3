import type { ClanInfo } from "../@types/clanData.types";

export const clanData: ClanInfo[] = [
	{
		id: "gojo",
		name: "Gojo Clan",
		kanji: "五条",
		title: "Infinity & Perception",
		color: "from-jjk-accent/20 to-transparent",
		accentColor: "text-jjk-accent",
		history:
			"The Gojo Clan is descended from Sugawara no Michizane, one of the Big Three Vengeful Spirits of Japan. For centuries, they have held a dominant position in the Jujutsu world due to their god-like inherited techniques. Currently, the clan is a 'one-man army' centered entirely around Satoru Gojo, whose birth shifted the balance of the entire world.",
		philosophy:
			"Extreme Individualism. Because their power is so concentrated in individuals who possess both the Limitless and the Six Eyes, the clan functions less as a traditional organization and more as a support system for their singular, overwhelming pillar.",
		techniques: [
			{
				name: "Limitless (Mukagen)",
				description:
					"An inherited technique that grants absolute control over space at an atomic level through the manipulation of cursed energy.",
			},
			{
				name: "Six Eyes (Rikugan)",
				description:
					"A rare ocular jujutsu that allows the user to see cursed energy in extreme detail and reduces cursed energy consumption to near zero.",
			},
		],
		memberIds: [164471], // Satoru Gojo
	},
	{
		id: "zenin",
		name: "Zenin Clan",
		kanji: "禪院",
		title: "Power & Tradition",
		color: "from-green-900/30 to-transparent",
		accentColor: "text-green-500",
		history:
			"The Zenin Clan is the most conservative and traditionalist of the Big Three. They value powerful cursed techniques above all else, often discarding or mistreating members who lack them. This toxic environment has birthed both legendary sorcerers and dangerous outcasts who have rejected the clan's rigid hierarchy.",
		philosophy:
			"Strict Meritocracy. 'You are not a sorcerer if you are not a Zenin; you are not a human if you are not a sorcerer.' This mantra defines their ruthless pursuit of combat prowess and political influence.",
		techniques: [
			{
				name: "Ten Shadows Technique",
				description:
					"A prized technique that allows the user to summon ten different powerful shikigami using shadows as a medium.",
			},
			{
				name: "Projection Sorcery",
				description:
					"A high-speed technique that divides one second into 24 frames, allowing for movement that appears as instantaneous teleportation.",
			},
		],
		memberIds: [164470, 164482, 164483, 175542, 184484], // Megumi, Maki, Mai, Toji, Naobito
	},
	{
		id: "kamo",
		name: "Kamo Clan",
		kanji: "加茂",
		title: "Blood & Orthodoxy",
		color: "from-red-900/30 to-transparent",
		accentColor: "text-red-600",
		history:
			"The Kamo Clan prides itself on its deep-rooted history and close ties to the Jujutsu headquarters. They are known as the most 'orthodox' family, strictly adhering to the old ways. However, their history is stained by the legacy of Noritoshi Kamo, an ancestor regarded as the most evil sorcerer in history for his experiments with Death Paintings.",
		philosophy:
			"Traditionalism & Lineage. They place immense importance on the purity of their bloodline and the stability of the Jujutsu hierarchy, often serving as the 'loyalists' to the conservative higher-ups.",
		techniques: [
			{
				name: "Blood Manipulation",
				description:
					"A technique that allows the user to control their own blood, using it as a versatile weapon for both long-range piercing and internal physical reinforcement.",
			},
			{
				name: "Cursed Womb: Death Painting",
				description:
					"An infamous legacy involving the hybridization of humans and cursed spirits, capable of producing powerful, blood-based anomalies.",
			},
		],
		memberIds: [178589, 180764], // Noritoshi Kamo (Student), Choso
	},
];
