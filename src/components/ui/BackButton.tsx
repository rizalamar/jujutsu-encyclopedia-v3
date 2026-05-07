import { ChevronLeft } from "lucide-react";

export default function BackButton({ ...props }) {
	return (
		<button
			className="fixed z-40 flex items-center gap-2 px-4 py-2 transition-all border rounded-full cursor-pointer top-24 left-6 bg-jjk-blue/50 backdrop-blur-md border-white/10 hover:bg-jjk-accent hover:text-jjk-dark group"
			{...props}
		>
			<ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
			<p>Back</p>
		</button>
	);
}
