import React from 'react';
import { motion } from 'framer-motion';
import { slideInBottom, slideInTop } from '../utils/variants';

const Heading = ({ tag, header, content, btn, light = false }) => {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, margin: '-100px' }}
			transition={{ staggerChildren: 0.15 }}
			className="flex flex-col gap-5 text-left"
		>
			{tag && (
				<motion.div variants={slideInBottom} custom={0}>
					<span className={`inline-block px-3 py-1 border rounded-lg text-[10px] font-extrabold uppercase tracking-widest ${
						light 
							? 'bg-slate-100 border-slate-200 text-slate-800' 
							: 'bg-white/5 border-white/10 text-slate-300'
					}`}>
						{tag}
					</span>
				</motion.div>
			)}
			
			{header && (
				<motion.h2 variants={slideInBottom} custom={1} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
					light ? 'text-slate-950' : 'text-white'
				}`}>
					{header.map((word, i) => (
						<span
							key={i}
							className={i % 2 ? (light ? 'text-slate-500' : 'text-slate-400') : (light ? 'text-slate-950' : 'text-white')}
						>
							{word}{' '}
						</span>
					))}
				</motion.h2>
			)}
			
			{content && (
				<motion.p variants={slideInBottom} custom={2} className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
					light ? 'text-slate-600' : 'text-slate-400'
				}`}>
					{content}
				</motion.p>
			)}
			
			{btn && (
				<motion.div variants={slideInTop} custom={3} className="pt-2 flex">
					<motion.a
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={btn[1]}
						href={btn[2] || undefined}
						className={light ? 'btn-primary-dark shadow-sm' : 'btn-primary-light text-carbon-950 shadow-sm'}
					>
						{btn[0]}
					</motion.a>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Heading;
