export interface GradingFAQ {
	id: string;
	question: string;
	answer: string;
}

export const gradingLoreHelp = {
	title: "Jujutsu High: Grading Protocol",
	overview:
		"The grading system is the cornerstone of Jujutsu society. It is not just a measure of strength, but a vital administrative tool used to manage risk and ensure the survival of sorcerers during dangerous missions.",
	sections: [
		{
			id: "purpose",
			title: "The Purpose of Grading",
			content:
				"Grading exists to categorize the destructive potential of both Cursed Spirits and Sorcerers. By accurately assessing a threat, Jujutsu High can deploy the right personnel, preventing inexperienced sorcerers from facing entities far beyond their capabilities.",
		},
		{
			id: "deployment-rule",
			title: "The 1-Grade Rule",
			content:
				"To ensure a high success rate and sorcerer safety, the standard protocol is to assign a sorcerer whose rank is one level higher than the target curse. For example, a Grade 2 Sorcerer is expected to be able to exorcise a Grade 1 Cursed Spirit.",
		},
		{
			id: "promotion",
			title: "The Promotion System",
			content:
				"A sorcerer's grade is not permanent. They can be recommended for promotion by higher-ranked sorcerers (excluding their own teacher). After completing several high-difficulty missions and undergoing evaluation, their rank can be elevated.",
		},
		{
			id: "special-cases",
			title: "The 'Special' Anomaly",
			content:
				"Special Grade is an anomaly. It is reserved for those who possess power that is essentially immeasurable or national-scale. There is no 'higher' rank, and the gap between a Grade 1 and a Special Grade is often wider than the gap between all other grades combined.",
		},
	],
};
