import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Lottie from 'lottie-react';
// import lottie from '../assets/lottie/handshake.json';

import { slideInRight, slideInBottom } from '../utils/variants';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Blog = ({ title, excerpt, link, img, type, lottie, clip, i }) => {
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const scrollToContact = () => {
		window.scrollTo({ top: screenSize.height * 9, behavior: 'smooth' });
	};
	return (
		<motion.div
			variants={slideInBottom}
			initial="initial"
			whileInView="animate"
			// viewport={{ amount: 0.25 }}
			custom={0}
			className="relative flex flex-col blog-card lg:min-w-[300px] xl:min-w-[200px"
		>
			<motion.div
				variants={slideInRight}
				initial="initial"
				animate="animate"
				custom={1}
				className="w-full relative bg-[--neutral] py-5 overflow-clip"
			>
				<span
					className={`absolute z-[-1] w-[50%] h-[90px] bg-[--white] border-2 border-[--black] ${
						type[0] === 't' ? 'top-[-10px]' : 'bottom-[-10px]'
					} ${type[1] === 'l' ? 'left-[-10px]' : 'right-[-10px]'} `}
				></span>
				{/* <img
          src={img}
          alt={title}
          className="relative h-[100px] w-full object-cover"
        /> */}
				<div
					className={`relative !my-[-${clip[0]}%] flex object-contain p-0 m-0 ${
						i === 2 ? 'scale-[1.8]' : ''
					} ${i === 3 ? 'scale-[1.3]' : ''} `}
				>
					<Lottie
						animationData={lottie}
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '200px',
							overflow: 'clip',
						}}
					/>
				</div>
			</motion.div>
			<motion.h3
				variants={slideInRight}
				initial="initial"
				animate="animate"
				custom={1}
				className="pt-4 pb-2"
			>
				{title}
			</motion.h3>
			<motion.p
				variants={slideInRight}
				initial="initial"
				animate="animate"
				custom={3}
			>
				<span className="hidden lg:block">{excerpt.slice(0, 150)}...</span>
				<span className="lg:hidden">{excerpt}</span>
			</motion.p>
			<motion.div
				variants={slideInRight}
				initial="initial"
				animate="animate"
				custom={4}
				className="pt-2"
			>
				<motion.div
					whileHover={{ scale: 1.1, x: 15 }}
					whileTap={{ scale: 0.9, x: -15 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
					className="w-auto"
				>
					{screenSize.width >= 1280 ? (
						<a onClick={() => scrollToContact()} className="btn-2">
							Learn More
						</a>
					) : (
						<a href="#contact" className="btn-2">
							Learn More
						</a>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Blog;
