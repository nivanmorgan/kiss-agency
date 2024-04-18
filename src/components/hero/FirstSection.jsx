import { useState, useEffect } from 'react';

import { motion, useTransform, useScroll } from 'framer-motion';

import { SideNav } from '../../components';
import hero1 from '../../assets/imgs/hero1.png';
import arrow from '../../assets/imgs/arrow-right.svg';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const FirstSection = () => {
  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();

  const yTranslate = useTransform(
    scrollY,
    [0, screenSize.width >= 768 ? 500 - 6 : screenSize.width - 60],
    [screenSize.height / 2, 0]
  );

  return (
    <div className="flex gap-0 !w-screen !min-w-[100vw] !max-w-[100vw] !md:w-[500px] md:!min-w-[500px] md:!max-w-[500px] justify-start h-screen">
      <div className="h-full flex flex-col w-full">
        <div className="h-[80vh]">
          <img
            src={hero1}
            alt="hero"
            className="w-full h-[80vh] object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center h-full">
          <div className="flex justify-center">
            <button className="absolute top-0 btn-2-v2 translate-y-[-50%]">
              Know More
            </button>
          </div>
          <button>
            <img
              src={arrow}
              alt="arrow"
              className="h-[22.5px] md:h-[25px] w-full object-contain"
            />
          </button>
        </div>
      </div>
      <div className="h-full w-[60px] bg-[--neutral] relative">
        <SideNav y={yTranslate} />
      </div>
    </div>
  );
};

export default FirstSection;
