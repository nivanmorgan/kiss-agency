import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCircleInfo } from 'react-icons/fa6';

const useCases = [
	{
		name: 'Lead Generation',
		input: 'Raw Web Telemetry & Logs',
		processor: 'Context Embedding & RAG',
		output: 'High-intent Sales Proposals',
		color: 'from-cyan-400 to-indigo-500',
		log: ['Ingesting 14,000 telemetry events...', 'Configuring vector database embedding...', 'Synthesizing output draft using Gemini 1.5 Pro.', 'Result: 38 sales leads compiled successfully.']
	},
	{
		name: 'Predictive Sales Analysis',
		input: 'Historic CSV Transactions',
		processor: 'Temporal Trend Regression',
		output: 'Q3 Product Sales Forecasts',
		color: 'from-indigo-500 to-violet-500',
		log: ['Ingesting transactions database...', 'Pruning temporal outliers & null offsets...', 'Executing forecasting models on GPU cluster.', 'Result: Q3 revenue forecast plotted (96.5% accuracy).']
	},
	{
		name: 'Automated Copilot',
		input: 'Incoming Client Emails',
		processor: 'LLM Prompt Classification',
		output: 'Draft Responses & Triggers',
		color: 'from-violet-500 to-pink-500',
		log: ['Polling customer mail inbox...', 'Parsing semantic inquiry classification...', 'Resolving CRM action ticket triggers...', 'Result: Response draft matched & sent to agent inbox.']
	}
];

const AiWorkflow = () => {
	const [activeCaseIdx, setActiveCaseIdx] = useState(0);
	const [stage, setStage] = useState(0); // 0: Idle, 1: Input, 2: Processing, 3: Output
	const [logs, setLogs] = useState([]);

	const activeCase = useCases[activeCaseIdx];

	const triggerPipeline = async () => {
		setStage(1);
		setLogs([activeCase.log[0]]);
		
		await new Promise(r => setTimeout(r, 1200));
		setStage(2);
		setLogs(prev => [...prev, activeCase.log[1]]);
		
		await new Promise(r => setTimeout(r, 1200));
		setStage(3);
		setLogs(prev => [...prev, activeCase.log[2], activeCase.log[3]]);
	};

	const resetPipeline = (idx) => {
		setActiveCaseIdx(idx);
		setStage(0);
		setLogs([]);
	};

	return (
		<div className="w-full flex flex-col gap-8 p-6 panel-light border-black/5 rounded-3xl bg-white/80 shadow-sm relative overflow-hidden">
			{/* Dotted grid backdrop */}
			<div className="absolute inset-0 webflow-grid-light opacity-30 pointer-events-none -z-10" />

			{/* Top select bar */}
			<div className="flex justify-between items-center border-b border-black/5 pb-4">
				<h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-500 flex items-center gap-1.5">
					<FaCircleInfo className="text-slate-400" /> Interactive AI workflow
				</h4>
				<div className="flex gap-2">
					{useCases.map((uc, idx) => (
						<button
							key={idx}
							onClick={() => resetPipeline(idx)}
							className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded border transition-all ${
								activeCaseIdx === idx
									? 'bg-slate-900 border-slate-900 text-white shadow-sm'
									: 'bg-white border-black/5 text-slate-500 hover:text-black hover:border-slate-300'
							}`}
						>
							{uc.name.split(' ')[0]}
						</button>
					))}
				</div>
			</div>

			{/* Interactive Pipeline Connections */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative py-4 items-center">
				{/* Connecting lines - background */}
				<div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-slate-200 -z-10" />
				
				{/* Moving colored particle line overlay */}
				{stage > 0 && (
					<motion.div
						initial={{ left: '15%', right: '85%' }}
						animate={
							stage === 1
								? { left: '15%', right: '50%' }
								: stage === 2
								? { left: '50%', right: '15%' }
								: { left: '85%', right: '15%' }
						}
						transition={{ duration: 1.2, ease: 'easeInOut' }}
						className={`hidden md:block absolute top-[40px] h-0.5 bg-gradient-to-r ${activeCase.color} -z-10`}
					/>
				)}

				{/* Step 1: Input */}
				<div className="flex flex-col items-center text-center space-y-3">
					<div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-sm ${
						stage >= 1 
							? 'bg-cyan-50 border-cyan-300 text-cyan-600 scale-105 shadow-cyan-100 ring-2 ring-cyan-100' 
							: 'bg-white border-black/5 text-slate-400'
					}`}>
						<span className="text-xs font-bold uppercase tracking-wider">Input</span>
					</div>
					<div className="space-y-1">
						<h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Data Ingestion</h5>
						<p className="text-[11px] text-slate-400 max-w-[140px] mx-auto leading-relaxed">{activeCase.input}</p>
					</div>
				</div>

				{/* Step 2: Processing */}
				<div className="flex flex-col items-center text-center space-y-3">
					<div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-sm ${
						stage >= 2 
							? 'bg-indigo-50 border-indigo-300 text-indigo-600 scale-105 shadow-indigo-100 ring-2 ring-indigo-100' 
							: 'bg-white border-black/5 text-slate-400'
					}`}>
						<span className="text-xs font-bold uppercase tracking-wider">Neural</span>
					</div>
					<div className="space-y-1">
						<h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">AI Processing</h5>
						<p className="text-[11px] text-slate-400 max-w-[140px] mx-auto leading-relaxed">{activeCase.processor}</p>
					</div>
				</div>

				{/* Step 3: Output */}
				<div className="flex flex-col items-center text-center space-y-3">
					<div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-sm ${
						stage >= 3 
							? 'bg-pink-50 border-pink-300 text-pink-600 scale-105 shadow-pink-100 ring-2 ring-pink-100' 
							: 'bg-white border-black/5 text-slate-400'
					}`}>
						<span className="text-xs font-bold uppercase tracking-wider">Result</span>
					</div>
					<div className="space-y-1">
						<h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Execution output</h5>
						<p className="text-[11px] text-slate-400 max-w-[140px] mx-auto leading-relaxed">{activeCase.output}</p>
					</div>
				</div>
			</div>

			{/* Terminal Log Output Window */}
			<div className="bg-slate-900 border border-slate-800 rounded-xl p-4 min-h-[110px] relative font-mono text-left select-none">
				{logs.length === 0 ? (
					<p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-wider">Select a pipeline use case above and click trigger to execute.</p>
				) : (
					<div className="space-y-1 text-slate-300 text-[11px]">
						{logs.map((log, idx) => (
							<motion.p
								initial={{ opacity: 0, x: -5 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.2 }}
								key={idx}
								className={idx === logs.length - 1 ? 'text-emerald-400 font-bold' : ''}
							>
								{`> `}{log}
							</motion.p>
						))}
					</div>
				)}

				{/* Pulsing indicator dot */}
				{stage > 0 && stage < 3 && (
					<span className="absolute top-4 right-4 flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
					</span>
				)}
			</div>

			{/* Action trigger button */}
			<div className="flex justify-center border-t border-black/5 pt-4">
				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					onClick={triggerPipeline}
					disabled={stage > 0 && stage < 3}
					className="btn-primary-dark w-full sm:w-auto text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<FaPlay size={10} /> {stage > 0 && stage < 3 ? 'Executing Model...' : 'Trigger Pipeline'}
				</motion.button>
			</div>
		</div>
	);
};

export default AiWorkflow;
