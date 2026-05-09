interface Props {
	page: number;
	onPage: (page: number) => void;
	totalPages: number;
}

export default function CharacterListPagination({ page, onPage, totalPages }: Props) {
	return (
		<div className="flex items-center justify-center gap-4 mt-12">
			<button
				onClick={() => onPage(page - 1)}
				disabled={page === 1}
				className="px-4 py-2 border rounded cursor-pointer disabled:opacity-30"
			>
				Previous
			</button>
			<span>
				Page {page} of {totalPages}
			</span>
			<button
				onClick={() => onPage(page + 1)}
				disabled={page === totalPages}
				className="px-4 py-2 border rounded cursor-pointer disabled:opacity-30"
			>
				Next
			</button>
		</div>
	);
}
