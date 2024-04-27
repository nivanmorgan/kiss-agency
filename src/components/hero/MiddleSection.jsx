import { useState, useEffect } from 'react';

import { motion, useTransform, useSpring } from 'framer-motion';

import logo from '../../assets/imgs/kiss-agency-logo.png';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const MiddleSection = ({ scrollYProgress }) => {
  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  const [screenSize, setScreenSize] = useState(getWindowsDimension());
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // *SCROLL CONTROLS
  const hX = useTransform(scrollYProgress, [0, 0.4], [screenSize.width / 8, 0]);
  const springHX = useSpring(hX, { damping: 25 });

  const logoX = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
  const springLOGOX = useSpring(logoX, { damping: 25 });

  const textImgX = useTransform(
    scrollYProgress,
    [0, 0.35],
    [screenSize.width / 5, 0]
  );
  const springTextIMGX = useSpring(textImgX, { damping: 25 });

  return (
    <div className="w-screen min-w-[100vw] h-screen flex flex-col items-center justify-around lg:justify-start gap-0 lg:gap-[10vh pt-8">
      <div className="flex flex-col justify-center w-full">
        <div className="w-full pl-[25px] lg:pl-[100px] md:pr-[50px] grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            style={{ translateX: springLOGOX }}
            className="h-[60px] self-start hidden lg:block opacity-0"
          >
            <img
              src={logo}
              alt="logo"
              className="h-full w-auto object-contain"
            />
          </motion.div>
          <motion.div
            style={{ translateX: springTextIMGX }}
            className="space-y-5"
          >
            <div className="h-[45px] lg:h-[60px] flex lg:justify-end -ml-1">
              <img
                src={logo}
                alt="logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="!leading-[160%] w-full md:w-[350px]">
              Your Vision, Our Expertise: <br /> Crafting Innovative Solutions
              In Design, Development, Digital Marketing, And AI.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="h-full  flex flex-col justify-center">
        <motion.h1
          style={{ translateX: springHX }}
          className="text-[15vw] lg:text-[10vw] font-medium !leading-[100%] lg:!leading-[85%] pb-[2.5vw] relative pr-[25px] px-5 lg:px-0"
        >
          Elevate Your
          <br />
          <span>Business</span> With
          <br />
          <span>KISS</span> Design
          <motion.div
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.9 }}
            // transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            // href="#about"
            className=" lg:absolute lg:bottom-0 right-0 mt-7 md:mt-12 lg:mt-0 pointer-events-auto flex"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              href="tel:+515-207-2540"
              className="btn-1-v2 !font-medium text-sm md:text-base lg:mb-[4vw] block pointer-events-auto w-auto"
            >
              Call Now
            </motion.a>
          </motion.div>
        </motion.h1>
      </div>
    </div>
  );
};

export default MiddleSection;
