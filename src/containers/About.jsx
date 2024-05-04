import { useRef, useEffect } from 'react';
import useMeasure from 'react-use-measure';

import { useScroll, useTransform, motion, useInView } from 'framer-motion';

import { Heading, Platforms, DottedNavigation } from '../components';
import dashboard from '../assets/imgs/dashboard.jpeg';

import { useAboutWidthStore } from '../utils/config';

import { aboutSectionText } from '../utils/constants';

const About = () => {
	// const container = useRef();
	let [container, { width }] = useMeasure();
	const updateSectionWidth = useAboutWidthStore((state) => state.updateWidth);
	// const isInView = useInView()

	// *updateSectionWidth(width);
	// useEffect(() => {
	//   updateSectionWidth(width);
	// }, [width]);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// // let [contentContainer, { width }] = useMeasure();
	// const displaceY = useTransform(
	//   scrollYProgress,
	//   [0, 1],
	//   [width >= 600 ? 300 : 100, 0]
	// );
	// const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	// const imgZ = useTransform(scrollYProgress, [0, 1], [0, -300]);

	useEffect(() => {
		const handleResize = () => {
			updateSectionWidth(width);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		updateSectionWidth(width);
	}, [width]);

	useEffect(() => {
		updateSectionWidth(width);
	}, []);

	return (
		<div
			// id="about"
			ref={container}
			className="w-full relative lg:min-h-screen xl:h-screen section-py !mt-0 lg:!mt-[50px]"
		>
			<div
				// ref={contentContainer}
				className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:h-full"
			>
				<motion.div
					// style={{ y: displaceY }}
					className="space-y-7 lg:space-y-10 order-2 lg:order-1 lg:self-center lg:h-fit"
				>
					<Heading
						tag={aboutSectionText.tag}
						header={aboutSectionText.heading}
						content={aboutSectionText.text}
					/>
					<Platforms scrollYProgress={scrollYProgress} />
				</motion.div>
				<div className="lg:absolute top-0 right-0 lg:w-[50%] lg:h-screen flex items-center lg:pl-[70px]">
					<motion.div className="relative pl-[10px] lg:pl-[25px] pt-[25px] md:pt-[35px] lg:pt-[50px] pb-[15px] lg:pb-[25px] overflow-hidden">
						<div
							//   style={{ scale: imgScale }}
							className="h-[240px] w-[110%] xl:w-full md:h-[65vh] md:max-h-[500px] max-h-[600px] bg-[--neutral] rounded-l-2xl md:rounded-l-[1.65rem] xl:rounded-l-[1.8rem]"
						>
							{/* Floaters */}
							<motion.span
								// initial={{ opacity: 0 }}
								// whileInView={{ x: [75, 25], y: [-50, 0], opacity: [0, 1] }}
								// transition={{ delay: 0.25 }}
								className="absolute top-0 right-0 w-[45%] h-[50%] bg-[--gray]"
							/>
							<motion.span
								// initial={{ opacity: 0 }}
								// whileInView={{ x: [-50, 0], y: [50, 0], opacity: [0, 1] }}
								// transition={{ delay: 0.25 }}
								className="absolute bottom-0 left-0 w-[35%] h-[50%] bg-[--dark] rounded-bl-2xl md:rounded-bl-3xl"
							/>

							<motion.img
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ scale: [0.9, 1.1, 1], opacity: [0, 1] }}
								//   transition={{ delay: 0.25 }}

								src={dashboard}
								className="relative w-full h-full object-cover object-left rounded-l-2xl md:rounded-l-[1.65rem] xl:rounded-l-[1.8rem]"
							/>
						</div>
					</motion.div>
				</div>
			</div>
			{/* <DottedNavigation /> */}
		</div>
	);
};

export default About;
