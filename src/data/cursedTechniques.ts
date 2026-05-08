import type { CursedPower } from "../@types/cursedPower";

export const cursedTechniques: CursedPower[] = [
	{
		id: "divergent-fist",
		characterId: 163847,
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
		traits: {
			age: "15",
			birthday: "March 20th",
			height: "173 cm",
			occupation: "Jujutsu Sorcerer, Student",
		},
		grade: "Grade 1",
	},
	{
		id: "limitless",
		characterId: 164471,
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
		traits: {
			age: "28",
			birthday: "December 7th",
			height: "190 cm",
			occupation: "Jujutsu Sorcerer, Teacher",
		},
		grade: "Special Grade",
	},
	{
		id: "ten-shadows",
		characterId: 164470, // Megumi Fushiguro
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
		traits: {
			age: "15",
			birthday: "December 22nd",
			height: "175 cm",
			occupation: "Jujutsu Sorcerer, Student",
		},
		grade: "Grade 2",
	},
	{
		id: "shrine",
		characterId: 175198,
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
		traits: {
			age: "1000+",
			birthday: "Unknown",
			height: "173 cm (In Yuji's body)",
			occupation: "King of Curses",
		},
		grade: "Special Grade",
	},
	{
		id: "straw-doll",
		characterId: 164472, // Nobara Kugisaki
		ownerName: "Nobara Kugisaki",
		techniqueName: "Straw Doll Technique",
		type: "Innate Technique",
		description:
			"A technique that uses a hammer, nails, and a straw doll to strike opponents from a distance or attack them through their severed parts.",
		abilities: [
			{
				name: "Resonance",
				description: "Links a part of the enemy to the straw doll to deal damage directly to their soul.",
			},
			{
				name: "Hairpin",
				description: "Causes cursed energy-infused nails to explode with massive force upon command.",
			},
		],
		grade: "Grade 3",
	},
	{
		id: "heavenly-restriction-maki",
		characterId: 164482, // Maki Zenin
		ownerName: "Maki Zenin",
		techniqueName: "Heavenly Restriction",
		type: "Innate Technique",
		description:
			"A natural binding vow that trades all cursed energy for superhuman physical prowess and enhanced senses.",
		abilities: [
			{
				name: "Master Specialist",
				description: "Exceptional mastery over various cursed tools like Playful Cloud and Dragonbone.",
			},
			{
				name: "Invisible Presence",
				description: "Due to zero cursed energy, she is invisible to barriers and automated cursed detections.",
			},
		],
		grade: "Grade 4", // Official rank, but strength is Grade 1 level
	},
	{
		id: "abrupt-mutated-cursed-corpse",
		characterId: 164476,
		ownerName: "Panda",
		techniqueName: "Abrupt Mutated Cursed Corpse",
		type: "Innate Technique",
		description:
			"Mayat terkutuk mutasi tiba-tiba yang memiliki kesadaran sendiri dan tiga inti jiwa di dalam tubuhnya.",
		abilities: [
			{
				name: "Panda Mode",
				description: "Mode standar yang seimbang antara pertahanan dan kekuatan fisik.",
			},
			{
				name: "Gorilla Mode",
				description:
					"Mode penyerangan yang meningkatkan kekuatan secara drastis dan menggunakan teknik 'Unblockable Drumming Beat'.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "cursed-speech",
		characterId: 164478, // Toge Inumaki
		ownerName: "Toge Inumaki",
		techniqueName: "Cursed Speech",
		type: "Inherited Technique",
		description:
			"Teknik warisan klan Inumaki yang memaksakan kepatuhan pada kata-kata yang diucapkan kepada target.",
		abilities: [
			{
				name: "Don't Move",
				description: "Membuat target membeku di tempat secara instan.",
			},
			{
				name: "Blast Away",
				description: "Menciptakan dampak ledakan kuat yang melemparkan target dari jarak jauh.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "idle-transfiguration",
		characterId: 164481, // Mahito
		ownerName: "Mahito",
		techniqueName: "Idle Transfiguration",
		type: "Innate Technique",
		description:
			"Allows the user to reshape the soul of themselves or anyone they touch, subsequently changing their physical body.",
		abilities: [
			{
				name: "Soul Multiplicity",
				description: "Merges multiple souls together to create powerful transfigured humans.",
			},
			{
				name: "Body Repel",
				description:
					"A technique where Mahito forcefully merges souls to create a high-pressure physical attack.",
			},
		],
		domainExpansion: {
			name: "Self-Embodiment of Perfection",
			description:
				"Creates an environment where Mahito is literally in the palm of the target's hand, allowing him to transfigure their soul without physical contact.",
			appearance: "A dark space surrounded by a massive number of interconnected hands.",
		},
		grade: "Special Grade",
	},
	{
		id: "disaster-flames",
		characterId: 176770, // Jogo
		ownerName: "Jogo",
		techniqueName: "Disaster Flames",
		type: "Innate Technique",
		description:
			"A powerful fire-based technique that allows the user to manifest volcano-like vents and produce intense heat.",
		abilities: [
			{
				name: "Ember Insects",
				description: "Summons large insects that explode with sound and fire upon impact.",
			},
			{
				name: "Maximum: Meteor",
				description: "Summons a giant flaming meteor that can level entire city blocks.",
			},
		],
		domainExpansion: {
			name: "Coffin of the Iron Mountain",
			description:
				"Traps the target inside a volcanic chamber where ordinary sorcerers would incinerate instantly.",
			appearance: "The interior of an active, molten volcano.",
		},
		grade: "Special Grade",
	},
	{
		id: "ratio-technique",
		characterId: 164473, // Kento Nanami
		ownerName: "Kento Nanami",
		techniqueName: "Ratio Technique",
		type: "Innate Technique",
		description: "Divides the target into ten segments and forcibly creates a weak point at the 7:3 ratio point.",
		abilities: [
			{
				name: "Collapse",
				description:
					"An extension technique that destroys the environment to crush enemies with massive amounts of cursed energy.",
			},
			{
				name: "Overtime",
				description:
					"A binding vow that increases Nanami's cursed energy output once his official working hours end.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "boogie-woogie",
		characterId: 164484,
		ownerName: "Aoi Todo",
		techniqueName: "Boogie Woogie",
		type: "Innate Technique",
		description:
			"A simple yet incredibly effective technique that allows the user to swap positions of anything with cursed energy.",
		abilities: [
			{
				name: "Clap Swap",
				description:
					"By clapping his hands, Todo can swap the positions of two people or objects that possess a minimum amount of cursed energy.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "reverse-cursed-technique",
		characterId: 164477, // Shoko Ieiri
		ownerName: "Shoko Ieiri",
		techniqueName: "Reverse Cursed Technique",
		type: "Innate Technique",
		description: "One of the few sorcerers capable of outputting positive energy to heal others.",
		abilities: [
			{
				name: "Medical Treatment",
				description:
					"Healing wounds and regenerating body parts by converting negative cursed energy into positive energy.",
			},
		],
		traits: {
			age: "27",
			birthday: "July 3rd",
			height: "184 cm",
			occupation: "Jujutsu Sorcerer",
		},
		grade: "Grade 1", // Special status as a Doctor, equivalent to Grade 1 utility
	},
	{
		id: "new-shadow-style",
		characterId: 164485, // Kasumi Miwa
		ownerName: "Kasumi Miwa",
		techniqueName: "New Shadow Style",
		type: "Barrier Technique",
		description: "A specialized style used to protect weak sorcerers, focusing on swordplay and simple barriers.",
		abilities: [
			{
				name: "Simple Domain",
				description:
					"Creates a small circle around the user. Anything that enters the circle is automatically intercepted with a high-speed sword strike.",
			},
		],
		grade: "Grade 3",
	},
	{
		id: "puppet-manipulation",
		characterId: 179176, // Kokichi Muta (Ultimate Mechamaru)
		ownerName: "Kokichi Muta",
		techniqueName: "Puppet Manipulation",
		type: "Innate Technique",
		description:
			"Combined with his Heavenly Restriction, he can control mechanical puppets across vast distances with immense cursed energy.",
		abilities: [
			{
				name: "Alchemical Canon",
				description: "Fires a powerful blast of cursed energy from the puppet's palms.",
			},
			{
				name: "Vision Sync",
				description: "Allows the user to see and hear through the puppet's sensors regardless of distance.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "cursed-corpse-mastery",
		characterId: 164474, // Masamichi Yaga
		ownerName: "Masamichi Yaga",
		techniqueName: "Cursed Corpse Mastery",
		type: "Innate Technique",
		description: "The art of creating and controlling artificial dolls infused with cursed energy and souls.",
		abilities: [
			{
				name: "Soul Infusion",
				description:
					"The secret method to create independent cursed corpses like Panda by using three compatible souls.",
			},
		],
		grade: "Grade 1", // Candidate for Special Grade due to his army creation potential
	},
	{
		id: "guitar-cursed-amplification",
		characterId: 164475, // Yoshinobu Gakuganji
		ownerName: "Yoshinobu Gakuganji",
		techniqueName: "Guitar Cursed Amplification",
		type: "Innate Technique",
		description: "Uses his body as an amplifier to transmit cursed energy through the sound of an electric guitar.",
		abilities: [
			{
				name: "Sound Wave Blast",
				description:
					"Transmits powerful waves of cursed energy through musical notes to strike opponents at a distance.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "sijin-barrier",
		characterId: 164479, // Kiyotaka Ijichi
		ownerName: "Kiyotaka Ijichi",
		techniqueName: "Sijin Barrier",
		type: "Barrier Technique",
		description: "Expertise in creating auxiliary barriers to hide Jujutsu activities from the public eye.",
		abilities: [
			{
				name: "Curtain (Tobari)",
				description:
					"A dark barrier that conceals the interior from the outside world and reveals cursed spirits.",
			},
		],
		grade: "Grade 4", // Supporting administrative role
	},
	{
		id: "auspicious-beast-summon",
		characterId: 184438, // Takuma Ino
		ownerName: "Takuma Ino",
		techniqueName: "Auspicious Beast Summon",
		type: "Innate Technique",
		description: "Allows the user to manifest the powers of four auspicious beasts by covering their face.",
		abilities: [
			{
				name: "Kaikochi",
				description: "Summons a homing needle made of cursed energy to pierce the target.",
			},
			{
				name: "Reishi",
				description: "Coats the user in a fluid-like cursed energy to evade attacks easily.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "solo-solo-kinku",
		characterId: 177253, // Utahime Iori
		ownerName: "Utahime Iori",
		techniqueName: "Solo Solo Kinku",
		type: "Innate Technique",
		description: "A ritualistic technique that involves dancing and chanting to buff the cursed energy of allies.",
		abilities: [
			{
				name: "Cursed Energy Boost",
				description: "Significantly increases the cursed energy output of any sorcerer within her range.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "blood-manipulation",
		characterId: 178589,
		ownerName: "Noritoshi Kamo", // bingung soalnya dari clan kamo rata2 tentang manupulasi darah, ini catatan nanti kita diskusikan
		techniqueName: "Blood Manipulation",
		type: "Inherited Technique",
		description: "The prized technique of the Kamo family that allows the user to control their own blood.",
		abilities: [
			{
				name: "Flowing Red Scale",
				description: "Increases body temperature and pulse rate to grant superhuman physical abilities.",
			},
			{
				name: "Piercing Blood",
				description: "Fires a highly pressurized stream of blood that can pierce through solid objects.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "blood-manipulation",
		characterId: 179990,
		ownerName: "Noritoshi Kamo",
		techniqueName: "Blood Manipulation",
		type: "Inherited Technique",
		description: "The prized technique of the Kamo family that allows the user to control their own blood.",
		abilities: [
			{
				name: "Flowing Red Scale",
				description: "Increases body temperature and pulse rate to grant superhuman physical abilities.",
			},
			{
				name: "Piercing Blood",
				description: "Fires a highly pressurized stream of blood that can pierce through solid objects.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "rot-technique-decay",
		characterId: 193868, // Kechizu
		ownerName: "Kechizu",
		techniqueName: "Rot Technique: Decay",
		type: "Innate Technique",
		description: "A poisonous technique that causes the target's body to rot from the point of contact.",
		abilities: [
			{
				name: "Wing King",
				description:
					"A shared ability with his brothers that tracks the target and infects them with blood rot.",
			},
		],
		grade: "Special Grade", // Cursed Womb: Death Painting
	},
	{
		id: "workshop-mastery",
		characterId: 189221, // Juuzou Kumiya
		ownerName: "Juuzou Kumiya",
		techniqueName: "Workshop Mastery",
		type: "Innate Technique",
		description: "A gruesome technique involving the crafting of cursed tools from human and spirit remains.",
		abilities: [
			{
				name: "Tool Forging",
				description: "Creates high-grade cursed tools with unique properties for combat.",
			},
		],
		grade: "Grade 2", // Dangerous curse user
	},
	{
		id: "construction",
		characterId: 164483, // Mai Zenin
		ownerName: "Mai Zenin",
		techniqueName: "Construction",
		type: "Innate Technique",
		description:
			"The ability to create something from nothing using cursed energy, though it is highly taxing on the body.",
		abilities: [
			{
				name: "Cursed Bullet",
				description:
					"Creates a single physical bullet out of cursed energy once per day to bypass defensive limits.",
			},
		],
		grade: "Grade 3",
	},
	{
		id: "black-bird-manipulation",
		characterId: 180766, // Mei Mei
		ownerName: "Mei Mei",
		techniqueName: "Black Bird Manipulation",
		type: "Innate Technique",
		description:
			"A technique that allows the user to control crows and share their vision for surveillance or combat.",
		abilities: [
			{
				name: "Bird Strike",
				description:
					"A suicide binding vow where a crow trades its life to remove its cursed energy limit, creating a devastating kamikaze strike.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "projection-sorcery",
		characterId: 184484, // Naobito Zenin
		ownerName: "Naobito Zenin",
		techniqueName: "Projection Sorcery",
		type: "Inherited Technique",
		description:
			"A high-speed technique that divides one second into twenty-four frames, forcing the user and target to follow a predetermined movement path.",
		abilities: [
			{
				name: "Frame Trapping",
				description:
					"If the target fails to follow the 24fps movement rule, they are frozen in a flat, frame-like sheet for one second.",
			},
		],
		grade: "Grade 1", // Specifically "Special 1st Grade"
	},

	// --- Disaster Curses ---
	{
		id: "disaster-plants",
		characterId: 184442, // Hanami
		ownerName: "Hanami",
		techniqueName: "Disaster Plants",
		type: "Innate Technique",
		description:
			"Manifests and manipulates cursed plants that can drain life energy from the environment to strengthen the user.",
		abilities: [
			{
				name: "Roots of Entrapment",
				description: "Manipulates massive roots from the ground to bind or impale targets.",
			},
			{
				name: "Cursed Bud",
				description:
					"Fires buds that feed on the target's cursed energy; the more energy the target uses, the deeper the buds grow.",
			},
		],
		grade: "Special Grade",
	},
	{
		id: "disaster-tides",
		characterId: 184441, // Dagon
		ownerName: "Dagon",
		techniqueName: "Disaster Tides",
		type: "Innate Technique",
		description:
			"Generates and controls massive volumes of cursed water, capable of drowning enemies or summoning shikigami from the depths.",
		abilities: [
			{
				name: "Death Swarm",
				description:
					"Summons an endless swarm of carnivorous fish-like shikigami that attack the target relentlessly.",
			},
		],
		domainExpansion: {
			name: "Horizon of the Captivating Skandha",
			description: "A tropical beach domain that acts as a guaranteed hit environment for his shikigami swarm.",
			appearance: "A beautiful, sun-drenched beach with a calm ocean that hides deadly monsters.",
		},
		grade: "Special Grade",
	},

	// --- Other Spirits ---
	{
		id: "pure-cursed-energy-blast",
		characterId: 248508, // Finger Bearer
		ownerName: "Finger Bearer",
		techniqueName: "Pure Cursed Energy Blast",
		type: "Innate Technique",
		description:
			"A high-level cursed spirit born from one of Sukuna's fingers, possessing immense but unrefined cursed energy.",
		abilities: [
			{
				name: "Cursed Energy Ray",
				description:
					"Fires a concentrated beam of raw cursed energy capable of vaporizing everything in its path.",
			},
		],
		grade: "Special Grade",
	},
	{
		id: "cursed-spirit-manipulation",
		characterId: 175542, // Suguru Geto
		ownerName: "Suguru Geto",
		techniqueName: "Cursed Spirit Manipulation",
		type: "Innate Technique",
		description: "The ability to control stray cursed spirits by consuming them after they have been defeated.",
		abilities: [
			{
				name: "Spirit Release",
				description:
					"Releases captured cursed spirits to fight on the user's behalf, allowing for a diverse range of attacks.",
			},
			{
				name: "Maximum: Uzumaki",
				description:
					"Combines a massive number of gathered cursed spirits into a single, concentrated blast of high-density cursed energy.",
			},
		],
		grade: "Special Grade",
	},
	{
		id: "blood-manipulation-death-painting",
		characterId: 180764, // Choso
		ownerName: "Choso",
		techniqueName: "Blood Manipulation",
		type: "Inherited Technique",
		description:
			"A superior version of Blood Manipulation used by the Death Painting Wombs, allowing the conversion of cursed energy into blood.",
		abilities: [
			{
				name: "Slicing Exorcism",
				description: "Creates a spinning wheel of blood that acts like a circular saw to cut through targets.",
			},
			{
				name: "Supernova",
				description:
					"Compresses blood into small orbs that explode in multiple directions, showering the area with lethal blood droplets.",
			},
			{
				name: "Convergence",
				description: "Compresses blood to its absolute limit to prepare for high-velocity piercing attacks.",
			},
		],
		grade: "Special Grade",
	},
	{
		id: "copy-rika-manifestation",
		characterId: 168067, // Yuta Okkotsu
		ownerName: "Yuta Okkotsu",
		techniqueName: "Copy / Rika Manifestation",
		type: "Innate Technique",
		description:
			"Allows the user to unconditionally copy other cursed techniques and manifest the powerful vengeful spirit, Rika.",
		abilities: [
			{
				name: "Cursed Speech (Mimicry)",
				description: "Copies the Inumaki clan's technique to command targets through speech.",
			},
			{
				name: "Rika Manifestation",
				description:
					"Summons the 'Queen of Curses' to provide a nearly infinite supply of cursed energy and store cursed tools.",
			},
		],
		domainExpansion: {
			name: "Authentic Mutual Love",
			description:
				"A domain filled with countless katanas, each representing a copied technique that can be used as a guaranteed hit.",
			appearance: "A battlefield littered with swords under a cross-filled sky.",
		},
		grade: "Special Grade",
	},
	{
		id: "tool-manipulation",
		characterId: 193163, // Momo Nishimiya
		ownerName: "Momo Nishimiya",
		techniqueName: "Tool Manipulation",
		type: "Innate Technique",
		description: "Gives the user telekinetic control over objects, most commonly used with a flying broom.",
		abilities: [
			{
				name: "Wind Sickle",
				description: "Creates sharp gusts of wind by swinging her broom to strike enemies from the air.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "pain-injury-suspension",
		characterId: 189219, // Arata Nitta
		ownerName: "Arata Nitta",
		techniqueName: "Pain/Injury Suspension",
		type: "Innate Technique",
		description:
			"A supportive technique that stops existing injuries from getting worse and numbs the sensation of pain.",
		abilities: [
			{
				name: "Injury Freeze",
				description:
					"Prevents a wound from bleeding out or worsening, though it does not actually heal the injury.",
			},
		],
		grade: "Grade 4", // Specialized support role
	},
	{
		id: "rot-technique-decay",
		characterId: 193867, // Esou
		ownerName: "Esou",
		techniqueName: "Rot Technique: Decay",
		type: "Innate Technique",
		description: "A shared technique among the Death Paintings that uses blood to rot the victim's flesh and soul.",
		abilities: [
			{
				name: "Maximum: Wing King",
				description:
					"Manifests wings made of blood that fire toxic needles, tracking the target with high precision.",
			},
		],
		grade: "Special Grade", // Cursed Womb: Death Painting
	},
	{
		id: "akari-barrier-technique",
		characterId: 190479, // Akari Nitta
		ownerName: "Akari Nitta",
		techniqueName: "Barrier Technique",
		type: "Barrier Technique",
		description:
			"An auxiliary manager at Tokyo Jujutsu High who specializes in creating and maintaining curtains for missions.",
		abilities: [
			{
				name: "Curtain (Tobari)",
				description:
					"A large-scale barrier used to conceal Jujutsu activities and force cursed spirits to manifest.",
			},
		],
		grade: "Grade 4", // Administrative support role
	},
	{
		id: "star-rage",
		characterId: 178998, // Yuki Tsukumo
		ownerName: "Yuki Tsukumo",
		techniqueName: "Star Rage (Bom-Ba-Ye)",
		type: "Innate Technique",
		description:
			"A powerful technique that allows the user to add imaginary mass to themselves and their shikigami.",
		abilities: [
			{
				name: "Imaginary Mass",
				description:
					"Increases her physical striking power to a conceptual level, allowing her to punch through almost anything without being slowed down.",
			},
			{
				name: "Garuda (Shikigami)",
				description:
					"The only object other than Yuki that can be affected by Star Rage, turning the shikigami into a cursed tool with immense mass.",
			},
		],
		domainExpansion: {
			name: "Unnamed Domain",
			description:
				"Though she possesses a Domain Expansion, its specific name and effects remain largely shrouded in mystery.",
			appearance: "An overwhelming expansion of cursed energy used to counter other high-level domains.",
		},
		grade: "Special Grade",
	},
	{
		id: "miracles",
		characterId: 189222, // Haruta Shigemo
		ownerName: "Haruta Shigemo",
		techniqueName: "Miracles",
		type: "Innate Technique",
		description:
			"A technique that erases small, everyday 'miracles' from the user's life and stores them to be used as life-saving luck during critical moments.",
		abilities: [
			{
				name: "Miracle Storage",
				description:
					"Automatically consumes stored miracles to prevent fatal injuries, making the user incredibly difficult to kill despite poor combat skills.",
			},
			{
				name: "Cursed Hand Sword",
				description: "Uses a unique cursed tool shaped like a hand that can move and grip independently.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "ice-formation",
		characterId: 189223, // Uraume
		ownerName: "Uraume",
		techniqueName: "Ice Formation",
		type: "Innate Technique",
		description:
			"An ancient and powerful technique that allows the user to create and manipulate massive amounts of ice at will.",
		abilities: [
			{
				name: "Frost Calm",
				description:
					"Freezes targets instantly with a blast of super-cooled cursed energy, making their bodies brittle and immobile.",
			},
			{
				name: "Ice Fall",
				description:
					"Creates massive ice pillars or shards that fall from the sky or sprout from the ground to crush opponents.",
			},
		],
		grade: "Special Grade", // Equivalent power level as Sukuna's direct subordinate
	},
	{
		id: "moon-dregs",
		characterId: 164480, // Junpei Yoshino
		ownerName: "Junpei Yoshino",
		techniqueName: "Moon Dregs",
		type: "Innate Technique",
		description: "A technique that summons a jellyfish-like shikigami capable of secreting deadly poison.",
		abilities: [
			{
				name: "Poison Secretion",
				description:
					"The jellyfish shikigami can paralyze or melt targets with varying levels of toxic stings.",
			},
			{
				name: "Physical Shield",
				description:
					"Uses the large, translucent body of the jellyfish to absorb physical impacts and protect the user.",
			},
		],
		grade: "Grade 4", // Based on his brief time as a practitioner
	},
];
