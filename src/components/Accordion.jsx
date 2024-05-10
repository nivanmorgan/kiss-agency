import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { accordionContent } from '../utils/constants';
import { slideInBottom } from '../utils/variants';

import { FaCaretUp } from 'react-icons/fa6';

const AccordionCard = ({ i, heading, content, expanded, setExpanded }) => {
	const isOpen = i === expanded;
	return (
		<div>
			<motion.div
				initial={false}
				animate={{
					backgroundColor: isOpen ? '#000000' : '#8A8A8E',
					//   color: isOpen ? '#ffffff' : '#1C1C1E',
				}}
				onClick={() => setExpanded(isOpen ? false : i)}
				className="px-5 py-3 cursor-pointer flex justify-between items-center"
			>
				<h2 className={isOpen ? '!text-white' : 'text-white'}>{heading}</h2>
				<motion.div
					animate={{
						rotateX: isOpen ? '180deg' : '0deg',
					}}
				>
					<FaCaretUp
						className={`${
							isOpen ? '!text-white' : '!text-white'
						} block h-[17.5px] w-[17.5px]`}
					/>
				</motion.div>
			</motion.div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.section
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: {
								opacity: 1,
								height: 'auto',
							},
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{
							type: 'tween',
							duration: 0.5,
						}}
					>
						{content.map(({ title, text }, i) => (
							<motion.div
								initial={{ opacity: 0, y: [50] }}
								whileInView={{ opacity: [0, 1], y: [50, 0] }}
								transition={{
									type: 'tween',
									duration: 0.5,
									delay: i * 0.2,
								}}
								key={i}
								className="space-y-2 pt-2"
							>
								<h3>{title}</h3>
								<p>{text}</p>
							</motion.div>
						))}
					</motion.section>
				)}
			</AnimatePresence>
		</div>
	);
};

const Accordion = () => {
	const [expanded, setExpanded] = useState(0);
	return (
		<motion.div
			variants={slideInBottom}
			initial="initial"
			whileInView="animate"
			cuatom={1}
			className="space-y-3"
		>
			{accordionContent.map(({ heading, content }, i) => (
				<AccordionCard
					key={i}
					i={i}
					heading={heading}
					content={content}
					expanded={expanded}
					setExpanded={setExpanded}
				/>
			))}
		</motion.div>
	);
};

export default Accordion;
