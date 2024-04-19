import { useState, useEffect, useRef } from 'react';

import { motion, useTransform, useSpring } from 'framer-motion';

import { SideNav, Cubes } from '../../components';
import hero1 from '../../assets/imgs/hero1.png';
import arrow from '../../assets/imgs/arrow-right.svg';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const FirstSection = ({ scrollYProgress }) => {
  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const yTranslate = useTransform(
    scrollYProgress,
    [0, screenSize.width >= 768 ? 0.25 : 0.35],
    [screenSize.height / 2, 0]
  );
  const springYTranslate = useSpring(yTranslate, { damping: 35 });

  // *ON CLICK SCROLL TO
  const handleScrollTo = () => {
    window.scrollTo({
      top:
        screenSize.width > 728
          ? screenSize.height * 1.5
          : screenSize.height * 2.5,
      behavior: 'smooth',
    });
    console.log('Clicked');
  };

  return (
    <div className="flex gap-0 !w-screen !min-w-[100vw] !max-w-[100vw] !md:w-[50vw] md:!min-w-[50vw] md:!max-w-[50vw] justify-start h-screen">
      <div className="relative h-full flex flex-col w-full">
        <div className="h-[80vh] bg-[--black] w-full">
          {/* <img
            src={hero1}
            alt="hero"
            className="w-full h-[80vh] object-cover"
          /> */}
          <Cubes />
        </div>
        <div className="relative flex flex-col justify-center h-full">
          <div className="flex justify-center">
            <button className="absolute top-0 btn-2-v2 translate-y-[-50%]">
              Know More
            </button>
          </div>
          <button
            onClick={handleScrollTo}
            type="button"
            className="cursor-pointer pointer-events-auto"
          >
            <img
              src={arrow}
              alt="arrow"
              className="h-[22.5px] md:h-[25px] w-full object-contain"
            />
          </button>
        </div>
      </div>
      <div className="hidden md:block h-full w-[60px] md:!w-[60px] min-w-[60px] z-10 bg-[--neutral] relative">
        <SideNav y={springYTranslate} />
        {/* <div
          className={`fixed top-0 w-[60px] bg-[--neutral] h-screen ${
            screenSize.width >= 768
              ? `left-[${500 - 6}]`
              : `left-[${screenSize.width - 60}]`
          }`}
        >
          <SideNav y={yTranslate} />
        </div> */}
      </div>
    </div>
  );
};

export default FirstSection;
