import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaRegCopy, FaPhone } from 'react-icons/fa6';
import { BiMessageRounded } from 'react-icons/bi';
import { Logo, SocialButton } from '../components';
import { slideInBottom3 } from '../utils/variants';
import { footerSectionText } from '../utils/constants';
import { useCallNowStore } from '../utils/config';

const CallUs = () => {
	const [showCopiedPopup, setShowCopiedPopup] = useState(false);
	const isShowCallNow = useCallNowStore((state) => state.showPopup);
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);

	const socialIcons = [
		<FaFacebookF size={18} />,
		<FaLinkedinIn size={18} />,
		<BiMessageRounded size={18} />,
	];

	const ref = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowCallNow(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setShowCallNow]);

	const copyContact = () => {
		navigator.clipboard.writeText(footerSectionText.contact[0]);
		setShowCopiedPopup(true);
		setTimeout(() => {
			setShowCopiedPopup(false);
		}, 1500);
		setTimeout(() => {
			setShowCallNow(false);
		}, 1700);
	};

	return (
		<AnimatePresence>
			{isShowCallNow && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="w-full h-screen fixed inset-0 bg-carbon-950/80 backdrop-blur-md flex justify-center items-center px-5 z-[10000000]"
				>
					<motion.div
						variants={slideInBottom3}
						initial="initial"
						animate="animate"
						exit="exit"
						ref={ref}
						className="glass-panel border-white/10 bg-carbon-900/90 min-h-[300px] w-full max-w-md shadow-2xl rounded-3xl flex flex-col items-center justify-center gap-6 p-8 relative overflow-hidden"
					>
						<Logo h="h-9 filter invert brightness-200" />
						
						<div className="text-center space-y-2">
							<h3 className="text-xl font-bold text-white tracking-tight leading-snug">
								Evolve Your Vision
							</h3>
							<p className="text-sm text-slate-400">
								Call our team directly or copy our number.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 w-full items-center justify-center pt-2">
							<a
								href={'tel:' + footerSectionText.contact[0]}
								className="btn-primary w-full sm:w-auto text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"
							>
								<FaPhone /> Call Now
							</a>
							
							<button
								className="btn-secondary w-full sm:w-auto text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"
								onClick={copyContact}
							>
								<FaRegCopy /> Copy Number
							</button>
						</div>

						<div className="pt-2 border-t border-white/5 w-full flex flex-col items-center gap-3">
							<span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Connect With Us</span>
							<div className="flex gap-2">
								{footerSectionText.socialMedia.map((sme, i) => (
									<SocialButton key={i} link={sme.link} icon={socialIcons[i]} />
								))}
							</div>
						</div>
					</motion.div>

					{/* Notification Toast */}
					<AnimatePresence>
						{showCopiedPopup && (
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 50 }}
								className="fixed bottom-10 left-0 right-0 flex justify-center z-[10000001]"
							>
								<h4 className="bg-brand-indigo text-white font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-full shadow-lg">
									Copied to clipboard!
								</h4>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CallUs;
