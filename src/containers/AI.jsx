import { useState } from 'react';
import Lottie from 'lottie-react';

import { Greeting, Options } from '../components';
import ai from '../assets/lottie/ai2.json';

const AI = () => {
	const [showPopup, setShowPopup] = useState(true);
	const [popupType, setPopupType] = useState('greeting');
	return (
		<div className="fixed bottom-5 right-5">
			<button className="p-0 bg-white rounded-full  w-[80px] h-[80px] overflow-hidden object-cover hover:scale-110 transition duration-700">
				<Lottie
					animationData={ai}
					style={{
						objectFit: 'cover',
						width: 130,
						height: 130,
						marginTop: -25,
						marginLeft: -25,
					}}
					// className="w-full h-full"
				/>
			</button>

			{popupType === 'greeting' && (
				<div className="fixed bottom-[120px] right-5">
					<Greeting
						onClickBody={() => setPopupType('options')}
						close={() => setShowPopup(false)}
					/>
				</div>
			)}
			{popupType === 'options' && (
				<div className="fixed bottom-[120px] right-5">
					<Options />
				</div>
			)}
		</div>
	);
};

export default AI;
