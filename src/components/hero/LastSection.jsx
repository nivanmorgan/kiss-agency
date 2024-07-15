import { useState, useEffect } from 'react';

import hero2 from '../../assets/imgs/hero-2.png';
import { Laptop } from '../../components';
import { useTransform, motion, useSpring } from 'framer-motion';

import { useToggleIFrameStore } from '../../utils/config';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const LastSection = ({ scrollYProgress }) => {
	const showingIFrame = useToggleIFrameStore((state) => state.toggleIFrame);

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const spanX = useTransform(
		scrollYProgress,
		[0, 0.9],
		[screenSize.width > 768 ? -5 : -50, 0]
	);
	const springSpanX = useSpring(spanX, { damping: 25 });

	const spanY = useTransform(
		scrollYProgress,
		[0, 0.9],
		[screenSize.width > 768 ? 50 : 50, 0]
	);
	const springSpanY = useSpring(spanY, { damping: 25 });

	return (
		<div
			className={`w-full min-w-[100vw] max-w-[100vw] md:w-[50vw] md:min-w-[50vw] ${
				!showingIFrame ? 'lg:min-w-[35vw]' : ''
			} h-[85vh] md:h-[85vh] lg:h-[90vh]`}
		>
			<div className="relative w-full h-full pl-5 lg:pl-[30px] pb-5 lg:pb-[20px]">
				<motion.span
					style={{ translateX: springSpanX, translateY: springSpanY }}
					className="absolute bottom-0 left-0 w-[80px] h-[50%] bg-[--black] block"
				/>
				<div className="relative w-full h-full border-l-[5px] border-b-[5px] border-white bg-[--black]">
					{/* <img
            src={hero2}
            alt="hero"
            className="relative w-full h-full object-cover"
          /> */}
					<Laptop />
					<div className="absolute top-0 left-0 w-full h-full bg-transparent pointer-events-auto" />
				</div>
			</div>
		</div>
	);
};

export default LastSection;
