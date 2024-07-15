import React, { useState, useEffect, useRef } from 'react';
import {
	useScroll,
	motion,
	useMotionValue,
	useTransform,
	animate,
} from 'framer-motion';
import { FirstSection, MiddleSection, LastSection } from '../components';
import useMeasure from 'react-use-measure';
import { useNavStore, useToggleIFrameStore } from '../utils/config';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Hero = () => {
	const showingIFrame = useToggleIFrameStore((state) => state.toggleIFrame);
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	useEffect(() => {
		let screen = getWindowsDimension();

		if (showingIFrame) {
			setScreenSize({
				width: screen.width - (screen.width * 30) / 100,
				height: screen.height - (screen.height * 30) / 100,
			});
		} else {
			setScreenSize(getWindowsDimension());
		}
	}, [showingIFrame, getWindowsDimension]);

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// !NAVIGATION
	const navId = useNavStore((state) => state.navId);

	useEffect(() => {
		if (navId === 'about') {
			window.scrollTo({ top: screenSize.height * 4 });
		}
	}, [navId]);

	// *HORIZONTAL SCROLL
	let [scrollContainer, { width }] = useMeasure();
	const container = useRef();
	//   const scrollContainer = useRef();
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
		layoutEffect: false,
	});

	const containerTranslation = useMotionValue(0);
	const xTranslation = useTransform(
		scrollYProgress,
		[0.1, 0.8],
		[0, screenSize.width - width]
	);

	return (
		<div
			id="home"
			ref={container}
			className={`h-[400vh] relative top-0 left-0 pointer-events-none ${
				showingIFrame ? 'w-[70vw]' : 'w-full'
			}`}
		>
			<motion.div
				className={`sticky top-0 left-0 right-0 w-full  h-screen overflow-hidden bg-re-700`}
			>
				<motion.div
					//   ref={scrollContainer}
					className="relative h-screen w-full bg-[--white overflow-x-hidden no-scrollbar overflow-y-hidden p-0"
				>
					<motion.div
						layout
						ref={scrollContainer}
						style={{ translateX: xTranslation }}
						className="absolute top-0 left-0 w-auto h-screen flex flex-nowrap gap-0"
					>
						<FirstSection scrollYProgress={scrollYProgress} />
						<MiddleSection scrollYProgress={scrollYProgress} />
						<LastSection scrollYProgress={scrollYProgress} />
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
