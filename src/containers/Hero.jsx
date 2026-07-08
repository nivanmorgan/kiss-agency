import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';
import { Cubes } from '../components';
import { useCallNowStore } from '../utils/config';

const Hero = () => {
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);

	const handleScrollToAbout = (e) => {
		e.preventDefault();
		const element = document.getElementById('about');
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
		<div id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
			{/* Webflow Grid overlay */}
			<div className="absolute inset-0 webflow-grid-light z-0 pointer-events-none" />
			
			{/* Soft ambient gray highlights */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-50 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-50 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '3s' }} />

			<div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				{/* Text Content Column */}
				<div className="lg:col-span-7 space-y-8 text-left">
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-4"
					>
						<span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[10px] font-extrabold uppercase tracking-widest text-slate-800">
							Digital Creative Agency
						</span>
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-950">
							Your Vision. <br />
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-slate-500">
								Our Expertise.
							</span>
						</h1>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.15 }}
						className="text-base sm:text-lg text-slate-600 font-medium max-w-xl leading-relaxed"
					>
						We craft clean digital solutions in design, custom software, SEO optimization, and intelligent AI integrations. High-contrast fine lines, premium engineering, all developed 100% in-house.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-wrap gap-4 items-center"
					>
						<a
							href="#about"
							onClick={handleScrollToAbout}
							className="btn-primary-dark flex items-center gap-2 text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg font-bold group shadow-sm"
						>
							Know More 
							<FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
						</a>
						
						<button
							onClick={() => setShowCallNow(true)}
							className="btn-secondary-light flex items-center gap-2 text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg font-bold shadow-sm"
						>
							<FaPhone className="text-xs" /> Call Us
						</button>
					</motion.div>
				</div>

				{/* 3D Visualizer Column */}
				<div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] flex items-center justify-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative w-full h-full panel-light rounded-3xl overflow-hidden shadow-sm flex items-center justify-center bg-white/40"
					>
						<div className="absolute inset-0 z-0 opacity-90">
							<Cubes loader={false} />
						</div>
						
						{/* Dotted indicator badge */}
						<div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center bg-white/95 backdrop-blur-md px-4 py-2.5 border border-black/5 rounded-xl shadow-sm pointer-events-none">
							<span className="text-[9px] uppercase font-bold tracking-widest text-slate-500">Interactive 3D space</span>
							<span className="text-[9px] text-slate-900 font-extrabold">Orbit & Drag to Rotate</span>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
