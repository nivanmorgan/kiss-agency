import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';

const Options = () => {
	return (
		<div className="p-7 bg-[--white] shadow w-[320px] rounded-lg space-y-3 relative">
			<h3 className="">I'm Kiss Agency</h3>
			<p>What would you like to ask me?</p>

			<div className="space-y-2 pt-2 pb-6">
				<button className="btn-3">What is kiss all about?</button>
				<button className="btn-3">How do you design?</button>
				<button className="btn-3">Can I see what you've done?</button>
				<button className="btn-3">What's your pricing like?</button>
			</div>

			<div className="flex gap-3">
				<input
					placeholder="Or type here..."
					className="py-2 p-3 text-sm placeholder:text-sm placeholder:text-[--gray] block w-full focus:border-none focus:outline-[--neutral] rounded-[2rem] bg-[--neutral]"
				/>
				<button className="bg-[--black]  text-white min-w-[40px] h-[40px] rounded-full flex justify-center items-center">
					<FaPaperPlane />
				</button>
			</div>

			{/* Quote sign */}
			<span className="h-[20px] w-[20px] block absolute bottom-0 right-[30px] translate-y-2 bg-[--white] rotate-45" />
		</div>
	);
};

export default Options;
