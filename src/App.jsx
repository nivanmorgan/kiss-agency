import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useNavStore } from './utils/config';

import {
  Hero,
  About,
  OurValues,
  Services,
  DigitalSolutions,
  Contact,
  DesktopWrapper,
} from './containers';
import {
  Navbar,
  Footer,
  SmoothScroll,
  SideNav,
  FixedNavbar,
} from './components';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

function App() {
  // !NAVIGATION
  const navId = useNavStore((state) => state.navId);

  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // *STICKY SIDEBAR
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (screenSize.width >= 768) {
        if (
          scrollTop >= screenSize.height * 1 &&
          scrollTop <= screenSize.height * 2
        ) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      } else {
        if (
          scrollTop >= screenSize.width * 1.33 &&
          scrollTop <= screenSize.height * 2
        ) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <SmoothScroll>
        <Hero />
        <DesktopWrapper />
        <div className="overflow-hidden relative">
          <div className="overflow-hidden relative xl:hidden">
            <About />
            <OurValues />
            <Services />
            <DigitalSolutions />
            <Contact />
            <Footer />
          </div>
          {/* Footer and Navbar */}
          {navId === 'home' && (
            <AnimatePresence>
              {sticky && (
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: [-10, 0], opacity: [0.5, 1] }}
                  exit={{ x: -10, opacity: 0 }}
                  className="fixed  top-0 left-0 w-[60px] lg:w-[60px] bg-[--neutral] min-h-screen"
                >
                  <SideNav animate />
                </motion.div>
              )}
            </AnimatePresence>
          )}
          <Navbar />
          {/* {navId === 'home' ? (
            <Navbar />
          ) : navId === 'about' ? (
            <Navbar />
          ) : (
            <FixedNavbar />
          )} */}
          {/* <Navbar /> */}
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
