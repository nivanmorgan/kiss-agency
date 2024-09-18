import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaPaperPlane } from 'react-icons/fa6';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

import {
	slideInBottom,
	slideInRight,
	slideInBottom3,
	slideInBottom4,
} from '../../utils/variants';
import {
	BotIcon,
	Logo,
	ResponseContainer,
	Footer,
	WavyText,
} from '../../components';
import {
	questions as sampleQuestions,
	dummyResponse,
} from '../../utils/botQuestions';

import { useCallNowStore } from '../../utils/config';
import { footerSectionText } from '../../utils/constants';

// API
import { getResponse } from '../../api/getBotResponse';

const BotNavbar = ({ setShowCallNow }) => (
	<div className="w-full h-[110px] container">
		<div className="flex items-center justify-between h-full border-b border-[--neutral]">
			<div className="">
				<Logo h="h-[40px] object-cover" />
			</div>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				onClick={() => {
					setShowCallNow(true);
				}}
				className="btn-1"
			>
				<FaPhone className="mr-2" /> Call Us
			</motion.a>
		</div>
	</div>
);

const BotSidebar = ({ close, addPadding, initQuestion }) => {
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);
	const [showFullResponse, setShowFullResponse] = useState(true); //Show Full Response
	const [hasFullResponse, setHasFullResponse] = useState(true); // Allows Full Response to show only if there's a full response to show
	const [isLoading, setIsLoading] = useState(true);
	const [formData, setFormData] = useState({
		question: initQuestion || '',
	});
	const { question } = formData;
	const [query, setQuery] = useState(question);

	const [botResponse, setBotResponse] = useState({
		question: '',
		answer: [],
		// img: [],
		// moreInfo: [],
	});

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const getApiData = (query) => {
		setBotResponse({ ...botResponse, ['answer']: [] });
		setIsLoading(true);
		getResponse(query).then((data) => {
			// console.log(data?.data?.answer.split('\n'));
			if (data) {
				let resAns = data?.data?.answer.split('\n');
				resAns = resAns.filter((prev) => prev !== '');
				console.log(resAns);

				// if (resAns.length > 1) {
				// 	setHasFullResponse(true);
				// } else {
				// 	setHasFullResponse(true);
				// }

				setTimeout(() => {
					setBotResponse({
						...botResponse,
						['question']: data?.data?.question,
						['answer']: resAns,
					});
				}, 500);
				setTimeout(() => {
					setIsLoading(false);
				}, 700);
			}
		});
		// .then(() => {
		// 	setIsLoading(false);
		// });
	};

	useEffect(() => {
		console.log(query);
		getApiData(query);
	}, []);

	useEffect(() => {
		console.log(query);
		getApiData(query);
	}, [query]);

	return (
		<div
			className={`w-full h-screen fixed bottom-0 right-0 bg-transparent card-shadow transition duration-[2500] z-10 ${
				addPadding ? 'pt-[80px]' : ''
			} flex justify-end`}
		>
			{/* FULL RESPONSE */}
			{/* FULL RESPONSE */}
			{/* FULL RESPONSE */}
			{/* FULL RESPONSE */}
			<AnimatePresence>
				{hasFullResponse && showFullResponse && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: ['100%', 0] }}
						exit={{ x: [0, '100%'] }}
						transition={{ type: 'tween', duration: 0.75 }}
						className="w-full h-full bg-[--white] flex flex-col gap-5 pr-5"
					>
						<BotNavbar setShowCallNow={setShowCallNow} />
						<motion.div
							initial="initial"
							animate="animate"
							transition={{ staggerChildren: 0.3 }}
							className="container h-full overflow-x-hidden overflow-y-auto space-y-2"
						>
							{isLoading ? (
								<div className="flex flex-col justify-center items-center w-full h-full">
									<p className="">
										<BotIcon w={60} />
									</p>
									<div className="overflow-hidden">
										<WavyText text="Getting Response..." />
									</div>
								</div>
							) : (
								<>
									<motion.h2 variants={slideInRight} className="uppercase">
										RE:{botResponse?.question}
									</motion.h2>
									<motion.p variants={slideInRight}>
										{botResponse?.answer[0]}
									</motion.p>

									<motion.div
										initial="initial"
										animate="animate"
										variants={slideInBottom4}
										transition={{ staggerChildren: 0.3 }}
										className="grid grid-cols-2 gap-4 py-4"
									>
										{botResponse?.answer &&
											botResponse?.answer.length > 0 &&
											botResponse?.answer.map((text, i) => (
												<motion.div
													key={i}
													variants={slideInBottom4}
													custom={i}
													className={`${i === 0 && 'hidden'}`}
												>
													<ResponseContainer
														question=""
														answer={[text]}
														className="justify-between h-full"
													/>
												</motion.div>
											))}

										{/* {dummyResponse.moreInfo.map(({ intro, text }, i) => (
									<motion.div key={i} variants={slideInBottom4} custom={i}>
										<ResponseContainer
											// question={botResponse.question}
											// answer={botResponse.answer}
											question={intro}
											answer={[text]}
											className="justify-between h-full"
										/>
									</motion.div>
								))} */}
									</motion.div>
								</>
							)}
						</motion.div>
						<Footer type="bot" />
					</motion.div>
				)}
			</AnimatePresence>

			{/* RIGHT SIDEBAR */}
			{/* RIGHT SIDEBAR */}
			{/* RIGHT SIDEBAR */}
			{/* RIGHT SIDEBAR */}
			{/* RIGHT SIDEBAR */}
			<div
				className={`min-w-[380px] max-w-[380px] h-full bg-[--white] card-shadow transition duration-[2500]`}
			>
				<motion.div
					initial="initial"
					animate="animate"
					transition={{ staggerChildren: 0.3 }}
					className="w-full h-full"
				>
					<div className="p-5 bg-[--white] card-shadow w-full h-full flex flex-col gap-5 relative">
						<div className="flex justify-between items-start">
							<div>
								<motion.h3
									variants={slideInRight}
									className="flex items-center gap-2 text-base"
								>
									I'm Kiss Agency Bot
								</motion.h3>
								<motion.p variants={slideInRight} className="text-xs">
									Here are some questions you can ask me
								</motion.p>
							</div>
							<motion.button
								whileHover={{ scale: 1.3 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								onClick={close}
								className="bg-transparent !w-auto"
							>
								<MdOutlineClose className="text-2xl" />
							</motion.button>
						</div>
						<div className="h-full flex-1 flex flex-col gap-2 overflow-y-auto overflow-x-hidden z-10">
							{sampleQuestions.map((sampleQuestion, i) => (
								<motion.button
									whileTap={{ scale: 0.9 }}
									whileHover={{ scale: 1.05 }}
									transition={{ type: 'spring', bounce: 0.75 }}
									key={i}
									variants={slideInRight}
									onClick={() => {
										if (sampleQuestion === query) {
											getApiData(sampleQuestion);
										} else {
											setQuery(sampleQuestion);
										}
									}}
									className="btn-3-v2 !text-xs !p-2"
								>
									{sampleQuestion}
								</motion.button>
							))}
						</div>
						<motion.div
							variants={slideInRight}
							className="min-h-[30%] max-h-[30vh]"
						>
							<ResponseContainer
								question={query}
								answer={botResponse.answer}
								noIcon
								className="h-full"
								loading={isLoading}
							/>
						</motion.div>
						<motion.div
							variants={slideInRight}
							className="flex items-center gap-4"
						>
							<div className="min-w-[40px] h-full scale-125">
								<BotIcon w={40} />
							</div>
							<div className="flex w-full gap-3 items-center bg-[--neutral] rounded-[2rem] shadow py-3 px-3 ">
								<input
									placeholder="Or type here..."
									className="text-xs placeholder:text-xs placeholder:text-[--gray] block w-full focus:border-none focus:outline-[--neutral] bg-transparent outline-none"
									name="question"
									value={question}
									onChange={handleChangeInput}
								/>
								<motion.button
									whileHover={{ scale: 1.3 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
									className="min-w-[15px] h-[15px] rounded-full flex justify-center items-center"
									onClick={() => setQuery(question)}
								>
									<FaPaperPlane className="text-2xl" />
								</motion.button>
							</div>
						</motion.div>
						{hasFullResponse && (
							<button
								onClick={() => setShowFullResponse((prev) => !prev)}
								className="absolute top-[50%] translate-y-[-50%] right-[100%] w-[12px] hover:w-[20px] h-[40px] bg-[--black] rounded-l-lg flex items-center justify-center transition-all duration-700 group"
							>
								{showFullResponse ? (
									<FaCaretRight className="text-[--white] group-hover:scale-105 transition-all duration-700" />
								) : (
									<FaCaretLeft className="text-[--white] group-hover:scale-105 transition-all duration-700" />
								)}
							</button>
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default BotSidebar;
