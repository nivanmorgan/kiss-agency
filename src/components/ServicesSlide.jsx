import React from 'react';

import { motion } from 'framer-motion';
import { services } from '../utils/constants';
import { slideInRight, slideInBottom } from '../utils/variants';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

import { Autoplay, EffectCoverflow, FreeMode } from 'swiper/modules';

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col w-full gap-3 items-center justify-center p-5 bg-[--neutral] h-[90%] text-center cursor-grab group hover:bg-[--black] hover:text-[--neutral] shadow-2xl shadow-[--white]">
      <img src={icon} alt={title} className="h-[80px] w-auto object-contain" />
      <h2 className="group-hover:text-[--neutral]">{title}</h2>
      <p className="!leading-[140%">{text}</p>
    </div>
  );
};

const ServicesSlide = () => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      whileInView="animate"
      custom={0}
    >
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3.5,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow, FreeMode]}
        className="swiper_container"
      >
        {[...services, ...services].map(({ icon, title, text }, i) => (
          <SwiperSlide key={i}>
            <ServiceCard icon={icon} title={title} text={text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ServicesSlide;
