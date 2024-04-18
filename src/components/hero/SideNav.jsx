import React from 'react';

import { motion } from 'framer-motion';

import { navigation } from '../../utils/constants';

const NavLink = ({ text, link, contact }) => (
  <div className={`vertical-text`}>
    <a
      href={link}
      className={`capitalize text-[13px] font-bold ${
        contact && 'bg-[--black] text-[--white] py-4 px-2 block text-nowrap'
      }`}
    >
      {text}
    </a>
  </div>
);

const SideNav = ({ y }) => {
  return (
    <motion.div
      style={{ translateY: y }}
      className="absolute w-full h-screen bg-[--neutral] overflow-y-scroll no-scrollbar pointer-events-auto"
    >
      <div className="flex flex-col-reverse items-center justify-center gap-4 py-[2rem] ">
        {navigation.map((nav, i) => (
          <NavLink key={i} text={nav.text} link={nav.link} />
        ))}
        <NavLink contact text="contact us" link="#contact" />
      </div>
    </motion.div>
  );
};

export default SideNav;
