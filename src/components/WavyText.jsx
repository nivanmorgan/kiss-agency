import { useState } from 'react';

import { motion } from 'framer-motion';

const WavyText = ({ text, additionalClass }) => {
	const [sentence, setSentence] = useState(text.split(' '));
	const variants = {
		initial: (i) => ({ y: i ? i : 15, opacity: 0 }),
		animate: (i) => ({
			rotateX: [-25, 0],
			rotateY: [25, 0],
			y: [i ? i : 15, 0],
			opacity: [0, 1],

			transition: {
				type: 'spring',
				duration: 1,
				bounce: 0.45,
			},
		}),
	};
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			transition={{ staggerChildren: 0.1 }}
			className={`flex flex-wrap w-full ${
				additionalClass ? additionalClass : 'gap-2'
			}`}
		>
			{sentence.map((word, i) => (
				<span key={i} className="flex">
					{word.split('').map((char, j) => (
						<motion.span variants={variants} key={j}>
							{char}
						</motion.span>
					))}
				</span>
			))}
		</motion.div>
	);
};

export default WavyText;
