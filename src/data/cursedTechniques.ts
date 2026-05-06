import type { CursedPower } from "../@types/cursedPower";

export const cursedTechniques: CursedPower[] = [
	{
		id: "divergent-fist",
		characterId: 127051,
		ownerName: "Yuji Itadori",
		techniqueName: "Cursed Energy Manipulation",
		type: "Innate Technique",
		description:
			"Yuji possesses superhuman physical strength combined with a unique way of applying cursed energy that creates delayed impacts.",
		abilities: [
			{
				name: "Divergent Fist",
				description:
					"A punch where cursed energy lags behind the physical strike, creating a second, devastating impact.",
			},
			{
				name: "Black Flash",
				description:
					"A distortion in space that occurs when cursed energy is applied within 0.000001 seconds of a physical hit, multiplying power by 2.5.",
			},
			{
				name: "Superhuman Strength",
				description: "Even without cursed energy, Yuji can destroy walls and throw cars with ease.",
			},
		],

		grade: "Grade 1",
	},
	{
		id: "limitless",
		characterId: 127054, // Satoru Gojo
		ownerName: "Satoru Gojo",
		techniqueName: "Limitless (Mukagen)",
		type: "Inherited Technique",
		description:
			"An inherited technique passed down in the Gojo Family. It grants the user absolute control over space through the manipulation of cursed energy at an atomic level.",
		abilities: [
			{
				name: "Infinity",
				description:
					"The neutral form of Limitless that slows down anything approaching Gojo, making it impossible to touch him.",
			},
			{
				name: "Cursed Technique Lapse: Blue",
				description:
					"Creates a vacuum by amplifying Limitless, pulling everything in the vicinity toward a single point.",
			},
			{
				name: "Cursed Technique Reversal: Red",
				description:
					"By using reverse cursed energy, it creates a powerful repulsive force that blasts targets away.",
			},
			{
				name: "Hollow Technique: Purple",
				description:
					"A secret technique that combines Blue and Red to create an imaginary mass that erases everything in its path.",
			},
		],
		domainExpansion: {
			name: "Unlimited Void",
			description:
				"A domain that traps targets within the concept of infinity, flooding their brains with endless information and leaving them catatonic.",
			appearance:
				"A vast, empty void filled with stars, galaxies, and the literal manifestation of infinite knowledge.",
		},
		grade: "Special Grade",
	},
	{
		id: "ten-shadows",
		characterId: 127055, // Megumi Fushiguro
		ownerName: "Megumi Fushiguro",
		techniqueName: "Ten Shadows Technique",
		type: "Inherited Technique",
		description:
			"A legendary technique of the Zenin Clan that allows the user to summon ten different shikigami using shadows as an intermediary.",
		abilities: [
			{
				name: "Divine Dogs",
				description: "Two wolf-like shikigami with sharp senses for tracking and devouring curses.",
			},
			{
				name: "Nue",
				description:
					"An owl-like shikigami capable of high-speed flight and discharging electricity from its wings.",
			},
			{
				name: "Eight-Handled Sword Divergent Sila Divine General Mahoraga",
				description:
					"The most powerful shikigami that can adapt to any and all phenomena after being hit once.",
			},
		],
		domainExpansion: {
			name: "Chimera Shadow Garden",
			description:
				"Floods the area with thick shadows, allowing the user to manifest multiple shikigami simultaneously and attack from any shadow.",
			appearance: "A dark cave-like area where the floor is composed of a sea of fluid, bubbling shadows.",
		},
		grade: "Grade 2",
	},
	{
		id: "shrine",
		characterId: 187744, // Ryomen Sukuna
		ownerName: "Ryomen Sukuna",
		techniqueName: "Shrine",
		type: "Innate Technique",
		description:
			"A terrifyingly simple yet lethal technique centered around invisible cutting attacks that can dismantle any opponent.",
		abilities: [
			{
				name: "Cleave",
				description:
					"A slashing attack that adjusts itself depending on the target's cursed energy and durability to cut them down in one fell swoop.",
			},
			{
				name: "Dismantle",
				description:
					"A default flying slash used to cut inanimate objects or as a long-range projectile attack.",
			},
			{
				name: "Fire Arrow (Fuga)",
				description:
					"A powerful long-range attack that manifests as a flaming arrow with massive explosive capabilities.",
			},
		],
		domainExpansion: {
			name: "Malevolent Shrine",
			description:
				"A unique domain without a barrier that automatically slashes anything within a 200-meter radius, creating a literal field of death.",
			appearance:
				"A demonic Buddhist shrine decorated with horns and skulls, sitting atop a pile of bones in a shallow pool of water.",
		},
		grade: "Special Grade",
	},
];
