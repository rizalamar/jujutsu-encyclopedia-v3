interface ErrorProps {
	error: string | null;
}

export default function Error({ error }: ErrorProps) {
	return (
		<div className="flex items-center justify-center min-h-screen text-red-500 bg-jjk-dark">
			<p>Error: {error || "Failed to load data"}</p>
		</div>
	);
}
