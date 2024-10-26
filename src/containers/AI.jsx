import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Greeting, Options, BotSidebar } from '../components';
import ai from '../assets/lottie/ai2.json';
import { popupVariant } from '../utils/variants';
import { useToggleBotStore } from '../utils/config';

const AI = () => {
	const deactivateScroll = useToggleBotStore((state) => state.showBot);
	const activateScroll = useToggleBotStore((state) => state.closeBot);

	const [question, setQuestion] = useState({});
	const [showIntro, setShowIntro] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const [addPadding, setAddPadding] = useState(false);
	const [showResponse, setShowResponse] = useState(false);
	const popupRef = useRef();
	const popupRef2 = useRef();

	const aiRef = useRef();

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

	useEffect(() => {
		if (showResponse) {
			deactivateScroll();
		} else {
			activateScroll();
		}
	}, [showResponse]);

	return (
		<div className="fixed bottom-5 right-5 z-[10000000000000] hidden xl:block">
			{showResponse && (
				// <div
				// 	ref={aiRef}
				// 	onWheel={(e) => handleWheel(e)}
				// 	className="fixed top-0 left-0 w-full h-[50vh] bg-red-600 p-5 overlay"
				// >
				// 	<div className="bg-blue-600 h-[200vh]">Hello</div>
				// </div>
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
