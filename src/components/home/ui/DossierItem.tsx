import type { ReactNode } from "react";

interface Props {
	label: string;
	value: ReactNode;
	className?: string;
}

export default function DossierItem({ label, value, className = "" }: Props) {
	return (
		<div className={`space-y-1 ${className}`}>
			<p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</p>
			<div className="text-base font-bold leading-snug text-gray-200">{value}</div>
		</div>
	);
}
