import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideInBottom, fallDownVariant } from '../utils/variants';

import logo1 from '../assets/imgs/platform-1.svg';
import logo2 from '../assets/imgs/platform-2.svg';
import logo3 from '../assets/imgs/platform-3.svg';
import logo4 from '../assets/imgs/platform-4.svg';
import logo5 from '../assets/imgs/platform-5.svg';

const logos = [logo1, logo2, logo3, logo4, logo5];

const Platforms = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true, margin: '-50px' });

	return (
		<div className="w-full flex">
			<motion.div
				ref={ref}
				variants={slideInBottom}
				initial="initial"
				whileInView="animate"
				custom={0}
				className="glass-panel border-white/5 w-full md:w-auto px-6 py-5 rounded-2xl space-y-3"
			>
				<h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold">Platforms Supported</h3>
				<motion.div 
					initial={isInView ? "animate" : "initial"}
					animate={isInView ? "animate" : "initial"}
					className="flex gap-4 flex-wrap items-center justify-start max-w-[320px]"
				>
					{logos.map((logo, i) => (
						<motion.img
							key={i}
							src={logo}
							variants={fallDownVariant}
							custom={i}
							className="w-[40px] h-[40px] object-contain p-1 filter brightness-90 hover:brightness-100 transition-all cursor-pointer"
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Platforms;
