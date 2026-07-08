import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { serviceList } from '../utils/constants';

const ServiceList = () => {
	return (
		<div className="w-full relative py-6">
			{/* Fade overlays on edges */}
			<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-carbon-950 to-transparent z-10 pointer-events-none" />
			<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-carbon-950 to-transparent z-10 pointer-events-none" />

			<Swiper
				grabCursor={true}
				loop={true}
				slidesPerView={'auto'}
				speed={3000}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="logos-swiper-container w-full"
			>
				{serviceList.map((item, i) => (
					<SwiperSlide key={i} className="!w-[200px] !h-[90px] px-2">
						<div className="flex gap-4 items-center justify-start px-6 py-4 glass-panel border-white/5 rounded-2xl h-full hover:border-brand-indigo/35 transition-colors cursor-pointer bg-carbon-900/30">
							<div className="p-2 bg-carbon-950/60 rounded-xl border border-white/5">
								<img
									src={item.icon}
									alt={item.text}
									className="w-[24px] h-[24px] object-contain filter brightness-110"
								/>
							</div>
							<p className="font-bold text-xs uppercase tracking-wider text-slate-300">{item.text}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ServiceList;
