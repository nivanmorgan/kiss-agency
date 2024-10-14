import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Greeting, Options, BotSidebar } from '../components';
import ai from '../assets/lottie/ai2.json';
import { popupVariant } from '../utils/variants';
import { useToggleIFrameStore } from '../utils/config';

const AI = () => {
	const [question, setQuestion] = useState({});
	const [showIntro, setShowIntro] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const [addPadding, setAddPadding] = useState(false);
	const [showResponse, setShowResponse] = useState(false);
	const popupRef = useRef();
	const popupRef2 = useRef();

	useEffect(() => {
		setTimeout(() => {
			setShowIntro(true);
		}, 3000);

		setTimeout(() => {
			setShowIntro(false);
		}, 8000);
	}, []);

	// GIVE PADDING WHEN NAVBAR/HEADER POPUPS UP
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

	// MINIMIZE POPUPS WHEN USER CLICKS OUTSIDE THEIR CONTAINER
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				setShowIntro(false);
			}
			if (popupRef2.current && !popupRef2.current.contains(event.target)) {
				setShowOptions(false);
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	const startAI = () => {
		setShowOptions((prev) => !prev);
	};

	const aiResponse = () => {
		setShowOptions(false);
		setShowResponse(true);
		// showIframe();
	};

	return (
		<div className="fixed bottom-5 right-5 z-[0] hidden xl:block">
			{showResponse && (
				<BotSidebar
					close={() => setShowResponse(false)}
					addPadding={addPadding}
					initQuestion={question.question}
					// place the question from options popup here
				/>
			)}
			<button
				type="button"
				className={`relative p-0 bg-white rounded-full  w-[80px] h-[80px] overflow-hidden object-cover hover:scale-125 transition duration-700 z-[1]`}
				onClick={() => setShowOptions((prev) => !prev)}
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
				{showIntro && (
					<motion.div
						initial="initial"
						exit="exit"
						animate="animate"
						variants={popupVariant}
						className="fixed bottom-[130px] right-5"
						ref={popupRef}
					>
						<Greeting
							onClickBody={() => setShowOptions(true)}
							close={() => setShowIntro(false)}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{showOptions && (
					<motion.div
						initial="initial"
						exit="exit"
						animate="animate"
						variants={popupVariant}
						className="fixed bottom-[130px] right-5"
						ref={popupRef2}
					>
						<Options
							respond={() => aiResponse()}
							question={question}
							setQuestion={setQuestion}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AI;
