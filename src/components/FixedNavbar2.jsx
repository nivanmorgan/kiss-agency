import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { navigation } from "../utils/constants";
import { useNavStore } from "../utils/config";

import Logo from "./Logo";

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Navbar = () => {
  // !NAVIGATION
  const navId = useNavStore((state) => state.navId);
  const updateNavId = useNavStore((state) => state.updateNavId);

  const navigateToFunction = async (link) => {
    window.scrollTo({ top: 0 });
    setScrolledOffHero(true);
    updateNavId(link);
  };

  const [screenSize, setScreenSize] = useState(getWindowsDimension());

  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [menuToggled, setMenuToggled] = useState(false);
  const [scrolledOffHero, setScrolledOffHero] = useState(false);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: -10, opacity: 0.5 }}
          whileInView={{ y: [-10, 0], opacity: [0.5, 1] }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className={` bg-white fixed top-0 left-0 w-full h-[70px] lg:h-[80px] items-center justify-center shadow z-[1000000]`}
        >
          <div className="container flex items-center justify-between gap-[25px] xl:gap-[50px] relative h-full">
            <div className="hidden lg:flex flex-1 justify-between items-center w-full">
              {navigation.slice(0, 4).map(({ text, link }, i) => (
                <a
                  key={i}
                  href="/"
                  // onClick={() => navigateToFunction(link)}
                  className={`navlinks`}
                >
                  {text}
                </a>
              ))}
            </div>
            <div className="">
              <Logo />
            </div>
            <div className="hidden lg:flex flex-1 justify-between items-center w-full">
              {navigation.slice(4, 6).map(({ text, link }, i) => (
                <a
                  // variants={slideInBottom}
                  // initial="initial"
                  // whileInView="animate"
                  // custom={0}
                  key={i}
                  // href={link}
                  href="/"
                  // onClick={() => navigateToFunction(link)}
                  className="navlinks"
                >
                  {text}
                </a>
              ))}
              <a
                onClick={() => navigateToFunction("contact")}
                className="btn-1"
              >
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
          </div>
        </motion.div>
      </AnimatePresence>
      {/* popup */}
      <AnimatePresence>
        {menuToggled && (
          <motion.div className="fixed top-0 left-0 w-full h-screen bg-[#ffffffaa] backdrop-blur z-[1000000]">
            <div className="flex flex-col gap-[5vh] h-full justify-start items-center pt-[10vh]">
              <div>
                <Logo />
              </div>

              <div className="flex flex-col gap-[3vh] justify-center items-center ">
                {navigation.map(({ text, link }, i) => (
                  <a
                    key={i}
                    // href={link}
                    href="/"
                    // onClick={() => {
                    //   navigateToFunction(link);
                    //   setMenuToggled(false);
                    // }}
                    className="navlinks !text-[7vw] !font-semibold"
                  >
                    {text}
                  </a>
                ))}
                <a
                  onClick={() => navigateToFunction("contact")}
                  className="btn-1-v2 mt-5"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* *TOGGLE BUTTON */}
            <div className="fixed top-0 left-0 w-full h-[80px] container flex items-center justify-end">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
