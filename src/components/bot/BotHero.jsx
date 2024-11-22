import React from 'react';
import Lottie from 'lottie-react';

const BotHero = ({ data, text }) => {
	return (
		<div className={`grid grid-cols-2 items-center gap-7`}>
			<h1 className="text-3xl xl:text-[2.15vw]">{text}</h1>
			<div className="bg-[--neutral] flex items-center justify-center w-full max-h-[70vh] p-0">
				<Lottie
					animationData={data.lottie}
					style={{
						objectFit: 'cover',
					}}
					className="w-full max-h-[70vh]"
				/>
			</div>
		</div>
	);
};

export default BotHero;
