import React from 'react';
import { MdClose } from 'react-icons/md';

const Greeting = ({ onClickBody, close }) => {
	return (
		<button
			className="p-8 bg-[--white] card-shadow w-[320px] rounded-lg space-y-3 relative text-left border border-[--neutral]"
			onClick={onClickBody}
		>
			<h3 className="">Hi</h3>
			<p>
				Our Mission is to drive the digital evolution by delivering unparalleled
				solutions in Design, Software & Web Development, Digital Marketing, & AI
				Engineering. Would you like me to help answer some questions?
			</p>
			<span className="h-[20px] w-[20px] block absolute bottom-0 right-[30px] translate-y-2 bg-[--white] rotate-45" />
			{/* <button className="text-xl absolute top-1 right-5 text-[--dark]" onClick={close}>
				<MdClose />
			</button> */}
		</button>
	);
};

export default Greeting;
