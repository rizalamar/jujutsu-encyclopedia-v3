import { ShieldCheck, X } from "lucide-react";
import { gradingLoreHelp } from "../../../data/gradingHelp";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function GradingInfoModal({ isOpen, onClose }: Props) {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-6">
			{/* Backdrop */}
			<div className="absolute inset-0 bg-jjk-dark/80 backdrop-blur-md animate-in fade-in duration-300" />

			{/* Modal */}
			<div className="relative w-full max-w-2xl bg-jjk-blue/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in no-scrollbar duration-300">
				{/* Decorative Header */}
				<div className="bg-jjk-accent/10 border-b border-white/5 p-6 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="bg-jjk-accent p-2 rounded-lg text-jjk-dark">
							<ShieldCheck size={20} />
						</div>

						<div className="">
							<h3 className="font-black tracking-widest text-sm uppercase text-jjk-accent">
								{gradingLoreHelp.title}
							</h3>
							<p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
								Classified Information
							</p>
						</div>
					</div>
					<button
						onClick={onClose}
						className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white cursor-pointer"
					>
						<X size={20} />
					</button>
				</div>

				{/* Lore Content */}
				<div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
					<p className="text-gray-300 leading-relaxed italic border-l-2 border-jjk-accent/30 pl-4">
						{gradingLoreHelp.overview}
					</p>

					<div className="grid gap-8">
						{gradingLoreHelp.sections.map((section) => (
							<div key={section.id} className="space-y-3">
								<h4 className="text-xs font-black uppercase tracking-[0.3em] text-jjk-accent flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-jjk-accent rounded-full" />
									{section.title}
								</h4>
								<p className="text-sm text-gray-400 leading-relaxed pl-4">{section.content}</p>
							</div>
						))}
					</div>
				</div>

				<div className="p-6 bg-white/5 border-t border-white/5 flex justify-end">
					<button
						onClick={onClose}
						className="px-6 py-2 text-jjk-dark bg-white font-black text-xs tracking-widest uppercase rounded-lg hover:bg-jjk-accent transition-all cursor-pointer"
					>
						Understood
					</button>
				</div>
			</div>
		</div>
	);
}
