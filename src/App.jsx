import './App.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import {
  Hero,
  About,
  OurValues,
  Services,
  DigitalSolutions,
  Contact,
} from './containers';
import { Navbar, Footer, SmoothScroll, SideNav } from './components';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

function App() {
  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
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
        if (scrollTop >= 700 + 60 && scrollTop <= screenSize.height * 3) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      } else {
        if (
          scrollTop >= screenSize.width * 2 + 60 &&
          scrollTop <= screenSize.height * 3
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
    <SmoothScroll>
      <Hero />
      <About />
      <OurValues />
      <Services />
      <DigitalSolutions />
      <Contact />

      {/* Footer and Navbar */}
      {sticky && (
        <div className="fixed top-0 left-0 w-[50px]">
          <SideNav />
        </div>
      )}
      <Navbar />
      <Footer />
    </SmoothScroll>
  );
}

export default App;
