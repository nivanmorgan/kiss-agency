import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaPaperPlane, FaUser, FaRobot, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { MdOutlineClose } from 'react-icons/md';
import { Logo, BotHero, ResponseContainer } from '../../components';
import { questions as sampleQuestions } from '../../utils/botQuestions';
import { useCallNowStore } from '../../utils/config';
import { getResponse } from '../../api/getBotResponse';

import {
	AGENCY,
	DEVELOPMENT,
	DESIGN,
	ADVERTISEMENT,
	AI,
	SEO,
} from '../../utils/bot_hero';

const BotSidebar = ({ close }) => {
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);
	const [inputQuestion, setInputQuestion] = useState('');
	const [messages, setMessages] = useState([
		{
			sender: 'bot',
			text: "Hello! I'm the Kiss Agency AI assistant. Ask me anything about our services, platforms, SEO, or team in-house expertise. (You can type in English, Spanish, or any other language!)"
		}
	]);
	const [isTyping, setIsTyping] = useState(false);
	const [showFullResponse, setShowFullResponse] = useState(false);
	
	// API response structured data
	const [botResponse, setBotResponse] = useState([]);
	const [botHeroData, setBotHeroData] = useState({ text: '', data: {} });
	const [hasFullData, setHasFullData] = useState(false);

	const chatEndRef = useRef(null);

	// Auto-scroll chat thread
	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, isTyping]);

	const processApiResponse = (data) => {
		if (!data || !data.data) return null;
		
		const res = data.data.answer;
		
		// 1. Determine Category for Lottie Animation
		const agencyCount = (res.match(/agency/gi) || []).length + (res.match(/company/gi) || []).length;
		const devCount = (res.match(/development/gi) || []).length + (res.match(/develop/gi) || []).length;
		const designCount = (res.match(/design/gi) || []).length;
		const adCount = (res.match(/advertisement/gi) || []).length + (res.match(/ad/gi) || []).length;
		const aiCount = (res.match(/ai/gi) || []).length + (res.match(/intelligence/gi) || []).length;
		const seoCount = (res.match(/seo/gi) || []).length + (res.match(/optimization/gi) || []).length;

		const counts = [agencyCount, devCount, designCount, adCount, aiCount, seoCount];
		const categories = [AGENCY, DEVELOPMENT, DESIGN, ADVERTISEMENT, AI, SEO];
		const maxCount = Math.max(...counts);
		const maxIndex = counts.indexOf(maxCount);
		
		const categoryLotties = categories[maxIndex === -1 ? 0 : maxIndex];
		const selectedLottie = categoryLotties[Math.floor(Math.random() * categoryLotties.length)];

		const heroData = {
			text: data.data.question || "KISS Agency Report",
			data: selectedLottie
		};

		// 2. Parse Lines into Paragraphs & Bullet Cards
		const lines = res.split('\n').filter(line => line.trim() !== '');
		const parsedList = [];

		lines.forEach(line => {
			const cleanLine = line.trim();
			// Check if line starts with a number (e.g. "1. Ingesting...")
			if (/^\d/.test(cleanLine)) {
				let header = '';
				let paragraph = '';

				if (cleanLine.includes('**')) {
					const parts = cleanLine.split('**');
					if (parts.length >= 3) {
						header = parts[1].replace(/[:]/g, '').trim();
						paragraph = parts.slice(2).join('**').trim();
					} else {
						header = cleanLine.split(':')[0].trim();
						paragraph = cleanLine.split(':').slice(1).join(':').trim();
					}
				} else if (cleanLine.includes(':')) {
					header = cleanLine.split(':')[0].trim();
					paragraph = cleanLine.split(':').slice(1).join(':').trim();
				} else {
					header = cleanLine;
					paragraph = '';
				}

				parsedList.push({
					tag: 'li',
					data: { header, p: paragraph }
				});
			} else {
				parsedList.push({
					tag: 'p',
					data: cleanLine.replace(/[*]/g, '')
				});
			}
		});

		return { heroData, response: parsedList };
	};

	const handleSend = async (textToSend) => {
		if (!textToSend.trim()) return;

		// Add User message
		setMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
		setInputQuestion('');
		setIsTyping(true);

		// Call getResponse
		const res = await getResponse(textToSend);
		setIsTyping(false);

		if (res && res.success) {
			// Append conversational bot answer
			setMessages(prev => [...prev, { 
				sender: 'bot', 
				text: res.data.answer 
			}]);

			// Parse response for dynamic detailed pages
			const processed = processApiResponse(res);
			if (processed) {
				setBotHeroData(processed.heroData);
				setBotResponse(processed.response);
				setHasFullData(true);
				setShowFullResponse(true); // Auto-open detailed view
			}
		} else {
			setMessages(prev => [...prev, { 
				sender: 'bot', 
				text: "I'm sorry, I'm having trouble connecting right now. Please try again or call us directly." 
			}]);
		}
	};

	return (
		<div className="fixed inset-y-0 right-0 w-full sm:w-[420px] h-screen bg-white border-l border-black/10 shadow-2xl z-[10000000] flex flex-row backdrop-blur-xl">
			
			{/* DYNAMIC DETAILED RESPONSE PANEL (SLIDES IN ON LEFT OF SIDEBAR) */}
			<AnimatePresence>
				{showFullResponse && hasFullData && (
					<motion.div
						initial={{ x: '100%', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: '100%', opacity: 0 }}
						transition={{ type: 'spring', stiffness: 350, damping: 30 }}
						className="fixed inset-y-0 left-0 right-0 sm:right-[420px] bg-white border-r border-black/10 shadow-2xl z-[9999999] overflow-y-auto no-scrollbar flex flex-col"
					>
						{/* Detail Header */}
						<div className="px-8 py-4 border-b border-black/5 flex items-center justify-between bg-slate-50/50">
							<div className="flex items-center gap-3">
								<div className="bg-white p-1 rounded border border-black/5 shadow-sm">
									<Logo h="h-7 object-contain" />
								</div>
								<span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Interactive Report</span>
							</div>
							
							<div className="flex items-center gap-3">
								<button
									onClick={() => setShowCallNow(true)}
									className="btn-primary-dark flex items-center gap-1.5 text-[10px] uppercase py-2 px-4 rounded-lg font-bold"
								>
									<FaPhone size={9} /> Call Us
								</button>
								<button
									onClick={() => setShowFullResponse(false)}
									className="text-slate-400 hover:text-black p-1 transition-colors"
									aria-label="Close detailed view"
								>
									<MdOutlineClose size={22} />
								</button>
							</div>
						</div>

						{/* Detail Body Content */}
						<div className="flex-1 px-8 py-8 space-y-8 max-w-4xl mx-auto w-full text-left">
							{/* Lottie Hero Banner */}
							<BotHero data={botHeroData.data} text={botHeroData.text} />

							{/* Dynamic Grid Sections */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
								{botResponse.map((item, idx) => (
									<div
										key={idx}
										className={item.tag === 'p' ? 'col-span-1 md:col-span-2' : 'col-span-1'}
									>
										{item.tag === 'p' ? (
											<p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium bg-slate-50 p-5 rounded-2xl border border-black/5 shadow-inner">
												{item.data}
											</p>
										) : (
											<ResponseContainer
												question={item.data.header}
												answer={[item.data.p]}
												noIcon
											/>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Detail Footer */}
						<div className="px-8 py-6 border-t border-black/5 text-center text-xs text-slate-400 font-medium">
							&copy; {new Date().getFullYear()} Kiss Agency Report Console.
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* RIGHT SIDEBAR CHAT INTERFACE */}
			<div className="flex-1 flex flex-col w-full h-full relative z-[10000001] bg-white">
				{/* Top Header */}
				<div className="px-6 py-4 border-b border-black/5 flex items-center justify-between bg-slate-50/50">
					<div className="flex items-center gap-3">
						<div className="bg-white p-1 rounded border border-black/5 shadow-sm">
							<Logo h="h-7 object-contain" />
						</div>
						<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
						<span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">AI Assistant</span>
					</div>
					
					<button
						onClick={close}
						className="text-slate-400 hover:text-black p-1 transition-colors"
						aria-label="Close chatbot"
					>
						<MdOutlineClose size={22} />
					</button>
				</div>

				{/* Chat Messages Thread */}
				<div className="flex-1 overflow-y-auto px-6 py-6 space-y-5 no-scrollbar bg-slate-50/30">
					{messages.map((msg, i) => (
						<div key={i} className="space-y-3">
							<motion.div
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.25 }}
								className={`flex gap-3 max-w-[85%] ${
									msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
								}`}
							>
								{/* Icon Badge */}
								<div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs shadow-sm ${
									msg.sender === 'user' 
										? 'bg-slate-900 text-white' 
										: 'bg-white border border-black/5 text-slate-700'
								}`}>
									{msg.sender === 'user' ? <FaUser size={10} /> : <FaRobot size={12} />}
								</div>

								{/* Text Bubble */}
								<div className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed border shadow-sm ${
									msg.sender === 'user'
										? 'bg-slate-900 text-white border-slate-900 rounded-tr-none'
										: 'bg-white text-slate-700 border-black/5 rounded-tl-none'
								}`}>
									{msg.text}
								</div>
							</motion.div>
							
							{/* Report Prompt button in thread if data is available for the bot message */}
							{msg.sender === 'bot' && i === messages.length - 1 && hasFullData && !showFullResponse && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="pl-11"
								>
									<button
										onClick={() => setShowFullResponse(true)}
										className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border border-slate-300 hover:border-black rounded-lg px-4 py-2 bg-white flex items-center gap-1.5 shadow-sm transition-all"
									>
										View Detailed Interactive Report <FaChevronRight size={10} />
									</button>
								</motion.div>
							)}
						</div>
					))}

					{/* Typing Indicator */}
					{isTyping && (
						<div className="flex gap-3 max-w-[85%]">
							<div className="w-8 h-8 rounded-xl bg-white border border-black/5 flex items-center justify-center text-slate-700 flex-shrink-0 shadow-sm">
								<FaRobot size={12} />
							</div>
							<div className="bg-white border border-black/5 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 h-10 shadow-sm">
								<span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
								<span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
								<span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
							</div>
						</div>
					)}
					<div ref={chatEndRef} />
				</div>

				{/* Suggested Questions Carousel */}
				<div className="px-6 py-3.5 border-t border-black/5 bg-white relative">
					{hasFullData && (
						<button
							onClick={() => setShowFullResponse(!showFullResponse)}
							className="absolute bottom-[100%] right-6 translate-y-[-50%] bg-slate-900 text-white rounded-full p-2.5 shadow-lg border border-slate-800 flex items-center justify-center hover:scale-105 transition-all z-10"
							title={showFullResponse ? "Close Report" : "Open Report"}
						>
							{showFullResponse ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
						</button>
					)}
					<p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">Suggested Questions</p>
					<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1.5">
						{sampleQuestions.slice(0, 10).map((q, idx) => (
							<button
								key={idx}
								onClick={() => handleSend(q)}
								className="flex-shrink-0 bg-slate-50 border border-black/5 hover:border-slate-300 text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm"
							>
								{q}
							</button>
						))}
					</div>
				</div>

				{/* Message Input Form */}
				<div className="p-6 border-t border-black/5 bg-slate-50/50 space-y-4">
					<div className="flex items-center gap-3">
						<textarea
							value={inputQuestion}
							onChange={(e) => setInputQuestion(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' && !e.shiftKey) {
									e.preventDefault();
									handleSend(inputQuestion);
								}
							}}
							placeholder="Ask about our services..."
							rows={1}
							className="flex-1 bg-white border border-black/5 focus:border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none resize-none no-scrollbar h-[44px] shadow-sm transition-all"
						/>
						<button
							onClick={() => handleSend(inputQuestion)}
							className="h-[44px] w-[44px] rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-all flex-shrink-0 cursor-pointer shadow-md"
							aria-label="Send message"
						>
							<FaPaperPlane size={12} />
						</button>
					</div>

					{/* Call Us Quick Link */}
					<div className="flex items-center justify-between text-[11px] border-t border-black/5 pt-3">
						<span className="text-slate-400">Need direct consultation?</span>
						<button
							onClick={() => setShowCallNow(true)}
							className="text-slate-800 hover:text-black flex items-center gap-1 font-bold transition-colors"
						>
							<FaPhone size={9} /> Call Our Team
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BotSidebar;
