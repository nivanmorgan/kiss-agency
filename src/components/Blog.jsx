import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { slideInBottom } from '../utils/variants';

const Blog = ({ title, excerpt, lottie, i }) => {
	// Format index helper
	const formattedIndex = String(i + 1).padStart(2, '0');

	const scrollToContact = (e) => {
		e.preventDefault();
		const element = document.getElementById('contact');
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<motion.div
			variants={slideInBottom}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, margin: '-50px' }}
			custom={i * 0.1}
			className="panel-light border-black/5 flex flex-col rounded-3xl p-6 hover:border-slate-300 transition-all duration-300 group bg-white/80 relative overflow-hidden shadow-sm"
		>
			{/* Webflow dotted grid overlay for card header */}
			<div className="absolute top-0 left-0 right-0 h-28 webflow-grid-light opacity-50 border-b border-black/5 pointer-events-none -z-10" />

			{/* Index Badge */}
			<div className="absolute top-4 right-5 text-sm font-extrabold text-slate-300 group-hover:text-slate-500 transition-colors">
				{formattedIndex}
			</div>

			{/* Lottie Animation container */}
			<div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-50 border border-black/5 flex items-center justify-center p-4 shadow-inner mt-4">
				<div className={`w-3/4 max-h-[160px] flex items-center justify-center ${
					i === 2 ? 'scale-[1.3]' : i === 3 ? 'scale-[1.1]' : 'scale-[1.2]'
				}`}>
					<Lottie
						animationData={lottie}
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				</div>
			</div>

			{/* Text info */}
			<div className="flex-1 flex flex-col mt-6 space-y-3 relative z-10">
				<h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors duration-300">
					{title}
				</h3>
				<p className="text-sm text-slate-500 leading-relaxed flex-1">
					{excerpt}
				</p>
				<div className="pt-4">
					<a
						href="#contact"
						onClick={scrollToContact}
						className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-black transition-colors duration-300 border-b border-black/20 pb-0.5"
					>
						Get in touch
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Blog;
