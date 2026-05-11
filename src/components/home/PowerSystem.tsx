import JujutsuPowerSystem from "../ui/JujutsuPowerSystem";

export default function PowerSystem() {
	return (
		<section className="px-8 py-16 md:px-16 bg-jjk-dark/50">
			<div className="mb-12">
				<h2 className="pl-6 mb-2 text-3xl font-bold tracking-tighter border-l-8 font-space border-jjk-accent">
					System of Power
				</h2>
				<p className="text-gray-400">
					A comprehensive guide to the mystical laws, energy sources, and deadly techiniques that govern the
					world of Jujutsu.
				</p>
			</div>

			<JujutsuPowerSystem />
		</section>
	);
}
