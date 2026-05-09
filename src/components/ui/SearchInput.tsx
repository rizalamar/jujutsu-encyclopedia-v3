import { Search } from "lucide-react";

interface Props {
	query: string;
	onSearch: (val: string) => void;
}

export default function SearchInput({ query, onSearch }: Props) {
	return (
		<div className="relative w-full group md:w-md">
			<Search
				size={20}
				className="absolute text-gray-500 transition-colors -translate-y-1/2 left-4 top-1/2 group-focus-within:text-jjk-accent"
			/>

			<input
				type="text"
				placeholder="Search Sorceres..."
				className="w-full py-3 pl-12 pr-6 transition-all border rounded-full outline-none bg-jjk-blue/30 border-white/20 focus: focus:border-jjk-accent/50 focus:bg-jjk-blue/50"
				value={query}
				onChange={(e) => onSearch(e.target.value)}
			/>
		</div>
	);
}
