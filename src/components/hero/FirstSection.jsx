import { useState, useEffect, useRef } from 'react';

import { motion, useTransform, useSpring } from 'framer-motion';

import { SideNav, Cubes } from '../../components';
import hero1 from '../../assets/imgs/hero1.png';
import arrow from '../../assets/imgs/arrow-right.svg';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const FirstSection = ({ scrollYProgress }) => {
	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const yTranslate = useTransform(
		scrollYProgress,
		[0, screenSize.width >= 768 ? 0.25 : 0.35],
		[screenSize.height / 2, 0]
	);
	const springYTranslate = useSpring(yTranslate, { damping: 35 });

	const containerWidth = useTransform(
		scrollYProgress,
		[0, screenSize.width >= 768 ? 0.25 : 0.35],
		[
			// screenSize.width,
			screenSize.width >= 768 ? screenSize.width / 2 : screenSize.width,
			screenSize.width >= 768 ? screenSize.width / 2 : screenSize.width,
		]
	);
	const springContainerWidth = useSpring(containerWidth, { damping: 35 });

	// *ON CLICK SCROLL TO
	const handleScrollTo = () => {
		window.scrollTo({
			top:
				screenSize.width > 728
					? screenSize.height * 1.5
					: screenSize.height * 1.2,
			behavior: 'smooth',
		});
		console.log('Clicked');
	};

	return (
		<motion.div
			layout
			style={{ width: springContainerWidth }}
			className="flex gap-0 justify-start h-screen"
		>
			<div className="relative h-full flex flex-col w-full">
				<motion.div
					style={{ width: springContainerWidth }}
					className="relative h-[80vh] bg-[--black] w-full"
				>
					<Cubes />
					<div className="absolute top-0 left-0 w-full h-full pointer-events-auto" />
				</motion.div>
				<div className="relative flex flex-col justify-center h-full">
					<div className="flex justify-center">
						<motion.a
							// whileHover={{ scale: 1.1 }}
							// whileTap={{ scale: 0.9 }}
							href="#about"
							className="absolute top-0 btn-2-v2 translate-y-[-50%] pointer-events-auto"
						>
							Know More
						</motion.a>
					</div>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						onClick={handleScrollTo}
						type="button"
						className="cursor-pointer pointer-events-auto"
					>
						<img
							src={arrow}
							alt="arrow"
							className="h-[22.5px] md:h-[25px] w-full object-contain"
						/>
					</motion.button>
				</div>
			</div>
			<div className="hidden md:block h-full w-[60px] md:!w-[60px] min-w-[60px] z-10 bg-[--neutral] relative">
				<SideNav y={springYTranslate} />
				{/* <div
          className={`fixed top-0 w-[60px] bg-[--neutral] h-screen ${
            screenSize.width >= 768
              ? `left-[${500 - 6}]`
              : `left-[${screenSize.width - 60}]`
          }`}
        >
          <SideNav y={yTranslate} />
        </div> */}
			</div>
		</motion.div>
	);
};

export default FirstSection;
