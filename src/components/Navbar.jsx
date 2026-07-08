import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CgMenuRight as MenuIcon } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { navigation } from '../utils/constants';
import { Logo } from '../components';
import { useCallNowStore } from '../utils/config';

const Navbar = () => {
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);
	const [activeSection, setActiveSection] = useState('home');
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			const sections = navigation.map(nav => document.getElementById(nav.link));
			const scrollPosition = window.scrollY + 200;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(navigation[i].link);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = (e, link) => {
		e.preventDefault();
		const element = document.getElementById(link);
		if (element) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
			setActiveSection(link);
			setMenuOpen(false);
		}
	};

	return (
		<>
			<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? 'glass-navbar py-3 shadow-sm' : 'bg-transparent py-5'
			}`}>
				<div className="container flex items-center justify-between">
					{/* Logo */}
					<div className="flex-shrink-0 bg-white p-1 rounded border border-black/5 shadow-sm">
						<Logo h="h-7 lg:h-9 object-contain" />
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-1 bg-white/70 border border-black/5 px-2 py-1.5 rounded-full shadow-sm backdrop-blur-md">
						{navigation.map(({ text, link }) => (
							<a
								key={link}
								href={`#${link}`}
								onClick={(e) => handleNavClick(e, link)}
								className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
									activeSection === link
										? 'bg-slate-900 text-white shadow-sm'
										: 'text-slate-600 hover:text-black hover:bg-black/5'
								}`}
							>
								{text}
							</a>
						))}
					</div>

					{/* Call Us Button */}
					<div className="hidden lg:block">
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							onClick={() => setShowCallNow(true)}
							className="btn-primary-dark flex items-center gap-2 text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg font-bold shadow-sm"
						>
							<FaPhone className="text-xs" /> Call Us
						</motion.button>
					</div>

					{/* Mobile Menu Button */}
					<div className="lg:hidden flex items-center">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-slate-800 hover:text-black transition-colors p-1"
							aria-label="Toggle menu"
						>
							{menuOpen ? <MdClose size={28} /> : <MenuIcon size={28} />}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
					>
						<div className="flex flex-col gap-6 items-center w-full max-w-xs px-6 text-center">
							<Logo h="h-10 object-contain" />
							
							<div className="flex flex-col gap-3 w-full mt-6">
								{navigation.map(({ text, link }) => (
									<a
										key={link}
										href={`#${link}`}
										onClick={(e) => handleNavClick(e, link)}
										className={`text-lg font-bold uppercase tracking-wider py-2.5 px-6 rounded-lg transition-all ${
											activeSection === link
												? 'text-black bg-slate-100 font-extrabold'
												: 'text-slate-600 hover:text-black hover:bg-slate-50'
										}`}
									>
										{text}
									</a>
								))}
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								onClick={() => {
									setMenuOpen(false);
									setShowCallNow(true);
								}}
								className="w-full btn-primary-dark flex items-center justify-center gap-2 text-sm uppercase tracking-wider py-3.5 px-8 rounded-lg font-bold shadow-sm mt-6"
							>
								<FaPhone /> Call Us
							</motion.button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
