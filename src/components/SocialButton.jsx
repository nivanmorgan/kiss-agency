import React from 'react';
import { motion } from 'framer-motion';

const SocialButton = ({ icon, link }) => {
	return (
		<motion.a
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: 'spring', stiffness: 400, damping: 15 }}
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/5 hover:border-brand-indigo/35 hover:bg-brand-indigo/10 text-slate-300 hover:text-white rounded-xl transition-all"
		>
			{icon}
		</motion.a>
	);
};

export default SocialButton;
