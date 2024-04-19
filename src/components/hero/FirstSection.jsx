import { useState, useEffect } from 'react';

import { motion, useTransform, useScroll } from 'framer-motion';

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
          <button>
            <img
              src={arrow}
              alt="arrow"
              className="h-[22.5px] md:h-[25px] w-full object-contain"
            />
          </button>
        </div>
      </div>
      <div className="hidden md:block h-full !w-[60px] min-w-[55px] z-10 bg-[--neutral] relative">
        <SideNav y={yTranslate} />
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
