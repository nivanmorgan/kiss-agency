import React, { useState, useEffect, useRef } from 'react';
import {
	useScroll,
	motion,
	useMotionValue,
	useTransform,
	animate,
} from 'framer-motion';
import {
	About,
	OurValues,
	Services,
	DigitalSolutions,
	Contact,
} from '../containers';
import { Footer } from '../components';
import useMeasure from 'react-use-measure';
import {
	useNavStore,
	useContainerWidthStore,
	useToggleIFrameStore,
} from '../utils/config';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const DesktopWrapper = () => {
	const updateSectionWidth = useContainerWidthStore(
		(state) => state.updateWidth
	);
	const showingIFrame = useToggleIFrameStore((state) => state.toggleIFrame);
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	let [scrollContainer, { width }] = useMeasure();
	const [containerWidth, setContainerWidth] = useState(width);

	useEffect(() => {
		const handleResize = () => {
			// updateSectionWidth(width);
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
		[0, 1],
		[0, screenSize.width - width]
	);

	useEffect(() => {
		setContainerWidth(width);
		return updateSectionWidth(containerWidth);
	}, [containerWidth, width, screenSize.width]);

	// *WIDTH OF EACH SECTION

	return (
		<div
			id="about"
			ref={container}
			className="h-[600vh] relative top-0 left-0 w-full pointer-events-none hidden xl:block"
		>
			<div className="!sticky top-0 left-0 w-full h-screen">
				<motion.div
					className={`relative h-screen ${
						showingIFrame ? 'w-[70%]' : 'w-full'
					}  bg-[--white] no-scrollbar overflow-hidden pointer-events-none`}
				>
					<motion.div
						ref={scrollContainer}
						style={{ translateX: xTranslation }}
						className="absolute top-0 left-0 w-auto h-screen flex flex-nowrap gap-0 pointer-events-none"
					>
						<div
							className={`desktop-section-container ${
								showingIFrame ? '!min-w-[70vw]' : ''
							}`}
						>
							<About />
						</div>

						<div
							className={`desktop-section-container ${
								showingIFrame ? '!min-w-[70vw]' : ''
							}`}
						>
							<OurValues />
						</div>
						<div
							className={`desktop-section-container ${
								showingIFrame ? '!min-w-[70vw]' : ''
							}`}
						>
							<Services />
						</div>
						<div
							className={`desktop-section-container ${
								showingIFrame ? '!min-w-[70vw]' : ''
							}`}
						>
							<DigitalSolutions />
						</div>
						<div className="desktop-section-container !flex-col xl:!overflow-auto no-scrollbar">
							<Contact />
							<Footer />
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default DesktopWrapper;
