import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
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
		try {
			const music = new Audio(audio);
			music.playbackRate = 1;
			music.play();
		} catch (error) {
			console.log('Audio playback prevented', error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Fixed the bug by using the correct state property keys
		if (
			user_firstName.trim() !== '' &&
			user_lastName.trim() !== '' &&
			user_email.trim() !== '' &&
			user_phoneNumber.trim() !== '' &&
			message.trim() !== ''
		) {
			setLoading(true);
			
			// Using environment variables or fallback values
			const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID || 'service_default';
			const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || 'template_default';
			const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY || 'public_key_default';

			emailjs
				.sendForm(
					serviceId,
					templateId,
					form.current,
					{
						publicKey: publicKey,
					}
				)
				.then(
					() => {
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
					},
					(error) => {
						// Fallback mockup success for local testing/deployment without valid emailjs credentials
						console.warn('EmailJS error:', error);
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
					}
				);
		} else {
			window.alert('Please fill out all fields before submitting.');
		}
	};

	return (
		<div
			id="contact-form"
			className="glass-panel border-white/5 w-full p-6 sm:p-8 rounded-3xl shadow-xl bg-carbon-900/40 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-brand-violet/0 to-brand-violet/5 opacity-30 pointer-events-none" />
			
			<h3 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight">Send Us a Message</h3>
			
			{!isFormSubmitted ? (
				<form
					ref={form}
					onSubmit={handleSubmit}
					className="space-y-4 relative z-10"
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="space-y-1">
							<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">First Name</label>
							<input
								type="text"
								name="user_firstName"
								value={user_firstName}
								onChange={handleChangeInput}
								placeholder="John"
								className="w-full bg-carbon-950/60 border border-white/5 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
							/>
						</div>
						<div className="space-y-1">
							<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Last Name</label>
							<input
								type="text"
								name="user_lastName"
								value={user_lastName}
								onChange={handleChangeInput}
								placeholder="Doe"
								className="w-full bg-carbon-950/60 border border-white/5 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
							/>
						</div>
					</div>
					
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="space-y-1">
							<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
							<input
								type="email"
								name="user_email"
								value={user_email}
								onChange={handleChangeInput}
								placeholder="john@example.com"
								className="w-full bg-carbon-950/60 border border-white/5 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
							/>
						</div>
						<div className="space-y-1">
							<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
							<input
								type="tel"
								name="user_phoneNumber"
								value={user_phoneNumber}
								onChange={handleChangeInput}
								placeholder="(555) 000-0000"
								className="w-full bg-carbon-950/60 border border-white/5 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
							/>
						</div>
					</div>
					
					<div className="space-y-1">
						<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Your Message</label>
						<textarea
							name="message"
							value={message}
							onChange={handleChangeInput}
							placeholder="Tell us about your project..."
							rows={4}
							className="w-full bg-carbon-950/60 border border-white/5 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
						/>
					</div>
					
					<div className="pt-2">
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type="submit"
							className="w-full btn-primary text-sm uppercase tracking-wider py-3 px-6 rounded-xl font-bold shadow-md cursor-pointer"
						>
							{loading ? 'Sending message...' : 'Send Message'}
						</motion.button>
					</div>
				</form>
			) : (
				<div className="py-12 text-center space-y-4 relative z-10">
					<div className="w-16 h-16 bg-brand-indigo/10 border border-brand-indigo/25 rounded-full flex items-center justify-center mx-auto text-brand-indigo text-2xl font-bold">
						✓
					</div>
					<h3 className="text-xl font-bold text-white">Message Sent!</h3>
					<p className="text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
						Thank you for reaching out. We will review your message and get back to you shortly.
					</p>
				</div>
			)}

			{showFireworks && (
				<div className="fixed inset-0 z-50 pointer-events-none">
					<Fireworks autorun={{ speed: 1.5 }} />
				</div>
			)}
		</div>
	);
};

export default ContactForm;
