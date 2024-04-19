import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CgMenuLeftAlt } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
// import logo from '../assets/imgs/kiss-agency-logo.png';
import { navigation } from '../utils/constants';

import Logo from './Logo';

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
      if (scrollTop >= screenSize.height * 4.9) {
        setScrolledOffHero(true);
      } else {
        setScrolledOffHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolledOffHero && (
        <motion.div
          initial={{ y: -10, opacity: 0.5 }}
          whileInView={{ y: [-10, 0], opacity: [0.5, 1] }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className={` bg-white fixed top-0 left-0 w-full h-[70px] lg:h-[80px] items-center justify-center shadow z-[1000000]`}
        >
          <div className="container py-5 flex items-center justify-between gap-[25px] xl:gap-[50px] relative">
            <div className="hidden lg:flex flex-1 justify-between items-center w-full">
              {navigation.slice(0, 4).map(({ text, link }, i) => (
                <a key={i} href={link} className="navlinks">
                  {text}
                </a>
              ))}
            </div>
            <div className="">
              <Logo />
            </div>
            <div className="hidden lg:flex flex-1 justify-between items-center w-full">
              {navigation.slice(4, 6).map(({ text, link }, i) => (
                <a key={i} href={link} className="navlinks">
                  {text}
                </a>
              ))}
              <a href="#contact" className="btn-1">
                Contact Us
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="z-[10]"
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
            {menuToggled && (
              <div className="fixed top-0 left-0 w-full h-screen bg-[#ffffffaa] backdrop-blur">
                <div className="flex flex-col gap-[5vh] h-full justify-start items-center pt-[10vh]">
                  <div>
                    <Logo />
                  </div>

                  <div className="flex flex-col gap-[3vh] justify-center items-center ">
                    {navigation.map(({ text, link }, i) => (
                      <a
                        key={i}
                        href={link}
                        className="navlinks !text-[7vw] !font-semibold"
                      >
                        {text}
                      </a>
                    ))}
                    <a href="#contact" className="btn-1-v2 mt-5">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
