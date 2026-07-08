import React from 'react';
import { motion } from 'framer-motion';
import { fallDownVariant } from '../utils/variants';

const Tags = ({ tags }) => {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			transition={{ staggerChildren: 0.1 }}
			viewport={{ once: true, margin: '-100px' }}
			className="flex flex-wrap gap-2.5"
		>
			{tags.map((tag, i) => (
				<motion.div
					variants={fallDownVariant}
					key={i}
					className="text-slate-300 bg-white/5 border border-white/5 rounded-full px-4.5 py-1.5 text-xs font-semibold tracking-wide"
				>
					{tag}
				</motion.div>
			))}
		</motion.div>
	);
};

export default Tags;
