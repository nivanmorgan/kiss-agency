import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Greeting, Options } from '../components';
import ai from '../assets/lottie/ai2.json';
import { popupVariant } from '../utils/variants';
import { useToggleIFrameStore } from '../utils/config';

const AI = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [addPadding, setAddPadding] = useState(false);
	const [popupType, setPopupType] = useState('');
	const showingIFrame = useToggleIFrameStore((state) => state.toggleIFrame);
	const showIframe = useToggleIFrameStore((state) => state.showIframe);
	const closeIframe = useToggleIFrameStore((state) => state.closeIframe);

	useEffect(() => {
		closeIframe();
		setTimeout(() => {
			setPopupType('greeting');
		}, 3000);

		setTimeout(() => {
			setPopupType('');
		}, 8000);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const screenHeight = window.innerHeight;
			if (scrollTop >= screenHeight * 2.2) {
				setAddPadding(true);
			} else {
				setAddPadding(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const startAI = () => {
		if (popupType !== 'options') {
			setPopupType('options');
		} else {
			setPopupType('');
		}
	};

	const aiResponse = () => {
		setPopupType('');

		showIframe();
	};

	return (
		<div className="fixed bottom-5 right-5 z-[0] hidden xl:block">
			{showingIFrame && (
				<div
					className={`w-[30vw] h-screen fixed bottom-0 right-0 bg-[--neutral] card-shadow transition duration-[2500] ${
						addPadding ? 'pt-[80px]' : ''
					}`}
				>
					<iframe
						src="https://kissdesign.co/"
						title="description"
						className="w-full h-full"
					></iframe>
				</div>
			)}
			<button
				type="button"
				className={`relative p-0 bg-white rounded-full  w-[80px] h-[80px] overflow-hidden object-cover hover:scale-125 transition duration-700 z-[1]`}
				onClick={() => startAI()}
			>
				<Lottie
					animationData={ai}
					style={{
						objectFit: 'cover',
						width: 130,
						height: 130,
						marginTop: -25,
						marginLeft: -25,
					}}
					// className="w-full h-full"
				/>
			</button>

			<AnimatePresence>
				{popupType === 'greeting' && (
					<motion.div
						initial="initial"
						exit="exit"
						animate="animate"
						variants={popupVariant}
						className="fixed bottom-[130px] right-5"
					>
						<Greeting
							onClickBody={() => setPopupType('options')}
							close={() => setShowPopup(false)}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{popupType === 'options' && (
					<motion.div
						initial="initial"
						exit="exit"
						animate="animate"
						variants={popupVariant}
						className="fixed bottom-[130px] right-5"
					>
						<Options respond={() => aiResponse()} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AI;
