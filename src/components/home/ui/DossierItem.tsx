interface Props {
	label: string;
	value: string | number;
}

export default function DossierItem({ label, value }: Props) {
	return (
		<div className="space-y-1">
			<p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</p>
			<p className="text-base font-bold text-gray-200">{value}</p>
		</div>
	);
}
