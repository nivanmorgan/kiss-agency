import { useEffect, useRef } from 'react';
import {
	animate,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
	useInView,
	AnimatePresence,
} from 'framer-motion';
import useMeasure from 'react-use-measure';
import { slideInBottom, fallDownVariant } from '../utils/variants';

import logo1 from '../assets/imgs/platform-1.svg';
import logo2 from '../assets/imgs/platform-2.svg';
import logo3 from '../assets/imgs/platform-3.svg';
import logo4 from '../assets/imgs/platform-4.svg';
import logo5 from '../assets/imgs/platform-5.svg';

const logos = [logo1, logo2, logo3, logo4, logo5];

const Platforms = () => {
	const ref = useRef();
	const isInView = useInView(ref);

	return (
		<div className="w-full flex">
			<motion.div
				ref={ref}
				variants={slideInBottom}
				initial="initial"
				whileInView="animate"
				custom={0}
				className="bg-[--neutral] w-auto px-4 py-5 lg:py-5 lg:px-8 space-y-2"
			>
				<h3>Platforms</h3>
				<motion.div className="max-w-[300px]">
					<AnimatePresence>
						{isInView && (
							<motion.div
								initial="initial"
								whileInView="animate"
								exit="exit"
								viewport={{ margin: '0px 0px -100px 0px' }}
								// viewport={{ amount: 0.25 }}
								transition={{ staggerChildren: 0.15 }}
								className="flex gap-4 flex-wrap"
							>
								{[...logos].map((logo, i) => (
									<motion.img
										src={logo}
										variants={fallDownVariant}
										key={i}
										className="w-[45px] h-[45px] object-contain p-[2px]"
									/>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Platforms;
