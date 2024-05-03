import React from 'react';
import { motion } from 'framer-motion';

const Tags = ({ tags }) => {
	const fallDownVariant = {
		initial: { opacity: 0, x: 100, y: -100 },
		animate: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 85,
			},
		},
	};
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
