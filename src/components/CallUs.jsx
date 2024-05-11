import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaRegCopy, FaPhone } from 'react-icons/fa6';
import { BiMessageRounded } from 'react-icons/bi';
import { Logo, SocialButton } from '../components';

import {
	slideInRight,
	slideInBottom3,
	fallDownVariant,
} from '../utils/variants';
import { footerSectionText } from '../utils/constants';

import { useCallNowStore } from '../utils/config';

const CallUs = () => {
	const [showCopiedPopup, setShowCopiedPopup] = useState(false);
	const isShowCallNow = useCallNowStore((state) => state.showPopup);
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);

	const socialIcons = [
		<FaFacebookF className="text-xl" />,
		<FaInstagram className="text-2xl" />,
		<BiMessageRounded className="text-2xl" />,
	];

	const ref = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowCallNow(false);
				console.log('hi');
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

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
					initial="initial"
					whileInView="animate"
					exit="exit"
					className="w-full h-screen fixed top-0 left-0 bg-[#ffffff0a] backdrop-blur flex justify-center items-center px-5"
				>
					<motion.div
						variants={slideInBottom3}
						ref={ref}
						className="bg-white min-h-[300px] shadow-xl rounded flex flex-col items-center justify-center gap-5 p-5 py-7 md:p-7"
					>
						<Logo />
						<div className="text-center space-y-2">
							<h3 className="text-lg leading-[130%] font-semibold">
								Discover how we can <span>Evolve your vision</span>
							</h3>
							<p className="text-sm">Call or Copy our contact for later</p>
						</div>
						<div className="flex gap-3 flex-wrap py-2 items-center justify-center">
							<a
								href={'tel:' + footerSectionText.contact[0]}
								className="btn-1-v2 flex gap-2 items-center"
							>
								<FaPhone /> Call Now
							</a>
							<button
								className="border border-[--black] text-[--black] px-5 py-2 font-bold flex gap-2 items-center"
								onClick={() => copyContact()}
							>
								<FaRegCopy /> {footerSectionText.contact[0]}
							</button>
						</div>
						<div>
							<p className="flex gap-2 pt-1">
								{footerSectionText.socialMedia.map((sme, i) => (
									<SocialButton key={i} link={sme.link} icon={socialIcons[i]} />
								))}
							</p>
						</div>
					</motion.div>
					{showCopiedPopup && (
						<motion.div
							variants={slideInBottom3}
							initial="initial"
							whileInView="animate"
							exit="exit"
							className="fixed bottom-0 left-0 w-full flex pb-7 lg:pb-10 justify-center"
						>
							<motion.h3 className="w-auto bg-[--black] text-[--white] font-semibold py-2 px-5 lg:px-10 lg:text-lg">
								Copied!
							</motion.h3>
						</motion.div>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CallUs;
