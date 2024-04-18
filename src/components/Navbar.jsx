import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { CgMenuLeftAlt } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
import logo from '../assets/imgs/kiss-agency-logo.svg';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [menuToggled, setMenuToggled] = useState(false);
  const [scrolledOffHero, setScrolledOffHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= screenSize.height * 3.5) {
        setScrolledOffHero(true);
      } else {
        setScrolledOffHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      whileInView={{ y: [10, 0], opacity: [0.5, 1] }}
      //   transition={{ duration: 0.4, type: 'tween' }}
      className={`${
        scrolledOffHero ? 'flex' : 'hidden'
      } bg-white fixed top-0 left-0 w-full h-[70px] lg:h-[80px] items-center justify-center shadow z-[1000000]`}
    >
      <div className="container py-5 flex items-center justify-between gap-[25px] xl:gap-[50px] relative">
        <div className="hidden lg:flex flex-1 justify-between items-center w-full">
          <a href="#" className="navlinks">
            Home
          </a>
          <a href="#" className="navlinks">
            About us
          </a>
          <a href="#" className="navlinks">
            Our values
          </a>
          <a href="#" className="navlinks">
            Our Services
          </a>
        </div>
        <div className="">
          <img src={logo} className="h-[40px] lg:h-[50px] object-cover" />
        </div>
        <div className="hidden lg:flex flex-1 justify-between items-center w-full">
          <a href="#" className="navlinks">
            Digital Solutions
          </a>
          <a href="#" className="navlinks">
            Subscribe
          </a>
          <button className="btn-1">Contact Us</button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className=""
            onClick={() => setMenuToggled((toggled) => !toggled)}
          >
            {menuToggled ? (
              <MdClose className="text-[--black] text-2xl" />
            ) : (
              <CgMenuLeftAlt className="text-[--black] text-2xl" />
            )}
          </button>
        </div>

        {/* popup */}
        {/* {menuToggled && (
					<div className="fixed w-full left-0 top-0 h-screen bg-[--overlay]"></div>
				)} */}
      </div>
    </motion.div>
  );
};

export default Navbar;
