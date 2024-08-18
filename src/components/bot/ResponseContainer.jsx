import React from 'react';
import { BotIcon } from '../../components';

const ResponseContainer = ({ question, answer, noIcon, className }) => {
	return (
		<div
			className={`bg-[--neutral] p-5 rounded-lg flex flex-col gap-2 max-w-[50vw] ${className}`}
		>
			<div className="flex flex-col gap-2 overflow-auto">
				<h3 className="capitalize text-sm">{question}</h3>
				{answer.map((text, i) => (
					<p className="text-xs">{text}</p>
				))}
			</div>
			{!noIcon && (
				<p className="flex items-center gap-2 font-semibold text-[--black] pt-2 text-sm">
					<BotIcon w={20} /> Kiss Agency Bot
				</p>
			)}
		</div>
	);
};

export default ResponseContainer;
