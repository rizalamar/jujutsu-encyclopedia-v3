import type { ReactNode } from "react";

interface Props {
	icon: ReactNode;
	label: string;
	value: number | null;
}

export default function StatRow({ icon, label, value }: Props) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-4">
				<div className="p-2 rounded-lg bg-white/5">{icon}</div>
				<span className="text-xs font-black tracking-widest text-gray-500 uppercase">{label}</span>
			</div>
			<span className="text-3xl italic font-black font-space">{value}</span>
		</div>
	);
}
