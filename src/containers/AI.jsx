import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { BotSidebar } from '../components';
import aiLottie from '../assets/lottie/ai2.json';

const AI = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed bottom-6 right-6 z-[10000000] hidden xl:block">
			{/* Chatbot Sidebar */}
			<AnimatePresence>
				{isOpen && (
					<BotSidebar close={() => setIsOpen(false)} />
				)}
			</AnimatePresence>

			{/* Floating Chat Trigger Button */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="relative w-14 h-14 rounded-xl bg-white border border-black/5 shadow-md hover:border-slate-300 transition-all cursor-pointer flex items-center justify-center group"
			>
				{/* Soft overlay on hover */}
				<div className="absolute inset-0 bg-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
				
				<div className="w-[85px] h-[85px] flex items-center justify-center mt-[-8px] ml-[-4px]">
					<Lottie
						animationData={aiLottie}
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				</div>
			</motion.button>
		</div>
	);
};

export default AI;
