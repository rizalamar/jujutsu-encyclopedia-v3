interface Props {
	summon: string;
}

export default function Loading({ summon }: Props) {
	return (
		<div className="flex items-center justify-center min-h-screen bg-jjk-dark text-jjk-accent">
			<div className="text-4xl animate-pulse font-permanent">{summon}...</div>
		</div>
	);
}
