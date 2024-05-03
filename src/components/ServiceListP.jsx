import { useEffect, useRef } from 'react';
import {
	animate,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
} from 'framer-motion';
import useMeasure from 'react-use-measure';
import { slideInRight, slideInBottom } from '../utils/variants';

import { serviceList } from '../utils/constants';

const ServiceList = ({ scrollYProgress }) => {
	let [ref, { width }] = useMeasure();

	const containerTranslation = useMotionValue(0);

	// const xTranslation = useTransform(
	// 	scrollYProgress,
	// 	[0, 1],
	// 	[-width / 4 - 8, 0]
	// );
	// console.log(scrollYProgress);

	useEffect(() => {
		let controls;
		let finalPosition = -width / 2 - 8;

		controls = animate(containerTranslation, [0, finalPosition], {
			ease: 'linear',
			duration: 25,
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0,
		});

		return controls.stop;
	}, [containerTranslation, width]);

	return (
		<div className="w-full overflow-x-auto no-scrollbar">
			<motion.div
				variants={slideInBottom}
				initial="initial"
				whileInView="animate"
				custom={0}
				className="w-full relative overflow-x-auto no-scrollbar h-[150px]"
			>
				<motion.div
					ref={ref}
					style={{ x: containerTranslation }}
					className="w-full relative"
				>
					<motion.div
						// style={{ translateX: xTranslation }}
						className="flex gap-4"
					>
						{[...serviceList, ...serviceList, ...serviceList].map((item, i) => (
							<div
								key={i}
								className={`min-w-[170px] xl:min-w-[150px] flex flex-col gap-4 items-center  justify-center text-center px-8 py-5 xl:py-3 border-2 relative h-[150px] ${
									i % 2 ? 'border-[--black]' : 'border-[--gray]'
								}`}
							>
								<span className="absolute top-0 right-0 bg-[--neutral] w-[15px] h-full"></span>
								<img
									src={item.icon}
									alt={item.text}
									className="w-[40px] h-[40px] object-contain"
								/>
								<p className="font-bold xl:!leading-[130%]">{item.text}</p>
							</div>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default ServiceList;
