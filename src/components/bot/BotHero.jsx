import React from 'react';
import Lottie from 'lottie-react';

const BotHero = ({ data, text }) => {
	if (!data || !data.lottie) return null;
	
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
			<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
				{text}
			</h2>
			<div className="bg-slate-50 border border-black/5 rounded-2xl flex items-center justify-center p-4">
				<Lottie
					animationData={data.lottie}
					style={{
						objectFit: 'contain',
						maxHeight: '220px',
						width: '100%',
					}}
				/>
			</div>
		</div>
	);
};

export default BotHero;
