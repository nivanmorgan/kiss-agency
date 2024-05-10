import React from 'react';
import { motion } from 'framer-motion';
import { fallDownVariant } from '../utils/variants';

const Tags = ({ tags }) => {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			transition={{ staggerChildren: 0.2 }}
			viewport={{ margin: '0px -150px -150px 0px' }}
			className="flex flex-wrap gap-2"
		>
			{tags.map((tag, i) => (
				<motion.div
					variants={fallDownVariant}
					key={i}
					className="text-[--gray] bg-[--neutral] rounded-[2rem] px-3 py-2 text-[0.8rem] lg:text-sm font-bold"
				>
					{tag}
				</motion.div>
			))}
		</motion.div>
	);
};

export default Tags;
