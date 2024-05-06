import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
// eslint-disable-next-line import/no-extraneous-dependencies
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

import clapping from '../assets/clapping.wav';

const ContactForm = () => {
	const form = useRef();
	const [formData, setFormData] = useState({
		user_firstName: '',
		user_lastName: '',
		user_phoneNumber: '',
		user_email: '',
		message: '',
	});
	const {
		user_firstName,
		user_lastName,
		user_phoneNumber,
		user_email,
		message,
	} = formData;

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showFireworks, setShowFireworks] = useState(false);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const playAudio = (audio) => {
		const music = new Audio(audio);
		music.playbackRate = 1;
		music.play();
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			formData.firstName !== '' &&
			formData.lastName !== '' &&
			formData.email !== '' &&
			formData.phoneNumber !== '' &&
			formData.message !== ''
		) {
			setLoading(true);
			emailjs
				.sendForm(
					process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
					process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
					form.current,
					{
						publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
					}
				)
				.then(
					() => {
						// console.log('SUCCESS!');
						setLoading(false);
						setIsFormSubmitted(true);
						playAudio(clapping);
						setShowFireworks(true);

						setTimeout(() => {
							setShowFireworks(false);
							setIsFormSubmitted(false);
						}, 6000);
						setFormData({
							user_firstName: '',
							user_lastName: '',
							user_phoneNumber: '',
							user_email: '',
							message: '',
						});

						// setTimeout(() => {
						// }, 2000);
					},
					(error) => {
						window.alert('FAILED TO SEND...', error.text);
						setLoading(false);
					}
				);
		} else {
			window.alert('Please fill every field before clicking SUBMIT NOW');
		}
	};

	return (
		<div
			id="contact-form"
			className="bg-[--neutral] w-full p-5 lg:p-7 space-y-5"
		>
			<h2 className="text-xl lg:text-2xl">Form</h2>
			{!isFormSubmitted ? (
				<form
					ref={form}
					onSubmit={handleSubmit}
					className="space-y-4 lg:space-y-5"
				>
					<div className="form-grid">
						<input
							type="text"
							placeholder="First Name"
							className=""
							value={user_firstName}
							onChange={handleChangeInput}
							name="user_firstName"
						/>
						<input
							type="text"
							placeholder="Last Name"
							className=""
							value={user_lastName}
							onChange={handleChangeInput}
							name="user_lastName"
						/>
					</div>
					<div className="form-grid">
						<input
							type="text"
							placeholder="Email Address"
							className=""
							value={user_email}
							onChange={handleChangeInput}
							name="user_email"
						/>
						<input
							type="text"
							placeholder="Phone Number"
							className=""
							value={user_phoneNumber}
							onChange={handleChangeInput}
							name="user_phoneNumber"
						/>
					</div>
					<div className="form-grid">
						<textarea
							name="message"
							id=""
							// rows={"3"}
							placeholder="Message"
							value={message}
							onChange={handleChangeInput}
							className="h-[200px] xl:h-auto xl:min-h-[100px]"
						></textarea>
					</div>
					<div className="pt-4 pb-2">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							type="submit"
							className="btn-1"
							// onClick={handleSubmit}
						>
							{loading ? 'Loading...' : 'Submit Now'}
						</motion.button>
					</div>
				</form>
			) : (
				<div className="py-[25px] md:py-[50px]">
					<p>
						Thank you for <span>reaching out</span>, we'd get back to you{' '}
						<span>shortly</span>
					</p>
				</div>
			)}

			{showFireworks && (
				<div className="fixed bottom-0 right-0 h-screen w-screen z-[1000000000000]pointer-events-none">
					<Fireworks autorun={{ speed: 2 }} />
				</div>
			)}
		</div>
	);
};

export default ContactForm;
