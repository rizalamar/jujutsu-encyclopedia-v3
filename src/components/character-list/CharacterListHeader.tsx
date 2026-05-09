interface Props {
	totalResult: number;
}

export default function CharacterListHeader({ totalResult }: Props) {
	return (
		<div className="">
			<h1 className="mb-4 text-5xl tracking-wider text-white font-permanent">
				Jujutsu Kaisen <span className="text-jjk-accent">Sorcerers</span>
			</h1>
			<p className="max-w-md text-gray-400">Showing {totalResult} characters from the selected series.</p>
		</div>
	);
}
