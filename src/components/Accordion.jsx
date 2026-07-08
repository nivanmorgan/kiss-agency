import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionContent } from '../utils/constants';
import { slideInBottom } from '../utils/variants';
import { FaChevronDown } from 'react-icons/fa6';

const AccordionCard = ({ i, heading, content, expanded, setExpanded }) => {
	const isOpen = i === expanded;
	return (
		<div className={`border rounded-xl overflow-hidden transition-all duration-300 ${
			isOpen ? 'border-slate-300 bg-slate-50/80 shadow-sm' : 'border-black/5 bg-white/30 hover:border-slate-200'
		}`}>
			{/* Accordion Trigger Header */}
			<button
				onClick={() => setExpanded(isOpen ? false : i)}
				className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
			>
				<h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
					{heading}
				</h3>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2 }}
					className="text-slate-500"
				>
					<FaChevronDown size={14} />
				</motion.div>
			</button>

			{/* Accordion Content Section */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 }
						}}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<div className="px-6 pb-6 pt-2 space-y-5 border-t border-black/5 bg-white/30">
							{content.map(({ title, text }, index) => (
								<motion.div
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
									key={index}
									className="space-y-1"
								>
									<h4 className="text-xs font-bold text-slate-800 tracking-wide uppercase">
										{title}
									</h4>
									<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
										{text}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
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
			viewport={{ once: true }}
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
