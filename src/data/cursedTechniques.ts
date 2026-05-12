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
		status: "Active",
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
		status: "Sealed",
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
		status: "Active",
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
		status: "Active",
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
		status: "Active",
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
		status: "Active",
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
		status: "Active",
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
		status: "Deceased",
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
		status: "Deceased",
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
		status: "Deceased",
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
		status: "Active",
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
		status: "Active",
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
		status: "Deceased",
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
		status: "Deceased",
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
		status: "Deceased",
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
				name: "Kaikochi (Number One)",
				description: "Summons a homing needle made of cursed energy to pierce the target.",
			},
			{
				name: "Reishi (Number Two)",
				description:
					"Coats the user in a fluid-like cursed energy that grants high-speed movement and evasion.",
			},
			{
				name: "Kirin (Number Three)",
				description:
					"Increases the user's durability and numbs pain, allowing them to withstand heavy attacks.",
			},
			{
				name: "Ryu (Number Four)",
				description:
					"The most powerful summon; it manifests raw cursed energy in the form of a dragon for a devastating physical strike.",
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
		status: "Active",
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
		status: "Deceased",
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
		status: "Deceased",
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
		status: "Deceased",
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
		status: "Deceased",
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
		status: "Active",
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
	{
		id: "cp-034",
		characterId: 189224, // Mimiko Hasaba
		ownerName: "Mimiko Hasaba",
		techniqueName: "Doll Manipulation",
		type: "Innate Technique",
		description:
			"A technique that allows the user to manipulate a stuffed doll to hang targets or manifest cursed effects based on the doll's condition.",
		abilities: [
			{
				name: "Lasso Hang",
				description:
					"By placing a noose around her doll's neck, she can manifest a rope that hangs and strangulates the intended target.",
			},
		],
		grade: "Grade 2", // Follower of Geto
	},
	{
		id: "cp-035",
		characterId: 189225, // Nanako Hasaba
		ownerName: "Nanako Hasaba",
		techniqueName: "Camera Manipulation",
		type: "Innate Technique",
		description:
			"A technique that manipulates reality through a cell phone camera; whatever happens to the subject in the photo happens in real life.",
		abilities: [
			{
				name: "Subject Manipulation",
				description:
					"By taking a photo of a target, she can alter their physical state or position based on how she interacts with the digital image.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "cp-036",
		characterId: 184437, // Atsuya Kusakabe
		ownerName: "Atsuya Kusakabe",
		techniqueName: "New Shadow Style",
		type: "Barrier Technique",
		description:
			"The strongest Grade 1 sorcerer without an innate technique, relying entirely on masterful swordplay and anti-domain barriers.",
		abilities: [
			{
				name: "Simple Domain",
				description:
					"Automatically parries or intercepts any attack that enters his domain's radius with god-like reflexes.",
			},
			{
				name: "Evening Moon",
				description:
					"A specialized sword stance used to strengthen the defensive and offensive capabilities of his Simple Domain.",
			},
		],
		grade: "Grade 1",
	},
	{
		id: "cp-037",
		characterId: 189226, // Larue
		ownerName: "Larue",
		techniqueName: "Heart Catch",
		type: "Innate Technique",
		description:
			"A technique that allows the user to manifest a giant pair of phantom hands that can grab or strike targets.",
		abilities: [
			{
				name: "Phantom Grip",
				description:
					"Manifests a large hand that can physically restrain even powerful opponents, even if they cannot see the spirit energy.",
			},
		],
		grade: "Grade 1", // Former member of Geto's inner circle
	},
	{
		id: "cp-038",
		characterId: 237184, // Toshihisa Negi
		ownerName: "Toshihisa Negi",
		techniqueName: "Cursed Energy Strike",
		type: "Innate Technique",
		description:
			"A technique that allows the user to manipulate and release cursed energy through physical strikes, often leaving a scarred mark on his face as a result of his power.",
		abilities: [
			{
				name: "Enhanced Physical Prowess",
				description:
					"Focuses cursed energy into his limbs to significantly increase the impact of his hand-to-hand combat.",
			},
		],
		grade: "Grade 2", // Member of Geto's inner circle
	},
	{
		id: "cp-039",
		characterId: 189227, // Miguel Oduol
		ownerName: "Miguel Oduol",
		techniqueName: "Hakuna Matata (Cursed Tool Mastery)",
		type: "Innate Technique",
		description:
			"While his specific innate technique remains largely hidden, he is a master of using powerful cursed tools and has immense physical resilience.",
		abilities: [
			{
				name: "Black Rope Mastery",
				description:
					"Expertly utilizes the Black Rope, a special cursed tool that can disrupt and cancel out other sorcerers' cursed techniques upon contact.",
			},
			{
				name: "High-Level Combat Intuition",
				description:
					"Possesses extraordinary physical durability and speed, allowing him to survive a direct encounter with Satoru Gojo.",
			},
		],
		grade: "Grade 1", // Equivalent to a high-ranking sorcerer
	},
	{
		id: "cp-040",
		characterId: 184439, // Jiro Awasaka
		ownerName: "Jiro Awasaka",
		techniqueName: "Inverse",
		type: "Innate Technique",
		description:
			"A powerful defensive technique that reverses the force of attacks; strong hits become weak, while weak hits become strong.",
		abilities: [
			{
				name: "Damage Inversion",
				description:
					"Allows the user to shrug off devastating blows from powerful sorcerers, though it leaves them vulnerable to light, calculated taps.",
			},
		],
		grade: "Grade 2", // Dangerous curse user
	},
	{
		id: "cp-041",
		characterId: 232264, // Bayer
		ownerName: "Bayer",
		techniqueName: "Cursed Tool Mastery",
		type: "Innate Technique",
		description:
			"The most skilled member of the 'Q' organization who utilizes specialized combat skills and cursed tools.",
		abilities: [
			{
				name: "Combat Proficiency",
				description:
					"A master of close-quarters combat, though he was quickly defeated by Satoru Gojo's overwhelming power.",
			},
		],
		grade: "Grade 1", // Elite operative of Q
	},
	{
		id: "cp-042",
		characterId: 235334, // Niji Ebina
		ownerName: "Niji Ebina",
		techniqueName: "Shikigami Manipulation",
		type: "Innate Technique",
		description: "A member of the 'Q' organization who can summon and control large, insect-like cursed spirits.",
		abilities: [
			{
				name: "Shikigami Summon",
				description: "Manifests a massive insectoid shikigami to attack enemies or provide defensive cover.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "cp-043",
		characterId: 235327, // Ogami (Elderly Curse User)
		ownerName: "Ogami",
		techniqueName: "Seance Technique",
		type: "Innate Technique",
		description:
			"Allows the user to transform themselves or a willing participant into a deceased person by consuming their remains.",
		abilities: [
			{
				name: "Body Seance",
				description:
					"Manifests the physical information and raw power of a dead person into a living vessel, as seen with Toji Fushiguro.",
			},
		],
		grade: "Grade 2", // Specialized support antagonist
	},
	{
		id: "cp-044",
		characterId: 234682, // ID khusus untuk Assassin dari grup Q
		ownerName: "Elderly Curse User (Q Assassin)",
		techniqueName: "Paper Shikigami Manipulation",
		type: "Innate Technique",
		description: "A technique that uses cursed paper charms to manifest and control multiple bird-like shikigami.",
		abilities: [
			{
				name: "Paper Bird Swarm",
				description:
					"Creates a large number of shikigami from paper to overwhelm the opponent and obscure their vision.",
			},
		],
		grade: "Grade 3", // Easily defeated by Suguru Geto
	},
	{
		id: "cp-045",
		characterId: 247813, // Housoba (Smallpox Deity)
		ownerName: "Housoba",
		techniqueName: "Graveyard Orbit",
		type: "Innate Technique",
		description:
			"A specialized domain-based technique used by the Special Grade Disease Curse to trap targets in a lethal cycle of burial.",
		abilities: [
			{
				name: "Three-Count Burial",
				description:
					"Traps the target in a coffin, buries it with a giant gravestone, and starts a three-second countdown; if not escaped, the target dies of smallpox.",
			},
		],
		domainExpansion: {
			name: "Graveyard Orbit",
			description: "A simple yet deadly domain that automates its burial technique to ensure a guaranteed hit.",
			appearance: "A desolate, dark graveyard filled with massive tombstones.",
		},
		grade: "Special Grade",
	},
	{
		id: "cp-046",
		characterId: 234839, // Kou-Guy
		ownerName: "Kou-Guy",
		techniqueName: "Cursed Energy Compression",
		type: "Innate Technique",
		description:
			"One of the curse users who attempted to claim the bounty on Riko Amanai, focusing on raw cursed energy output.",
		abilities: [
			{
				name: "Energy Blast",
				description: "Compresses cursed energy into concentrated bursts to strike targets from a distance.",
			},
		],
		grade: "Grade 3",
	},
	{
		id: "cp-047",
		characterId: 232265, // Kokun
		ownerName: "Kokun",
		techniqueName: "Reinforced Physicality",
		type: "Innate Technique",
		description: "A bounty hunter who works alongside Kou-Guy, specializing in ambushing sorcerers.",
		abilities: [
			{
				name: "Ambush Strike",
				description: "Utilizes speed and sudden bursts of cursed energy to overwhelm non-combatants.",
			},
		],
		grade: "Grade 3",
	},
	{
		id: "cp-048",
		characterId: 189229, // Misato Kuroi
		ownerName: "Misato Kuroi",
		techniqueName: "Basic Barrier Techniques",
		type: "Barrier Technique",
		description:
			"The dedicated caretaker of the Star Plasma Vessel, trained in basic Jujutsu to protect her charge.",
		abilities: [
			{
				name: "Cursed Tool Combat",
				description:
					"Skilled in using simple cursed tools and basic hand-to-hand combat to fend off minor threats.",
			},
		],
		grade: "Non-Sorcerer",
	},
	{
		id: "cp-049",
		characterId: 240069, // Eight-Handled Sword Divergent Sila Divine General Mahoraga
		ownerName: "Mahoraga",
		techniqueName: "Eight-Handled Sword Divergent Sila",
		type: "Shikigami Ability",
		description:
			"The most powerful shikigami of the Ten Shadows Technique, known for its ability to adapt to any and all phenomena.",
		abilities: [
			{
				name: "Dharma Wheel Adaptation",
				description:
					"The wheel on its head spins to adapt to any attack or environment. Once adapted, the previous attack becomes useless against it.",
			},
			{
				name: "Sword of Extermination",
				description:
					"A blade attached to its arm clad in positive energy, specifically designed to vaporize cursed spirits instantly.",
			},
		],
		grade: "Special Grade",
	},
	{
		id: "cp-050",
		characterId: 235499, // Ogami's Grandson
		ownerName: "Ogami's Grandson",
		techniqueName: "Seance Vessel",
		type: "Innate Technique",
		description:
			"Acts as a physical medium for his grandmother's Seance Technique, allowing his body to be overwritten by the physical data of the deceased.",
		abilities: [
			{
				name: "Body Transformation",
				description:
					"Consumes a piece of a dead person's remains to take on their physical appearance and raw physical power (notably used for Toji Fushiguro).",
			},
		],
		grade: "Grade 3", // Based on his own combat skill
	},
	{
		id: "cp-051",
		characterId: 275514, // Paper Bag Sorcerer (Kumabayer)
		ownerName: "Paper Bag Sorcerer",
		techniqueName: "Cloning Technique",
		type: "Innate Technique",
		description:
			"A mysterious curse user working for the Q organization who can create multiple autonomous clones of himself.",
		abilities: [
			{
				name: "Multi-Cloning",
				description:
					"Creates up to five identical clones that can act independently, making it difficult for opponents to identify the original body.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "cp-052",
		characterId: 233426, // Shigeru Sonoda
		ownerName: "Shigeru Sonoda",
		techniqueName: "Non-Sorcerer Management",
		type: "None",
		description:
			"The representative of the Bansei Council within the Star Religious Group. He lacks cursed techniques but possesses immense political and financial influence.",
		abilities: [
			{
				name: "Organizational Leadership",
				description:
					"Orchestrated the bounty on Riko Amanai and managed the religious fanatics of the Time Vessel Association.",
			},
		],
		grade: "Non-Sorcerer",
	},
	{
		id: "cp-053",
		characterId: 213191, // Manami Suda
		ownerName: "Manami Suda",
		techniqueName: "Cursed Energy Manipulation",
		type: "Innate Technique",
		description:
			"One of Suguru Geto's most loyal commanders who manages the logistical and financial operations of his organization.",
		abilities: [
			{
				name: "Support Sorcery",
				description:
					"While primarily an administrator, she is a capable curse user who assists in large-scale operations and strategic planning.",
			},
		],
		grade: "Grade 2",
	},
	{
		id: "cp-054",
		characterId: 228716, // Ui Ui
		ownerName: "Ui Ui",
		techniqueName: "Teleportation Technique",
		type: "Innate Technique",
		description:
			"A highly sophisticated spatial technique that allows the user to teleport themselves and others over vast distances instantly.",
		abilities: [
			{
				name: "Spatial Teleportation",
				description:
					"Can swap the positions of people or objects, or move them to a marked location, making him the ultimate support asset.",
			},
			{
				name: "Simple Domain",
				description:
					"Capable of deploying a Simple Domain to protect himself and his sister from the guaranteed-hit effects of an enemy's Domain Expansion.",
			},
		],
		grade: "Grade 2", // High-level utility sorcerer
	},
	{
		id: "cp-055",
		characterId: 288063,
		ownerName: "Rin Amai",
		techniqueName: "Sugar Manipulation",
		type: "Innate Technique",
		description:
			"A technique that allows the user to manipulate sugar within their body and output it for various effects, such as stabilizing others.",
		abilities: [
			{
				name: "Sugar Discharge",
				description: "Emits sugar to help recover energy or stabilize someone's physical condition.",
			},
		],
		status: "Active",
		grade: "Grade 3", // Berdasarkan kontribusi tempurnya
	},
	{
		id: "cp-056",
		characterId: 287594,
		ownerName: "Furudate",
		techniqueName: "None",
		type: "None",
		description:
			"An assistant director at Jujutsu High who specializes in administrative support and barrier deployment.",
		abilities: [
			{
				name: "Curtain Deployment",
				description: "The ability to cast a barrier that hides jujutsu activity from the non-sorcerer world.",
			},
		],
		status: "Active",
		grade: "Non-Sorcerer", // Meskipun bisa jujutsu dasar, dia staff administratif
	},
	{
		id: "cp-057",
		characterId: 189233,
		ownerName: "Tsumiki Fushiguro",
		techniqueName: "Innate Technique (Vessel)",
		type: "Innate Technique",
		description:
			"Megumi's sister who became a vessel for an ancient sorcerer, granting her access to ancient cursed energy.",
		abilities: [
			{
				name: "Cursed Energy Resonance",
				description: "A heightened sensitivity and capacity for cursed energy following her awakening.",
			},
		],
		status: "Active",
		grade: "Grade 1", // Karena potensinya sebagai vessel penyihir kuno
	},
	{
		id: "cp-058",
		characterId: 288069,
		ownerName: "Haba",
		techniqueName: "Propeller Technique",
		type: "Innate Technique",
		description:
			"Manifests mechanical propellers on the head, granting the user high-speed flight and cutting power.",
		abilities: [
			{
				name: "Aerial Shredder",
				description: "Uses the rotating blades to slice through opponents while maintaining aerial dominance.",
			},
		],
		status: "Active",
		grade: "Grade 2",
	},
	{
		id: "cp-059",
		characterId: 203839,
		ownerName: "Kinji Hakari",
		techniqueName: "Private Pure Love Train",
		type: "Innate Technique",
		description: "A complex technique based on a pachinko machine theme, revolving around probability and luck.",
		abilities: [
			{
				name: "Infinite Cursed Energy",
				description:
					"Upon hitting a jackpot, his body overflows with infinite cursed energy, making him temporarily immortal.",
			},
		],
		domainExpansion: {
			name: "Idle Death Gamble",
			description: "A non-lethal domain that forces a game of luck. Winning grants massive buffs.",
			appearance: "A stylized train station inspired by romance manga.",
		},
		status: "Active",
		grade: "Special Grade", // Setara karena keabadian sementaranya
	},
	{
		id: "cp-060",
		characterId: 288067,
		ownerName: "Chizuru Hari",
		techniqueName: "Propeller Technique",
		type: "Innate Technique",
		description: "A variant of the propeller technique that manifests blades on the user's limbs.",
		abilities: [
			{
				name: "Limb Blade Strike",
				description: "Uses propellers on hands and feet for rapid close-quarter slashing.",
			},
		],
		status: "Active",
		grade: "Grade 2",
	},
	{
		id: "cp-061",
		characterId: 288066,
		ownerName: "Iori Hazenoki",
		techniqueName: "Explosive Flesh",
		type: "Innate Technique",
		description:
			"Allows the user to detach body parts (like teeth or eyes) and turn them into powerful explosives.",
		abilities: [
			{
				name: "Flesh Bomb",
				description:
					"The user throws body parts that detonate with massive force, then regenerates them using RCT.",
			},
		],
		status: "Active",
		grade: "Grade 1",
	},
	{
		id: "cp-062",
		characterId: 203810,
		ownerName: "Hiromi Higuruma",
		techniqueName: "Executioner's Confiscation",
		type: "Innate Technique",
		description: "A law-themed technique that utilizes a judge-like shikigami to evaluate and punish crimes.",
		abilities: [
			{
				name: "Judgeman's Decree",
				description: "Summons a shikigami that enforces the rules of a courtroom and delivers verdicts.",
			},
		],
		domainExpansion: {
			name: "Deadly Sentencing",
			description: "A domain that forbids all violence and forces a legal trial.",
			appearance: "A minimalist, high-ceiling courtroom.",
		},
		status: "Active",
		grade: "Grade 1", // Sangat kuat meski baru terbangkitkan
	},
	{
		id: "cp-063",
		characterId: 201644,
		ownerName: "Kirara Hoshi",
		techniqueName: "Love Rendezvous",
		type: "Innate Technique",
		description:
			"A spatial technique based on the Southern Cross constellation that controls the distance between objects.",
		abilities: [
			{
				name: "Constellation Marking",
				description:
					"Marks targets with stars; they must follow a specific orbital order or be repelled/attracted forcefully.",
			},
		],
		status: "Active",
		grade: "Grade 1", // Tekniknya sangat sulit dikalahkan tanpa strategi matang
	},
	{
		id: "cp-064",
		characterId: 207600,
		ownerName: "Ryu Ishigori",
		techniqueName: "Cursed Energy Discharge",
		type: "Innate Technique",
		description:
			"A technique that allows the user to discharge massive amounts of cursed energy with immense explosive power, regardless of whether they have recently used a domain.",
		abilities: [
			{
				name: "Granite Blast",
				description:
					"A powerful beam of cursed energy fired from his hair, capable of leveling entire buildings.",
			},
		],
		status: "Active",
		grade: "Grade 1", // Setara Grade 1 spesial/kandidat Special Grade karena output energinya tertinggi.
	},
	{
		id: "cp-065",
		characterId: 238440,
		ownerName: "Jin Itadori",
		techniqueName: "None",
		type: "None",
		description:
			"Yuji Itadori's father. While he appears to be a normal human, his lineage is tied to the complex plans of Kenjaku.",
		abilities: [],
		status: "Unknown",
		grade: "Non-Sorcerer",
	},
	{
		id: "cp-066",
		characterId: 188245,
		ownerName: "Wasuke Itadori",
		techniqueName: "None",
		type: "None",
		description:
			"Yuji's grandfather who raised him. He possessed no cursed techniques but had a strong will and deep care for his grandson.",
		abilities: [],
		status: "Deceased",
		grade: "Non-Sorcerer",
	},
	{
		id: "cp-067",
		characterId: 283296,
		ownerName: "Kaori Itadori",
		techniqueName: "Antigravity System",
		type: "Innate Technique",
		description:
			"An innate technique that allows the user to negate gravity within a specific range around themselves.",
		abilities: [
			{
				name: "Antigravity Field",
				description:
					"Creates a zone where gravitational force is nullified, used both for defense and tactical movement.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
	{
		id: "cp-068",
		characterId: 245297,
		ownerName: "Judgeman",
		techniqueName: "Legal Procedure Enforcement",
		type: "Shikigami Ability",
		description:
			"The shikigami linked to Hiromi Higuruma's technique. It acts as an impartial judge during his domain's trials.",
		abilities: [
			{
				name: "Evidence Presentation",
				description:
					"Presents evidence of the target's past crimes to the prosecutor (Higuruma) to determine a verdict.",
			},
		],
		status: "Active",
		grade: "Grade 1",
	},
	{
		id: "cp-069",
		characterId: 204748,
		ownerName: "Hajime Kashimo",
		techniqueName: "Mythic Beast Amber",
		type: "Innate Technique",
		description:
			"A one-time-use technique that reshapes the user's body to manifest any electrical phenomena, at the cost of the user's life after use.",
		abilities: [
			{
				name: "Lightning Discharge",
				description: "Fires a guaranteed-hit lightning bolt by accumulating electrical charges on the target.",
			},
		],
		status: "Active",
		grade: "Special Grade", // Mengingat kekuatannya sebagai penyihir terkuat di masanya.
	},
	{
		id: "cp-070",
		characterId: 196089,
		ownerName: "Kenjaku",
		techniqueName: "Body Hopping / Cursed Spirit Manipulation",
		type: "Innate Technique",
		description:
			"An ancient sorcerer who transplants their brain into different vessels to gain their techniques and memories.",
		abilities: [
			{
				name: "Cursed Spirit Manipulation",
				description: "The ability to absorb and control cursed spirits (taken from Suguru Geto's body).",
			},
			{
				name: "Antigravity System (Lapsed)",
				description: "Uses the technique of Kaori Itadori to manipulate gravity for defense.",
			},
		],
		domainExpansion: {
			name: "Womb Profusion",
			description:
				"An open-barrier domain that manifests a pillar of cursed spirits to crush everything in its radius.",
			appearance: "A grotesque pillar made of multiple cursed spirits and distorted bodies.",
		},
		status: "Active",
		grade: "Special Grade",
	},
	{
		id: "cp-071",
		characterId: 285877,
		ownerName: "Kogane",
		techniqueName: "Game Administration",
		type: "Shikigami Ability",
		description:
			"The official manager shikigami for the Culling Game. Each player is assigned one to monitor rules and points.",
		abilities: [
			{
				name: "Point Management",
				description:
					"Tracks and updates the points of the player it is assigned to, facilitating rule additions.",
			},
		],
		status: "Active",
		grade: "Non-Sorcerer",
	},
	{
		id: "cp-072",
		characterId: 208196,
		ownerName: "Kuroourushi",
		techniqueName: "Cockroach Manipulation",
		type: "Innate Technique",
		description:
			"A Special Grade cursed spirit that can control massive swarms of cockroaches and reproduce endlessly through cursed energy.",
		abilities: [
			{
				name: "Fester Life Blade",
				description:
					"A sword that injects cockroach eggs into the target, which hatch instantly to consume the victim from within.",
			},
		],
		status: "Active",
		grade: "Special Grade",
	},
	{
		id: "cp-073",
		characterId: 199938,
		ownerName: "Hana Kurusu",
		techniqueName: "Jacob's Ladder",
		type: "Innate Technique",
		description:
			"A technique that can nullify and extinguish any cursed technique, cursed tool, or barrier, including the seal on the Prison Realm.",
		abilities: [
			{
				name: "Technique Extinguishment",
				description: "Manifests light that purifies and erases cursed energy and evil intent.",
			},
		],
		status: "Active",
		grade: "Special Grade", // Karena statusnya sebagai vessel "Angel".
	},
	{
		id: "cp-074",
		characterId: 288062,
		ownerName: "Dhruv Lakdawalla",
		techniqueName: "Shikigami Orbit",
		type: "Shikigami Ability",
		description:
			"An ancient sorcerer who creates giant shikigami. The paths his shikigami take become the boundaries of his domain.",
		abilities: [
			{
				name: "Orbital Domain",
				description:
					"Manifests a domain without a barrier simply by having his shikigami circle a specific area.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
	{
		id: "cp-075",
		characterId: 291255,
		ownerName: "Kieta Oor",
		techniqueName: "Unconfirmed",
		type: "None",
		description:
			"A participant in the Culling Game whose specific abilities were not fully explored before their elimination.",
		abilities: [],
		status: "Deceased",
		grade: "Grade 3",
	},
	{
		id: "cp-076",
		characterId: 189234,
		ownerName: "Rika Orimoto",
		techniqueName: "Cursed Energy Mimicry / Storage",
		type: "Shikigami Ability",
		description:
			"The 'Queen of Curses' who serves as a massive storage of cursed energy and tools for Yuta Okkotsu.",
		abilities: [
			{
				name: "Copy / Mimicry",
				description:
					"Allows the user to mirror and utilize the cursed techniques of others after consuming a part of them.",
			},
		],
		status: "Deceased", // Spirit form is an extension of Yuta's power
		grade: "Special Grade",
	},
	{
		id: "cp-077",
		characterId: 207021,
		ownerName: "Reggie Star",
		techniqueName: "Contractual Reification",
		type: "Innate Technique",
		description:
			"A technique that allows the user to manifest the objects or effects described on a physical contract or receipt by burning it with cursed energy.",
		abilities: [
			{
				name: "Object Manifestation",
				description: "Can summon anything from cars to house-sized weights based on his collected receipts.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
	{
		id: "cp-078",
		characterId: 228713,
		ownerName: "Fumihiko Takaba",
		techniqueName: "Comedian",
		type: "Innate Technique",
		description:
			"An incredibly powerful technique that makes anything the user thinks is funny become a reality, capable of even negating Gojo's infinity.",
		abilities: [
			{
				name: "Reality Manipulation (Humor)",
				description:
					"Manifests gags and slapstick logic into the real world, though the user is unaware of the technique's true nature.",
			},
		],
		status: "Active",
		grade: "Special Grade", // Potentially the strongest technique in existence
	},
	{
		id: "cp-079",
		characterId: 236446,
		ownerName: "Tengen",
		techniqueName: "Immortality",
		type: "Barrier Technique",
		description:
			"An ancient sorcerer who maintains the barriers throughout Japan. They are more of a concept than a person after evolving.",
		abilities: [
			{
				name: "Barrier Mastery",
				description:
					"The world's greatest barrier user, maintaining the security of Jujutsu High and the wider world.",
			},
		],
		status: "Active",
		grade: "Special Grade",
	},
	{
		id: "cp-080",
		characterId: 207779,
		ownerName: "Takako Uro",
		techniqueName: "Sky Manipulation",
		type: "Innate Technique",
		description:
			"Allows the user to treat the sky as if it were a physical surface, pulling and stretching space like a thin film.",
		abilities: [
			{
				name: "Thin Ice Breaker",
				description:
					"Strikes the surface of the 'sky' to send a shockwave through the air that hits the target directly.",
			},
		],
		status: "Active",
		grade: "Grade 1",
	},
	{
		id: "cp-081",
		characterId: 193907,
		ownerName: "Naoya Zenin",
		techniqueName: "Projection Sorcery",
		type: "Inherited Technique",
		description:
			"A Zenin clan technique that divides one second into 24 frames. The user must track their predetermined movements or be frozen.",
		abilities: [
			{
				name: "Supersonic Speed",
				description:
					"By following the 24-frame rule, the user can accelerate to speeds that make them appear as a blur.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
	{
		id: "cp-082",
		characterId: 248747,
		ownerName: "Ogi Zenin",
		techniqueName: "Blazing Courage",
		type: "Innate Technique",
		description: "A technique that coats the user's sword in intense flames using cursed energy.",
		abilities: [
			{
				name: "Flame Slash",
				description: "Engulfs the blade in fire to increase cutting power and burn the opponent.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
	{
		id: "cp-083",
		characterId: 248901,
		ownerName: "Jinichi Zenin",
		techniqueName: "Missile Fist",
		type: "Innate Technique",
		description: "Manifests massive, ghost-like fists to pummel the enemy with overwhelming force.",
		abilities: [
			{
				name: "Giant Fist Barrage",
				description: "Summons multiple large-scale cursed energy fists for long-range impact.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
	{
		id: "cp-084",
		characterId: 248898,
		ownerName: "Ranta Zenin",
		techniqueName: "Glare",
		type: "Innate Technique",
		description: "A technique that uses the user's gaze to physically restrain a target's movement.",
		abilities: [
			{
				name: "Visual Binding",
				description:
					"Manifests giant floating eyes that lock the target in place as long as the user maintains focus.",
			},
		],
		status: "Deceased",
		grade: "Grade 2",
	},
	{
		id: "cp-085",
		characterId: 186825,
		ownerName: "Setsuko Sasaki",
		techniqueName: "None",
		type: "None",
		description: "A member of the Occult Research Club and Yuji's school friend. She has no jujutsu powers.",
		abilities: [],
		status: "Active",
		grade: "Non-Sorcerer",
	},
	{
		id: "cp-086",
		characterId: 248961,
		ownerName: "Chojuro Zenin",
		techniqueName: "Earth Manipulation",
		type: "Innate Technique",
		description:
			"A technique that allows the user to manipulate the earth, specifically manifesting large hands made of stone and soil.",
		abilities: [
			{
				name: "Stone Palm Bind",
				description: "Creates massive hands from the ground to crush or restrain the target.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
	{
		id: "cp-087",
		characterId: 248962,
		ownerName: "Nobuaki Zenin",
		techniqueName: "Unconfirmed (Cursed Tool Mastery)",
		type: "None",
		description:
			"The captain of the 'Kukuru' unit within the Zenin clan, specializing in combat with specialized cursed tools.",
		abilities: [
			{
				name: "Tactical Command",
				description: "Expert in leading groups of low-ranking sorcerers in coordinated weapon attacks.",
			},
		],
		status: "Deceased",
		grade: "Grade 1",
	},
];
