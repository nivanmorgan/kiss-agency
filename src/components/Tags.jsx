import React from 'react';
import { motion } from 'framer-motion';
import { fallDownVariant } from '../utils/variants';

const Tags = ({ tags }) => {
	return (
		<motion.div className="flex flex-wrap gap-2">
			{tags.map((tag, i) => (
				<motion.div
					variants={fallDownVariant}
					initial="initial"
					whileInView="animate"
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
