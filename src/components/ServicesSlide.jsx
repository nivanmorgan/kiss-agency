import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

import { Autoplay, EffectCoverflow, FreeMode } from 'swiper/modules';

const ServiceCard = ({ icon, title, text }) => {
	return (
		<div className="flex flex-col w-full h-[360px] gap-4 items-center justify-center p-6 glass-panel border-white/5 rounded-3xl text-center cursor-grab hover:border-brand-indigo/30 transition-all duration-300 group shadow-lg bg-carbon-900/40 relative overflow-hidden">
			{/* Accent glow on hover */}
			<div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/0 to-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
			
			<div className="p-4 bg-carbon-950/60 rounded-2xl border border-white/5 group-hover:border-brand-indigo/20 transition-colors">
				<img src={icon} alt={title} className="h-[60px] w-[60px] object-contain filter brightness-110" />
			</div>
			
			<h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors duration-300 mt-2">
				{title}
			</h3>
			
			<p className="text-xs text-slate-400 leading-relaxed">
				{text}
			</p>
		</div>
	);
};

const ServicesSlide = ({ services }) => {
	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			loop={true}
			slidesPerView={'auto'}
			speed={1200}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			coverflowEffect={{
				rotate: 5,
				stretch: 0,
				depth: 100,
				modifier: 2.5,
				slideShadows: false,
			}}
			modules={[Autoplay, EffectCoverflow, FreeMode]}
			className="swiper_container w-full"
		>
			{services.map(({ icon, title, text }, i) => (
				<SwiperSlide key={i} className="max-w-[280px] sm:max-w-[300px]">
					<ServiceCard icon={icon} title={title} text={text} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServicesSlide;
