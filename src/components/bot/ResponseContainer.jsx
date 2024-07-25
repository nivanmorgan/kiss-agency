import React from 'react';
import { BotIcon } from '../../components';

const ResponseContainer = ({ question, answer }) => {
	return (
		<div className="bg-[--neutral] p-7 rounded-lg flex flex-col gap-2 max-w-[50vw]">
			<h3 className="capitalize">{question}</h3>
			<p>{answer}</p>
			<p className="flex items-center gap-2 font-semibold text-[--black] pt-2 text-sm">
				<BotIcon w={20} /> Kiss Agency Bot
			</p>
		</div>
	);
};

export default ResponseContainer;
