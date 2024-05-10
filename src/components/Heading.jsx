import React from 'react';

import { motion } from 'framer-motion';
import {
	slideInRight,
	slideInBottom,
	revealText2,
	fallDownVariant,
	slideInTop,
} from '../utils/variants';

const RevealText = ({ text, stagger }) => (
	<motion.span
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
	</motion.span>
);

const Heading = ({ tag, header, content, btn }) => {
	return (
		<motion.div
			// variants={slideInBottom}
			initial="initial"
			whileInView="animate"
			viewport={{ margin: '0px -150px -150px 0px' }}
			transition={{ staggerChildren: 0.25 }}
			className="flex flex-col gap-5"
		>
			<motion.p variants={slideInBottom} custom={0}>
				<span className="border border-[--black] text-[--black] px-5 py-2 font-bold">
					{tag}
				</span>
			</motion.p>
			<motion.h1 variants={slideInBottom} custom={1}>
				{header.map((word, i) => (
					<span
						key={i}
						className={`${i % 2 ? 'text-[--gray]' : 'text-[--black]'}`}
					>
						{word}{' '}
					</span>
				))}
			</motion.h1>
			<motion.p variants={slideInBottom} custom={2}>
				{/* <RevealText text={content} stagger={0.01} /> */}
				{content}
			</motion.p>
			{btn && (
				<motion.div variants={slideInTop} custom={3} className="pt-3 flex">
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
