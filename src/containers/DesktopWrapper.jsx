import React, { useState, useEffect, useRef } from 'react';
import {
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';
import {
  About,
  OurValues,
  Services,
  DigitalSolutions,
  Contact,
} from '../containers';
import { Footer } from '../components';
import useMeasure from 'react-use-measure';
import { useNavStore, useContainerWidthStore } from '../utils/config';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const DesktopWrapper = () => {
  const updateSectionWidth = useContainerWidthStore(
    (state) => state.updateWidth
  );
  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  const [screenSize, setScreenSize] = useState(getWindowsDimension());
  let [scrollContainer, { width }] = useMeasure();

  useEffect(() => {
    const handleResize = () => {
      updateSectionWidth(width);
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // !NAVIGATION
  const navId = useNavStore((state) => state.navId);

  useEffect(() => {
    if (navId === 'about') {
      window.scrollTo({ top: screenSize.height * 4 });
    }
  }, [navId]);

  // *HORIZONTAL SCROLL
  const container = useRef();
  //   const scrollContainer = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
    layoutEffect: false,
  });

  const containerTranslation = useMotionValue(0);
  const xTranslation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, screenSize.width - width]
  );

  useEffect(() => {
    updateSectionWidth(width);
  }, [width]);

  useEffect(() => {
    updateSectionWidth(width);
  }, []);

  // *WIDTH OF EACH SECTION

  return (
    <div
      ref={container}
      className="h-[600vh] relative top-0 left-0 w-full pointer-events-none bg-blue-700 hidden xl:block"
    >
      <div className="!sticky top-0 left-0 w-full h-screen bg-red-600">
        <motion.div className="relative h-screen w-full bg-[--white] no-scrollbar overflow-hidden pointer-events-none">
          <motion.div
            ref={scrollContainer}
            style={{ translateX: xTranslation }}
            className="absolute top-0 left-0 w-auto h-screen flex flex-nowrap gap-0 pointer-events-none"
          >
            <div className="desktop-section-container">
              <About />
            </div>

            <div className="desktop-section-container">
              <OurValues />{' '}
            </div>
            <div className="desktop-section-container">
              <Services />{' '}
            </div>
            <div className="desktop-section-container">
              <DigitalSolutions />{' '}
            </div>
            <div className="desktop-section-container !flex-col xl:!overflow-auto no-scrollbar">
              <Contact />
              <Footer />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesktopWrapper;
