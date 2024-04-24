import React from 'react';
import { motion } from 'framer-motion';
// import logo from '../assets/imgs/kiss-agency-logo.png';
import { Logo, DottedNavigation } from '../components';

import { slideInRight, slideInBottom } from '../utils/variants';

const Footer = () => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      whileInView="animate"
      custom={0}
      className="py-[25px] md:py-[50px] xl:py-10 bg-[--white] xl:!min-h-[175px] xl:max-h-[175px]  xl:h-full"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-[25px] lg:gap-[50px]">
        <div className="lg:col-span-2 footer-header-space">
          {/* <img
            src={logo}
            alt="logo"
            className="w-auto h-[45px] lg:h-[50px] object-contain"
          /> */}
          <Logo />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 footer-header-space gap-[25px]">
          <div>
            <h2>Call</h2>
            <p>+122 - 123456789</p>
          </div>
          <div>
            <h2>Mail</h2>
            <p>loremipsum@info.com</p>
          </div>
          <div>
            <h2>Location</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum
            </p>
          </div>
        </div>
      </div>
      {/* <DottedNavigation /> */}
    </motion.div>
  );
};

export default Footer;
