import React from 'react';

import { motion } from 'framer-motion';
import {
	slideInRight,
	slideInBottom,
	revealText2,
	fallDownVariant,
} from '../utils/variants';

const RevealText = ({ text, stagger }) => (
	<motion.p
		initial="initial"
		whileInView="animate"
		viewport={{ amount: 0.35 }}
		transition={{ staggerChildren: stagger }}
	>
		{text.split('').map((char, i) => (
			<motion.span variants={revealText2} key={i} className="">
				{char}
			</motion.span>
		))}
	</motion.p>
);

const Heading = ({ tag, header, content, btn }) => {
	return (
		<motion.div
			// variants={slideInBottom}
			transition={{ staggerChildren: 0.5 }}
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
			<motion.p variants={slideInBottom}>
				<RevealText text={content} stagger={0.01} />
			</motion.p>
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
