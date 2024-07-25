import React from 'react';
import Lottie from 'lottie-react';

import ai from '../../assets/lottie/ai2.json';

const BotIcon = ({ onClick, disabled, w }) => {
	return (
		<button
			type="button"
			className={`relative p-0 bg-white rounded-full  w-[${w.toString()}px] h-[${w}px] overflow-hidden object-cover transition duration-700 z-[1] ${
				disabled && 'pointer-events-none'
			}`}
			onClick={onClick}
			disabled={disabled}
		>
			<Lottie
				animationData={ai}
				style={{
					objectFit: 'cover',
					width: w * 2,
					height: w * 2,
					marginTop: -w / 2,
					marginLeft: -w / 2,
				}}
				// className="w-full h-full"
			/>
		</button>
	);
};

export default BotIcon;
