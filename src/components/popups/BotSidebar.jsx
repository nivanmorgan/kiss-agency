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
import { BotIcon, Logo, ResponseContainer } from '../../components';
import {
	questions as sampleQuestions,
	dummyResponse,
} from '../../utils/botQuestions';

import { useCallNowStore } from '../../utils/config';

const BotSidebar = ({ close, addPadding }) => {
	const [showFullResponse, setShowFullResponse] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		question: '',
	});
	const { question } = formData;
	const [query, setQuery] = useState(question);

	const [botResponse, setBotResponse] = useState({
		question: '',
		answer: '',
	});

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const getApiData = async () => {
		setIsLoading(true);
		// const data = await axios
		// 	.request(options)
		// 	.then((ai_response) => {
		// 		console.log(ai_response);
		// 		// setBotResponse({
		// 		// 	question: response.data.question,
		// 		// 	answer: response.data.answer,
		// 		// });
		// 	})
		// 	.then(() => setIsLoading(false))
		// 	.catch(function (error) {
		// 		console.error(error);
		// 	});
	};

	useEffect(() => {
		getApiData();
	}, [query]);

	const options = {
		method: 'POST',
		url: import.meta.env.VITE_BOT_API_URL,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		data: {
			question: query,
		},
	};

	return (
		<div
			className={`w-full h-screen fixed bottom-0 right-0 bg-transparent card-shadow transition duration-[2500] z-10 ${
				addPadding ? 'pt-[80px]' : ''
			} flex justify-end`}
		>
			<AnimatePresence>
				{showFullResponse && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: ['100%', 0] }}
						exit={{ x: [0, '100%'] }}
						transition={{ type: 'tween', duration: 0.75 }}
						className="w-full h-full bg-[--white] py-[50px]"
					>
						<motion.div
							initial="initial"
							whileInView="animate"
							transition={{ staggerChildren: 0.3 }}
							className="container h-full overflow-auto space-y-2"
						>
							<motion.h2 variants={slideInRight} className="uppercase">
								{/* <span>QUESTION:</span> */}
								What is Kiss Agency About?
							</motion.h2>
							<motion.p variants={slideInRight}>{dummyResponse.intro}</motion.p>
							<motion.div
								initial="initial"
								whileInView="animate"
								variants={slideInBottom4}
								transition={{ staggerChildren: 0.3 }}
								className="grid grid-cols-2 xl:grid-cols-3 gap-4 py-4"
							>
								{dummyResponse.moreInfo.map(({ intro, text }, i) => (
									<motion.div key={i} variants={slideInBottom4} custom={i}>
										<ResponseContainer
											// question={botResponse.question}
											// answer={botResponse.answer}
											question={intro}
											answer={text}
											className="justify-between h-full"
										/>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			{/* Right Sidebar */}
			<div
				className={`min-w-[380px] max-w-[380px] h-full bg-[--white] card-shadow transition duration-[2500]`}
			>
				<div className="w-full h-full z-10">
					<div className="p-5 bg-[--white] card-shadow w-full h-full flex flex-col gap-5 relative">
						<div className="flex justify-between items-start">
							<div>
								<h3 className="flex items-center gap-2 text-base">
									I'm Kiss Agency Bot
								</h3>
								<p className="text-xs">
									Here are some questions you can ask me
								</p>
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
						<div className="h-full flex-1 flex flex-col gap-2 overflow-auto">
							{sampleQuestions.map((sampleQuestion, i) => (
								<button
									key={i}
									onClick={() => setQuery(sampleQuestion)}
									className="btn-3-v2 !text-xs !p-2"
								>
									{sampleQuestion}
								</button>
							))}
						</div>
						<div className="min-h-[30%] max-h-[30vh]">
							<ResponseContainer
								// question={botResponse.question}
								// answer={botResponse.answer}
								question="What is KISS Agency About?"
								answer="Our Mission is to drive the digital evolution by delivering unparalleled solutions in Design, Software & Web Development, Digital Marketing, & AI Engineering. We are dedicated to staying ahead of the curve, embracing challenges, and redefining industry standards. We are determined to be the strategic partner that propels businesses into the future."
								noIcon
								className="h-full overflow-auto"
							/>
						</div>
						<div className="flex items-center gap-4">
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
						</div>
						<div className="absolute top-[50%] translate-y-[-50%] left-[-12px] w-[12px] h-[40px] bg-[--black] rounded-l-lg flex items-center justify-center">
							<button onClick={() => setShowFullResponse((prev) => !prev)}>
								{showFullResponse ? (
									<FaCaretRight className="text-[--white]" />
								) : (
									<FaCaretLeft className="text-[--white]" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BotSidebar;
