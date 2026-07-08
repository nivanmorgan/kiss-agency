import { motion } from 'framer-motion';
import { Heading, Platforms } from '../components';
import dashboard from '../assets/imgs/dashboard.jpeg';
import { aboutSectionText } from '../utils/constants';

const About = () => {
	return (
		<section
			id="about"
			className="w-full relative py-20 lg:py-32 overflow-hidden bg-carbon-900/30"
		>
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				{/* Content Column */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="space-y-8 order-2 lg:order-1"
				>
					<Heading
						tag={aboutSectionText.tag}
						header={aboutSectionText.heading}
						content={aboutSectionText.text}
						light={false}
					/>
					<Platforms />
				</motion.div>

				{/* Dashboard Image Column */}
				<div className="order-1 lg:order-2 relative flex items-center justify-center">
					{/* Ambient dark glow behind mockup */}
					<div className="absolute w-72 h-72 bg-brand-indigo/10 rounded-full blur-[96px] pointer-events-none -z-10 animate-pulse-slow" />
					
					<motion.div
						initial={{ opacity: 0, scale: 0.96, x: 30 }}
						whileInView={{ opacity: 1, scale: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6 }}
						className="relative max-w-lg w-full"
					>
						{/* Overlapping glassmorphic badges */}
						<div className="absolute -top-6 -left-6 z-10 glass-panel border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 bg-carbon-950/80">
							<span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
							<span className="text-[10px] font-extrabold uppercase tracking-widest text-white">Always Innovating</span>
						</div>

						<div className="absolute -bottom-6 -right-6 z-10 glass-panel border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 bg-carbon-950/80">
							<span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-300">100% In-House Team</span>
						</div>

						<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white p-2">
							<img
								src={dashboard}
								alt="Agency Dashboard UI"
								className="w-full h-full object-contain rounded-2xl hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
