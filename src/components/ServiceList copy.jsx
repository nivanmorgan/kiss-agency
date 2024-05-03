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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const ServiceList = ({ scrollYProgress }) => {
	return (
		<div className="w-full overflow-x-auto no-scrollbar">
			<motion.div
				variants={slideInBottom}
				initial="initial"
				whileInView="animate"
				custom={0}
				className="w-full relative"
			>
				<div className="flex gap-4">
					<Swiper
						grabCursor={true}
						centeredSlides={false}
						loop={true}
						slidesPerView={'auto'}
						speed={2000}
						freeMode={true}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className="logos-swiper-container"
					>
						{[...serviceList, ...serviceList, ...serviceList].map((item, i) => (
							<SwiperSlide key={i}>
								<div
									className={`min-w-[170px] xl:min-w-[150px] flex flex-col gap-4 items-center  justify-center text-center px-8 py-5 xl:py-3 border-2 relative h-full ${
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
							</SwiperSlide>
						))}
					</Swiper>
					{/* {[...serviceList, ...serviceList, ...serviceList].map((item, i) => (
						<div
							key={i}
							className={`min-w-[170px] xl:min-w-[150px] flex flex-col gap-4 items-center  justify-center text-center px-8 py-5 xl:py-3 border-2 relative ${
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
					))} */}
				</div>
			</motion.div>
		</div>
	);
};

export default ServiceList;
