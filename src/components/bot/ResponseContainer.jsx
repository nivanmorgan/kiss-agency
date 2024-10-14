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
			className={`bg-[--neutral] p-5 rounded-lg flex items-center justify-center flex-col gap-1 max-w-[50vw] ${className}`}
		>
			<p className="">
				<BotIcon w={60} />
			</p>
			<div className="overflow-hidden">
				<WavyText text="Getting Response..." />
			</div>
		</div>
	) : (
		<div
			className={`bg-[--neutral] p-5 rounded-lg flex flex-col gap-2 max-w-[50vw] ${className}`}
		>
			<div className="flex flex-col gap-2 overflow-auto">
				<h3 className="capitalize text-sm">{question}</h3>

				<p className="text-xs">{answer[0]}</p>

				{/* {answer.map((text, i) => (
					<p key={i} className="text-xs">
						{text}
					</p>
				))} */}
			</div>
			{!noIcon && (
				<div className="flex items-center gap-2 font-semibold text-[--black] pt-2 !text-sm">
					<BotIcon w={20} /> Kiss Agency Bot
				</div>
			)}
		</div>
	);
};

export default ResponseContainer;
