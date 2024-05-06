import React from 'react';

import { motion } from 'framer-motion';
import {
	slideInRight,
	slideInBottom,
	revealText,
	fallDownVariant,
} from '../utils/variants';

const Heading = ({ tag, header, content, btn }) => {
	return (
		<motion.div
			// variants={slideInBottom}
			transition={{ staggerChildren: 0.1 }}
			initial="initial"
			whileInView="animate"
			viewport={{ amount: 0.25 }}
			className="flex flex-col gap-5"
		>
			<motion.p variants={slideInBottom}>
				<span className="border border-[--black] text-[--black] px-5 py-2 font-bold">
					{tag}
				</span>
			</motion.p>
			<motion.h1 variants={slideInBottom}>
				{header.map((word, i) => (
					<span
						key={i}
						className={`${i % 2 ? 'text-[--gray]' : 'text-[--black]'}`}
					>
						{word}{' '}
					</span>
				))}
			</motion.h1>
			<motion.p variants={slideInBottom}>{content}</motion.p>
			{btn && (
				<motion.div className="pt-3 flex" variants={slideInBottom}>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						href={btn[1]}
						className="btn-1-v2"
					>
						{btn[0]}
					</motion.a>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Heading;
