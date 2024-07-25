import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaPaperPlane } from 'react-icons/fa6';

import { BotIcon, Logo, ResponseContainer } from '../components';
import { questions as sampleQuestions } from '../utils/botQuestions';

import { useCallNowStore } from '../utils/config';

const Bot = () => {
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);
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
		const data = await axios
			.request(options)
			.then((response) => {
				console.log(response);
				setBotResponse({
					question: response.data.question,
					answer: response.data.answer,
				});
			})
			.then(() => setIsLoading(false))
			.catch(function (error) {
				console.error(error);
			});
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

	// const getApiData = async () => {
	// 	const data = await axios
	// 		.request(options)
	// 		.then((response) => console.log(response))
	// 		.catch(function (error) {
	// 			console.error(error);
	// 		});
	// };

	// const getResponse = async (ques) => {
	// 	await setQuery(ques);
	// 	getApiData();
	// };

	return (
		<div className="w-full h-screen flex gap-0">
			<div className="w-full h-screen overflow-hidden flex flex-col gap-0 bg-[--neutral]">
				<nav
					className={` bg-white h-[70px] lg:h-[80px] items-center justify-center`}
				>
					<div className="container flex items-center justify-between gap-[25px] xl:gap-[50px] relative h-full">
						<div className="">
							<Logo />
						</div>
						<div>
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
				</nav>
				<div className="w-full h-full overflow-auto p-8 flex flex-col flex-1">
					<div className="w-full-h-full border-2 border-[--neutral] flex-1 rounded-[1rem] bg-white flex flex-col justify-between items-center">
						<div className="flex-1 w-full flex items-center justify-center p-10">
							{isLoading ? (
								<div className="flex flex-col items-center gap-2">
									<BotIcon w={80} />
									<h3 className="text-[--gray] text-center capitalize font-medium">
										one moment please ...
									</h3>
								</div>
							) : (
								<ResponseContainer
									question={botResponse.question}
									answer={botResponse.answer}
								/>
							)}
						</div>
						<div className="h-[80px] min-h-[80px] w-[60%] flex items-center">
							<div className="flex w-full gap-3 items-center bg-[--neutral] rounded-[2rem] shadow py-2 px-4 ">
								<input
									placeholder="Or type here..."
									className="text-sm placeholder:text-sm placeholder:text-[--gray] block w-full focus:border-none focus:outline-[--neutral] bg-transparent outline-none"
									name="question"
									value={question}
									onChange={handleChangeInput}
								/>
								<motion.button
									whileHover={{ scale: 1.3 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
									className="min-w-[30px] h-[30px] rounded-full flex justify-center items-center"
									onClick={() => setQuery(question)}
								>
									<FaPaperPlane className="text-2xl" />
								</motion.button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[30vw] min-w-[400px] max-w-[600px] h-screen">
				<div className="p-7 bg-[--white] card-shadow w-full h-full space-y-3 relative overflow-auto">
					<h3 className="flex items-center gap-2">
						<BotIcon w={40} /> I'm Kiss Agency Bot
					</h3>
					<p></p>
					<div className="space-y-3 pt-2 pb-5">
						{sampleQuestions.map((sampleQuestion, i) => (
							<button
								key={i}
								onClick={() => setQuery(sampleQuestion)}
								className="btn-3-v2"
							>
								{sampleQuestion}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bot;
