import type { PowerSystemInfo } from "../@types/cursedPower";

export const powerSystemData: PowerSystemInfo[] = [
	{
		id: "cursed-energy",
		title: "Cursed Energy",
		description:
			"The foundational source of power in the world of Jujutsu, born from the raw negative emotions of humanity.",
		details: [
			"Origin: Cursed energy is generated from negative feelings such as grief, anger, fear, and hatred. While every human produces it, most 'leak' it into the world, leading to the birth of Cursed Spirits.",
			"Sorcerer Control: Jujutsu Sorcerers are individuals who can perceive this energy and have the mental discipline to prevent it from leaking, instead containing and channeling it within their bodies.",
			"Reinforcement: By flowing cursed energy through their physical frames, sorcerers can achieve superhuman strength, speed, and durability, allowing them to fight spirits that are otherwise immune to conventional weaponry.",
			"Output: The effectiveness of a sorcerer depends on both their total pool of energy and their 'output'—the speed and volume at which they can manifest that energy into reality.",
		],
		icon: "Zap",
	},
	{
		id: "positive-energy",
		title: "Positive Energy (RCT)",
		description:
			"Can be named Reverse Curse Technique: A sophisticated and rare energy type used primarily for regeneration and lethal combat against curses.",
		details: [
			"Multiplication: Reverse Cursed Technique (RCT) is the process of taking negative cursed energy and multiplying it by itself (- x - = +). This creates 'Positive Energy'.",
			"Medical Utility: While negative energy is destructive, positive energy is constructive. It is the only reliable way to regenerate lost limbs, heal fatal organs, and neutralize poisons.",
			"Difficulty: It is an incredibly advanced skill. Most sorcerers can only use it to heal themselves; very few, like Shoko Ieiri or Yuta Okkotsu, can 'output' it to heal others.",
			"Anti-Spirit Effect: Because Cursed Spirits are composed entirely of negative energy, a direct injection of positive energy acts like a corrosive acid, often vaporizing them instantly.",
		],
		icon: "Heart",
	},
	{
		id: "cursed-techniques",
		title: "Cursed Techniques",
		description:
			"Unique, specialized abilities that allow a sorcerer to process cursed energy into specific phenomena.",
		details: [
			"Innate Techniques: Roughly 80% of a sorcerer's talent is determined at birth. Most techniques are 'Innate', meaning they are etched into the sorcerer's brain from a young age.",
			"Inherited Techniques: Some families, like the Zenin or Gojo clans, pass down specific techniques through bloodlines, ensuring the clan maintains political and combat dominance for generations.",
			"Technique Burnout: After performing a massive feat like a Domain Expansion, a sorcerer's 'technique engine' usually overheats and becomes temporarily unusable.",
			"Simple vs. Complex: Techniques range from simple physical alterations to complex mathematical or spatial manipulations that can rewrite the laws of physics in a localized area.",
		],
		icon: "Shield",
	},
	{
		id: "domain-expansion",
		title: "Domain Expansion",
		description: "The pinnacle of Jujutsu mastery—an environment where a sorcerer's technique is absolute.",
		details: [
			"Inner World: A sorcerer uses a barrier to construct their innate domain—a physical manifestation of their soul—in the real world, trapping themselves and their opponent inside.",
			"Guaranteed Hit: Within a completed Domain, any technique used by the caster is guaranteed to hit the target, bypassing all defensive measures and evasion.",
			"Counter-Measures: To survive a Domain, one must either deploy their own Domain (leading to a clash of refinement), use 'Simple Domain' to neutralize the hit-guarantee, or break the barrier from the outside.",
			"High Cost: Expanding a domain consumes a staggering amount of cursed energy, often leaving the user vulnerable if they fail to finish the fight quickly.",
		],
		icon: "Maximize",
	},
	{
		id: "black-flash",
		title: "Black Flash (Kokusen)",
		description:
			"A spatial distortion that occurs when cursed energy is applied within a trillionth of a second of a physical strike.",
		details: [
			"The phenomenon: When the impact of a physical hit and the application of cursed energy occur within 0.000001 seconds, the energy flashes black and the power of the strike is multiplied to the power of 2.5.",
			"The Zone: No sorcerer can use Black Flash at will. However, once a sorcerer lands one, they enter a state of 'flow' or 'The Zone,' making subsequent Black Flashes significantly easier to achieve.",
			"Core Understanding: Landing a Black Flash drastically increases a sorcerer's understanding of the 'essence' of cursed energy, permanently raising their combat potential.",
			"Physical Toll: While it provides an immense power boost, the mental and physical concentration required is exhausting, often serving as the turning point in high-level battles.",
		],
		icon: "ZapOff",
	},
	{
		id: "binding-vows",
		title: "Binding Vows & Restrictions",
		description: "Sacrificial contracts that trade limitations for overwhelming power.",
		details: [
			"Equivalent Exchange: A sorcerer can voluntarily place a restriction on themselves—such as 'I will only fight at full power after 5 PM'—to gain a massive boost in cursed energy output.",
			"Revealing One's Hand: By explaining how their technique works to an opponent, a sorcerer creates a self-imposed disadvantage that jujutsu rewards with increased technique effectiveness.",
			"Heavenly Restriction: A vow imposed at birth by nature itself. For example, Toji Fushiguro and Maki Zenin traded all their cursed energy for god-like physical prowess and invisible presence.",
			"Breaking Vows: Vows with oneself only result in the loss of gained power if broken, but breaking a vow made with another can lead to catastrophic, unpredictable consequences from the universe.",
		],
		icon: "Link",
	},
	{
		id: "cursed-tools",
		title: "Cursed Tools",
		description: "Objects and weapons infused with cursed energy or specific techniques.",
		details: [
			"Grading: Like sorcerers, tools are ranked from Grade 4 to Special Grade. Higher-grade tools possess their own innate techniques or massive stores of energy.",
			"Accessibility: Cursed tools allow non-sorcerers or those with low energy to effectively harm and exorcise cursed spirits.",
			"Creation: Tools can be made by consistently imbuing an object with energy over years, or by specific techniques capable of forging them instantly.",
			"Special Grade Tools: Legendary items like 'Playful Cloud' or the 'Inverted Spear of Heaven' possess unique properties that can bypass techniques like Satoru Gojo's Infinity.",
		],
		icon: "Sword",
	},
	{
		id: "barriers",
		title: "Barriers (Kekkaijutsu)",
		description: "Techniques used to seal off, hide, or protect specific areas from spirits and humans.",
		details: [
			"The Curtain (Tobari): The most common barrier, used to hide the battlefield from the public and force cursed spirits to manifest.",
			"Conditions: Barrier masters can set specific rules for their walls, such as 'Allow anyone to enter, but no one to leave,' which strengthens the barrier's durability.",
			"Anti-Domain Techniques: Simple Domain and Falling Blossom Emotion are specialized barriers used as defensive shells to survive an opponent's Domain Expansion hit-guarantee.",
			"Complexity: High-level barriers require immense mathematical calculation and visualization; some are so complex they are considered their own form of sorcery.",
		],
		icon: "Box",
	},
	{
		id: "cursed-spirits",
		title: "Cursed Spirits",
		description:
			"Malicious entities formed from the collective negative emotions of humanity toward specific concepts.",
		details: [
			"Classification: Spirits are ranked based on the fear that birthed them. Disaster Curses (like Jogo or Hanami) represent the fear of natural elements like volcanoes and forests.",
			"Vengeful Spirits: If a sorcerer is killed without jujutsu (e.g., by a regular weapon), their soul may transform into a powerful, vengeful cursed spirit.",
			"Intelligence: Low-grade spirits are mindless monsters driven by instinct, while Special Grade spirits possess human-level intelligence, speech, and their own cursed techniques.",
			"Manifestation: They typically manifest in places where negative energy accumulates—hospitals, schools, and areas associated with trauma or fear.",
		],
		icon: "Ghost",
	},
];
