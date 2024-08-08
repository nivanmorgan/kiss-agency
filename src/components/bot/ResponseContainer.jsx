import React from 'react';
import { BotIcon } from '../../components';

const ResponseContainer = ({ question, answer, noIcon, className }) => {
	return (
		<div
			className={`bg-[--neutral] p-5 rounded-lg flex flex-col gap-2 max-w-[50vw] ${className}`}
		>
			<div className="flex flex-col gap-2">
				<h3 className="capitalize text-sm">{question}</h3>
				<p className="text-xs">{answer}</p>
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
