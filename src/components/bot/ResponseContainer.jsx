import React from 'react';
import { BotIcon, WavyText } from '../../components';

const ResponseContainer = ({
	question,
	answer,
	noIcon,
	className,
	loading,
}) => {
	return loading ? (
		<div
			className={`bg-slate-50 border border-black/5 p-6 rounded-2xl flex items-center justify-center flex-col gap-3 w-full shadow-sm ${className}`}
		>
			<BotIcon w={48} />
			<div className="overflow-hidden text-xs font-bold uppercase tracking-wider text-slate-500">
				<WavyText text="Getting Response..." />
			</div>
		</div>
	) : (
		<div
			className={`bg-white border border-black/5 p-6 rounded-2xl flex flex-col gap-3 w-full shadow-sm hover:border-slate-300 transition-all ${className}`}
		>
			<div className="flex flex-col gap-2 overflow-auto">
				<h4 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
					{question}
				</h4>
				<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{answer[0]}</p>
			</div>
			{!noIcon && (
				<div className="flex items-center gap-2 font-bold text-slate-800 pt-2 text-xs border-t border-black/5 mt-2">
					<BotIcon w={16} /> Kiss Agency
				</div>
			)}
		</div>
	);
};

export default ResponseContainer;
