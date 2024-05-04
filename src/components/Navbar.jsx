import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CgMenuLeftAlt } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
// import logo from '../assets/imgs/kiss-agency-logo.png';
import { navigation } from '../utils/constants';
import { slideInRight, slideInBottom } from '../utils/variants';
import {
	useNavStore,
	useAboutWidthStore,
	useContainerWidthStore,
	useValuesWidthStore,
} from '../utils/config';

import Logo from './Logo';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Navbar = () => {
	// !NAVIGATION
	const navId = useNavStore((state) => state.navId);
	const updateNavId = useNavStore((state) => state.updateNavId);
	const containerWidth = useContainerWidthStore((state) => state.width);
	const aboutWidth = useAboutWidthStore((state) => state.width);
	const valuesWidth = useValuesWidthStore((state) => state.width);

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
				if (scrollTop >= screenSize.height * 2.5) {
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

	// const horizontalScrollWidth = screenSize.height * 6

	// const aboutWidth= screenSize.width

	// const valuesWidth= screenSize.width
	// const aboutWidth= screenSize.width
	// const aboutWidth= screenSize.width

	// const aboutPoint = heroScrollSize;

	// console.log(aboutWidth);
	// console.log(containerWidth);

	const contactPoint = heroScrollSize + wrapperScrollSize - 0;
	const aboutPoint = heroScrollSize;
	const valuesPoint =
		15 +
		heroScrollSize +
		(screenSize.width / containerWidth) * wrapperScrollSize;
	const servicesPoint =
		20 + valuesPoint + (valuesWidth / containerWidth) * wrapperScrollSize;
	const solutionsPoint =
		15 +
		servicesPoint +
		(screenSize.width / containerWidth) * wrapperScrollSize;

	const scrollPoints = [
		{ top: 0, behavior: 'smooth' },
		{ top: aboutPoint, behavior: 'smooth' },
		{ top: valuesPoint, behavior: 'smooth' },
		{ top: servicesPoint, behavior: 'smooth' },
		{ top: solutionsPoint, behavior: 'smooth' },
		{ top: contactPoint, behavior: 'smooth' },
		{ top: aboutPoint, behavior: 'smooth' },
		{ top: aboutPoint, behavior: 'smooth' },
		{
			top: heroScrollSize + wrapperScrollSize - screenSize.height,
			behavior: 'smooth',
		},
	];

	return (
		<>
			<AnimatePresence>
				{scrolledOffHero && (
					<motion.div
						initial={{ y: -10, opacity: 0.5 }}
						whileInView={{ y: [-10, 0], opacity: [0.5, 1] }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className={` bg-white fixed top-0 left-0 w-full h-[70px] lg:h-[80px] items-center justify-center shadow z-[1000000]`}
					>
						<div className="container flex items-center justify-between gap-[25px] xl:gap-[50px] relative h-full">
							<div className="hidden lg:flex flex-1 justify-between items-center w-full">
								{navigation.slice(0, 4).map(({ text, link }, i) =>
									screenSize.width >= 1280 ? (
										<a
											key={i}
											// onClick={() => navigateToFunction(link)}
											onClick={() => window.scrollTo(scrollPoints[i])}
											// href={'#' + link}
											className={`navlinks`}
										>
											{text}
										</a>
									) : (
										<a key={i} href={'#' + link} className={`navlinks`}>
											{text}
										</a>
									)
								)}
							</div>
							<div className="">
								<Logo />
							</div>
							<div className="hidden lg:flex flex-1 justify-between items-center w-full">
								{navigation.slice(4, 6).map(({ text, link }, i) =>
									screenSize.width >= 1280 ? (
										<a
											onClick={() => window.scrollTo(scrollPoints[i + 4])}
											key={i}
											// onClick={() => navigateToFunction(link)}
											className="navlinks"
										>
											{text}
										</a>
									) : (
										<a key={i} href={'#' + link} className="navlinks">
											{text}
										</a>
									)
								)}
								{screenSize.width >= 1280 ? (
									<a
										onClick={() =>
											window.scrollTo(scrollPoints[scrollPoints.length - 1])
										}
										className="btn-1"
									>
										Contact Us
									</a>
								) : (
									<a href="#contact" className="btn-1">
										Contact Us
									</a>
								)}
							</div>
							<div className="lg:hidden flex items-center">
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
					<motion.div className="fixed top-0 left-0 w-full h-screen bg-[#ffffffaa] backdrop-blur z-[1000000]">
						<div className="flex flex-col gap-[5vh] h-full justify-start items-center pt-[10vh]">
							<div>
								<Logo />
							</div>

							<div className="flex flex-col gap-[3vh] justify-center items-center ">
								{navigation.map(({ text, link }, i) =>
									screenSize.width >= 1280 ? (
										<a
											key={i}
											onClick={() => {
												// navigateToFunction(link);
												window.scrollTo(scrollPoints[i]);
												setMenuToggled(false);
											}}
											className="navlinks !text-[7vw] !font-semibold"
										>
											{text}
										</a>
									) : (
										<a
											key={i}
											href={'#' + link}
											onClick={() => {
												setMenuToggled(false);
											}}
											className="navlinks !text-[7vw] !font-semibold"
										>
											{text}
										</a>
									)
								)}
								{screenSize.width >= 1280 ? (
									<a
										onClick={() => {
											window.scrollTo(scrollPoints[scrollPoints.length - 1]);
											setMenuToggled(false);
										}}
										className="btn-1-v2 mt-5"
									>
										Contact Us
									</a>
								) : (
									<a
										href={'#contact'}
										onClick={() => setMenuToggled(false)}
										className="btn-1-v2 mt-5"
									>
										Contact Us
									</a>
								)}
							</div>
						</div>

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
