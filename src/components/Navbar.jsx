import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CgMenuLeftAlt } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
// import logo from '../assets/imgs/kiss-agency-logo.png';
import { navigation } from '../utils/constants';
import { slideInRight, slideInBottom, slideInBottom2 } from '../utils/variants';

import { FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa6';
import { BiMessageRounded } from 'react-icons/bi';
import { footerSectionText } from '../utils/constants';
import { Logo, DottedNavigation, SocialButton } from '../components';

import {
	useNavStore,
	useAboutWidthStore,
	useContainerWidthStore,
	useValuesWidthStore,
	useCallNowStore,
	useToggleIFrameStore,
} from '../utils/config';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Navbar = ({ sectionInView }) => {
	// !NAVIGATION
	const navId = useNavStore((state) => state.navId);
	const updateNavId = useNavStore((state) => state.updateNavId);
	const containerWidth = useContainerWidthStore((state) => state.width);
	const aboutWidth = useAboutWidthStore((state) => state.width);
	const valuesWidth = useValuesWidthStore((state) => state.width);
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);
	const [navPoint, setNavPoint] = useState();
	// const showingIFrame = useToggleIFrameStore((state) => state.toggleIFrame);
	const [showingIFrame, setShowingIFrame] = useState(false);

	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const navigateToFunction = async (link) => {
		window.scrollTo({ top: 0 });
		setScrolledOffHero(true);
		updateNavId(link);
	};

	const [menuToggled, setMenuToggled] = useState(false);
	const [scrolledOffHero, setScrolledOffHero] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (screenSize.width >= 768) {
				if (scrollTop >= screenSize.height * 2.2) {
					setScrolledOffHero(true);
				} else {
					setScrolledOffHero(false);
				}
			} else {
				if (scrollTop >= screenSize.height * 2.2) {
					setScrolledOffHero(true);
				} else {
					setScrolledOffHero(false);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// NAVIGATION SCROLL
	const heroScrollSize = screenSize.height * 4;
	const wrapperScrollSize = screenSize.height * 6;

	const contactPoint = heroScrollSize + wrapperScrollSize - screenSize.height;
	const aboutPoint = heroScrollSize;
	const valuesPoint =
		18 +
		heroScrollSize +
		(screenSize.width / containerWidth) * wrapperScrollSize;
	const solutionsPoint =
		-18 +
		contactPoint -
		(screenSize.width / containerWidth) * wrapperScrollSize;
	const servicesPoint =
		-9 +
		solutionsPoint -
		(screenSize.width / containerWidth) * wrapperScrollSize;

	const scrollPoints = [
		{ top: 0, behavior: 'smooth' },
		{ top: aboutPoint, behavior: 'smooth' },
		{ top: valuesPoint, behavior: 'smooth' },
		{ top: servicesPoint, behavior: 'smooth' },
		{ top: solutionsPoint, behavior: 'smooth' },
		{ top: contactPoint, behavior: 'smooth' },
		{ top: contactPoint * 100, behavior: 'smooth' }, //Just dub content for nav code
	];

	const socialIcons = [
		<FaFacebookF className="text-xl" />,
		<FaInstagram className="text-2xl" />,
		<BiMessageRounded className="text-2xl" />,
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			const navs = [
				'home',
				'about',
				'values',
				'services',
				'digital-solutions',
				'contact',
			];
			let scrollPos = 0;

			if (scrollTop && navs) {
				for (let i = 0; i < scrollPoints.length; i++) {
					if (scrollPoints[i].top - screenSize.height / 1.5 <= scrollTop) {
						scrollPos = i;
					} else {
						scrollPos = scrollPos;
					}
				}
			}

			setNavPoint(navs[scrollPos]);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollPoints]);

	return (
		<>
			<AnimatePresence>
				{scrolledOffHero && (
					<motion.div
						initial={{ y: -10, opacity: 0.5 }}
						whileInView={{ y: [-10, 0], opacity: [0.5, 1] }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className={`${
							showingIFrame ? 'w-[75vw]' : 'w-full'
						} bg-white fixed top-0 left-0 h-[70px] lg:h-[80px] items-center justify-center shadow z-[]`}
					>
						<div className="container flex items-center justify-between gap-[25px] xl:gap-[50px] relative h-full">
							<div
								className={`hidden ${
									!showingIFrame ? 'lg:flex' : ''
								} flex-1 justify-between items-center w-full`}
							>
								{navigation.slice(0, 4).map(({ text, link }, i) =>
									screenSize.width >= 1280 ? (
										<a
											onClick={() => window.scrollTo(scrollPoints[i])}
											key={i}
											className={`navlinks ${
												navPoint === link ? '!bg-[--black] !text-[--white]' : ''
											}`}
										>
											{text}
										</a>
									) : (
										<a
											key={i}
											href={'#' + link}
											className={`navlinks ${
												sectionInView === link
													? '!bg-[--black] !text-[--white]'
													: ''
											}`}
										>
											{text}
										</a>
									)
								)}
							</div>
							<div className="">
								<Logo />
							</div>
							<div
								className={`hidden ${
									!showingIFrame ? 'lg:flex' : ''
								} flex-1 justify-between items-center w-full`}
							>
								{navigation.slice(4, 6).map(({ text, link }, i) =>
									screenSize.width >= 1280 ? (
										<a
											onClick={() => window.scrollTo(scrollPoints[i + 4])}
											key={i}
											className={`navlinks ${
												navPoint === link ? '!bg-[--black] !text-[--white]' : ''
											}`}
										>
											{text}
										</a>
									) : (
										<a
											key={i}
											href={'#' + link}
											className={`navlinks ${
												sectionInView === link
													? '!bg-[--black] !text-[--white]'
													: ''
											}`}
										>
											{text}
										</a>
									)
								)}
								{/* <div className="flex gap-2 pl-3">
									{footerSectionText.socialMedia.map((sme, i) => (
										<SocialButton
											key={i}
											link={sme.link}
											icon={socialIcons[i]}
										/>
									))}
								</div> */}
								<motion.a
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
									onClick={() => {
										setShowCallNow(true);
									}}
									className="btn-1"
								>
									<FaPhone className="mr-2" /> Call Us
								</motion.a>
							</div>
							<div
								className={`${
									!showingIFrame ? 'lg:hidden' : ''
								} flex items-center`}
							>
								<button
									className="z-[10]"
									onClick={() => setMenuToggled((toggled) => !toggled)}
								>
									{menuToggled ? (
										<MdClose className="text-[--black] text-2xl" />
									) : (
										<CgMenuLeftAlt className="text-[--black] text-2xl" />
									)}
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			{/* popup */}
			<AnimatePresence>
				{menuToggled && (
					<motion.div
						animate={{ opacity: [0, 1] }}
						exit={{ opacity: [1, 0] }}
						transition={{ type: 'tween', duration: 0.5 }}
						className="fixed top-0 left-0 w-full h-screen bg-[#ffffffaa] backdrop-blur z-[1000000]"
					>
						<motion.div className="flex flex-col gap-[5vh] h-full justify-start items-center pt-[10vh]">
							<motion.div>
								<Logo />
							</motion.div>

							<motion.div
								initial="initial"
								whileInView="animate"
								transition={{ staggerChildren: 0.2 }}
								className="flex flex-col gap-[3vh] justify-center items-center "
							>
								{navigation.map(({ text, link }, i) => (
									<motion.a
										key={i}
										variants={slideInBottom2}
										href={'#' + link}
										onClick={() => {
											setMenuToggled(false);
										}}
										className={`navlinks !text-[7vw] !font-semibold ${
											sectionInView === link
												? '!bg-[--black] !text-[--white]'
												: ''
										}`}
									>
										{text}
									</motion.a>
								))}
								<motion.a
									variants={slideInBottom2}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
									// href={`tel:${footerSectionText.contact[0]}`}
									onClick={() => {
										setMenuToggled(false);
										setShowCallNow(true);
									}}
									className="btn-1-v2 mt-5"
								>
									<FaPhone className="mr-3" /> Call Us
								</motion.a>
							</motion.div>
						</motion.div>

						{/* *TOGGLE BUTTON */}
						<div className="fixed top-0 left-0 w-full h-[80px] container flex items-center justify-end">
							<button
								className="z-[10]"
								onClick={() => setMenuToggled((toggled) => !toggled)}
							>
								{menuToggled ? (
									<MdClose className="text-[--black] text-2xl" />
								) : (
									<CgMenuLeftAlt className="text-[--black] text-2xl" />
								)}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
